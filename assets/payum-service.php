<?php
/*...*/
class PayumService
{
    /*...*/
    public function getPayumInstance(): Payum
    {
        $payumBuilder = new PayumBuilder();
        $payumBuilder->addStorage(Payment::class, $this->paymentStorage)
            ->setTokenStorage($this->tokenStorage);

        $gateway = $this->factory->create([
            'identifier' => $this->be2billCredentials['identifier'],
            'password' => $this->be2billCredentials['password'],
            'sandbox' => $this->be2billCredentials['sandbox'],
        ]);

        $tokenFactory = new TokenFactory($this->tokenStorage, $payumBuilder->getPayum(), $this->router->getGenerator());
        $genericTokenFactory = new GenericTokenFactory($tokenFactory, []);

        $gateway->addAction(new GetTokenAction($this->tokenStorage));
        $gateway->addAction(new NotifyAction());
        $gateway->addExtension(new GenericTokenFactoryExtension($genericTokenFactory));
        $gateway->addExtension(new StorageExtension($this->paymentStorage), true);

        $payumBuilder->addGateway($this->gatewayName, $gateway);

        return $payumBuilder->getPayum();
    }
}
