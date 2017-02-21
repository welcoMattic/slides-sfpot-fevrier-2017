<?php

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
