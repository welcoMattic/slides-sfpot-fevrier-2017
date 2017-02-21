<?php
/*...*/
class PayumService
{
    /*...*/
    public function getPayumInstance(): Payum
    {
        $doctrineParams = $this->doctrine->getManager()->getConnection()->getParams();
        $payumBuilder = new PayumBuilder();

        $payumBuilder->addStorage(Payment::class, new DoctrineStorage(
            EntityManager::create($doctrineParams, $this->doctrine->getConfiguration()),
            'App\Entity\Payment'
        ));

        $payumBuilder->setTokenStorage(new DoctrineStorage(
            EntityManager::create($doctrineParams, $this->doctrine->getConfiguration()),
            'Danio\Store\Order\Entity\PaymentToken'
        ));

        $payum = $payumBuilder->getPayum();
/*...*/
