<?php

            $captureToken = $payum->getTokenFactory()->createCaptureToken('be2bill', $payment, '');
            $captureToken->setDetails($details);

            $gateway->execute($captureRequest = new Capture($captureToken), true);
            $gateway->execute($statusRequest = new GetHumanStatus($captureRequest->getToken()), true);

            $payment->setStatus((string) $statusRequest->getValue());
            $this->getDoctrine()->getManager()->persist($payment);
            $this->getDoctrine()->getManager()->flush();

            $payum->getHttpRequestVerifier()->invalidate($captureToken);
        }
    }
}
