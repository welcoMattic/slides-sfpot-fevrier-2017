<?php

$payum = $this->get('app.service.payum')->getPayumInstance();
$gateway = $payum->getGateway('be2bill');

$creditCard = new CreditCard();
$creditCardForm = $this->createForm(CreditCardType::class, $creditCard, ['method' => 'POST']);

if ($request->getMethod() === 'POST') {
    $gateway->execute($convertRequest = new Convert($payment, 'array'));
    $details = $convertRequest->getResult();

    $details = array_merge($details, [
        'CARDCODE' => $creditCard->getNumber(),
        'CARDCVV' => $creditCard->getSecurityCode(),
        'CARDVALIDITYDATE' => $creditCard->getExpireAt()->format('m-y'),
        'CARDFULLNAME' => $creditCard->getHolder(),
        '3DSECURE' => 'YES',
    ]);

    $creditCard->secure();

    $captureToken = $payum->getTokenFactory()->createCaptureToken('be2bill', $payment, '');
    $captureToken->setDetails($details);

    $gateway->execute($captureRequest = new Capture($captureToken), true);
    $gateway->execute($statusRequest = new GetHumanStatus($captureRequest->getToken()), true);

    $payment->setStatus((string) $statusRequest->getValue());
    $this->getDoctrine()->getManager()->persist($payment);
    $this->getDoctrine()->getManager()->flush();

    $payum->getHttpRequestVerifier()->invalidate($captureToken);
}
