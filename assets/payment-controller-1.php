<?php

class PaymentController extends Controller
{
    public function paymentAction()
    {
        $payum = $this->get('app.service.payum')->getPayumInstance();
        $gateway = $payum->getGateway('be2bill');

        $creditCard = new CreditCard();
        $creditCardForm = $this->createForm(CreditCardType::class, $creditCard, ['method' => 'POST']);
