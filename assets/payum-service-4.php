<?php
/*...*/
        /*$gateway = $this->factory->create([
            'identifier' => $this->be2billCredentials['identifier'],
            'password' => $this->be2billCredentials['password'],
            'sandbox' => $this->be2billCredentials['sandbox'],
        ]);

        $tokenFactory = new TokenFactory($this->tokenStorage, $payum, $this->router->getGenerator());
        $genericTokenFactory = new GenericTokenFactory($tokenFactory, []);

        $gateway->addExtension(new GenericTokenFactoryExtension($genericTokenFactory));
        $gateway->addExtension(new StorageExtension($this->paymentStorage), true);*/

        $gateway->addAction(new GetTokenAction($this->tokenStorage));
        $gateway->addAction(new NotifyAction());

        $payumBuilder->addGateway($this->gatewayName, $gateway);

        return $payum;
    }
}
