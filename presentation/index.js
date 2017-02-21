import React from "react";
import { Code, CodePane, Deck, Heading, Image, Link, List, ListItem, Slide, Text } from "spectacle";
import JoliSlide from './jolislide';
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    payum: require("../assets/payum-logo.png"),
    jolicode: require("../assets/jolicode-logo.png"),
    avatar: require("../assets/avatar.jpg"),
    symfony: require("../assets/symfony.svg"),
    laravel: require("../assets/laravel.svg"),
    docker: require("../assets/docker.svg"),
    magic: require("../assets/magic.gif"),
    minions: require("../assets/minions.gif"),
    micDrop: require("../assets/mic-drop.gif"),
};

preloader(images);

const colors = {
    white: "white",
    yellow: "#f7d325",
    black: "#2b2b2a",
};

const fonts = {
    primary: "Montserrat",
    secondary: "Helvetica"
};

const theme = createTheme(colors, fonts);

theme.screen.progress.bar.bar.background = colors.yellow;

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={[]} theme={theme} textColor="black" progress="bar">
                <Slide bgColor="white">
                    <Image src={images.payum} width={200}/>
                    <Heading size={3} fit caps lineHeight={1} textColor="black">Payum</Heading>
                    <Text margin="10px 0 0" textColor="black" fit bold>
                        Payum offers everything you need to work with payments.
                    </Text>
                    <Text margin="10px 0 0" textColor="black" fit bold>
                        From simplest use cases to very advanced ones.
                    </Text>
                </Slide>
                <JoliSlide name="Mathieu Santostefano" pseudo="welcomattic" logo={images.jolicode} avatar={images.avatar} />
                <Slide bgColor="white">
                    <Heading size={3} caps lineHeight={1} textColor="black">Payum</Heading>
                    <Text margin="10px 0 0" textColor="black" fit>
                        Librairie PHP 5.5+ d'abstraction du processus de paiement.
                    </Text>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="10px 0 0" textColor="black" fit>
                        Support de plusieurs passerelles de paiement.
                    </Text>
                    <List>
                        <ListItem>PayPal</ListItem>
                        <ListItem>Stripe</ListItem>
                        <ListItem>Be2Bill</ListItem>
                        <ListItem>Klarna</ListItem>
                        <ListItem>Offline</ListItem>
                        <ListItem>...</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="10px 0 0" textColor="black" fit>
                        Intégration aux frameworks (bundle Symfony, package Laravel ...).
                    </Text>
                    <Image src={images.symfony} width={200} margin="50px 50px 0 0"/>
                    <Image src={images.laravel} width={250}/>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="10px 0 0" textColor="black" fit>
                        Disponible sous forme de microservice (Docker) avec un client JS.
                    </Text>
                    <Image src={images.docker} width={200} margin="50px 0 0 0"/>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="10px 0 0" textColor="black" fit>
                        Drivers de storage :
                    </Text>
                    <List>
                        <ListItem>Doctrine ORM</ListItem>
                        <ListItem>Doctrine MongoODM</ListItem>
                        <ListItem>Filesystem</ListItem>
                        <ListItem>Propel 2</ListItem>
                        <ListItem>Custom ...</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="10px 0 0" textColor="black" fit>
                        Payum dans Symfony
                    </Text>
                    <Image src={images.symfony} width={300} margin="50px 0 0 0"/>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={2} caps fit lineHeight={1} textColor="black">
                        Bundle or not?
                    </Heading>
                </Slide>
                <Slide bgColor="white" notes="Pros: Facile à installer, services prêts <br> Cons: Models imposés :(">
                    <Heading size={2} caps fit lineHeight={1} textColor="black">
                        Not.
                    </Heading>
                </Slide>
                <Slide bgColor="white" notes="3DSecure notamment">
                    <Text textColor="black" fit>Models imposés:</Text>
                    <Text textColor="black" margin="50px 0 0 0">Payment</Text>
                    <Text textColor="black">PaymentToken</Text>
                </Slide>
                <Slide bgColor="white" notes="3DSecure notamment">
                    <Text margin="50px 0 0 0" textColor="black" fit>Difficile d'ajouter des actions custom au Gateway</Text>
                </Slide>
                <Slide bgColor="white" notes="3DSecure notamment">
                    <Text margin="50px 0 0 0" textColor="black" fit>Implémentation (très) incomplète pour Be2Bill</Text>
                </Slide>
                <Slide bgColor="white">
                    <Heading size={1} caps fill lineHeight={1} textColor="black">
                        Réaliser un paiement avec Payum
                    </Heading>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="10px 0 0" textColor="black" fit>
                        Installer Payum
                    </Text>
                    <CodePane lang="bash" source={require("raw-loader!../assets/install.sh")} margin="50px 0 0 0"></CodePane>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="10px 0 0" textColor="black" fit>
                        Ce que l'on a à disposition
                    </Text>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="0 0 50px 0" textColor="black" fit>Actions & Requests</Text>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="0 0 50px 0" textColor="black" fit>Actions de base</Text>
                    <List>
                        <ListItem>AuthorizePaymentAction</ListItem>
                        <ListItem>CapturePaymentAction</ListItem>
                        <ListItem>GatewayAwareAction</ListItem>
                        <ListItem>GetCurrencyAction</ListItem>
                        <ListItem>GetTokenAction</ListItem>
                        <ListItem>PayoutPayoutAction</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white" notes="Bridge Symfony">
                    <Text margin="0 0 50px 0" textColor="black" fit>Actions supplémentaires</Text>
                    <List>
                        <ListItem>GetHttpRequestAction</ListItem>
                        <ListItem>ObtainCreditCardAction</ListItem>
                        <ListItem>RenderTemplateAction</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white" notes="Be2Bill">
                    <Text margin="0 0 50px 0" textColor="black" fit>Actions supplémentaires</Text>
                    <List>
                        <ListItem>CaptureAction</ListItem>
                        <ListItem>CaptureOffsiteAction</ListItem>
                        <ListItem>ConvertPaymentAction</ListItem>
                        <ListItem>NotifyAction</ListItem>
                        <ListItem>StatusAction</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="0 0 50px 0" textColor="black" fit>Requests de base</Text>
                    <List>
                        <ListItem textSize="34px">Authorize</ListItem>
                        <ListItem textSize="34px">Cancel</ListItem>
                        <ListItem textSize="34px">Capture</ListItem>
                        <ListItem textSize="34px">Convert</ListItem>
                        <ListItem textSize="34px">GetCreditCardToken</ListItem>
                        <ListItem textSize="34px">GetHttpRequest</ListItem>
                        <ListItem textSize="34px">GetHumanStatus</ListItem>
                        <ListItem textSize="34px">GetToken</ListItem>
                        <ListItem textSize="34px">Notify</ListItem>
                        <ListItem textSize="34px">ObtainCreditCard</ListItem>
                        <ListItem textSize="34px">Payout</ListItem>
                        <ListItem textSize="34px">Refund</ListItem>
                        <ListItem textSize="34px">RenderTemplate</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="0 0 50px 0" textColor="black" fit>
                        2 FormTypes pour les Cartes Bancaires
                    </Text>
                    <Code>CreditCardType.php</Code>
                    <br/><br/>
                    <Code>CreditCardExpirationDateType.php</Code>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="0 0 50px 0" textColor="black" fit>
                        1 contrainte de validation et son validator
                    </Text>
                    <Code>CreditCardDateValidator.php</Code>
                    <br/><br/>
                    <Code>CreditCardDate.php</Code>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="0 0 50px 0" textColor="black" fit>Concrètement, qu'est ce qu'on fait ?</Text>
                    <Text margin="0 0 50px 0" textColor="black" fit>Dans quel ordre ?</Text>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="0 0 50px 0" textColor="black" fit>On utilise le formulaire CreditCardType</Text>
                </Slide>
                <Slide bgColor="white" notes="On valide le schema de carte, son existence, et la date d'expiration sans appel externe">
                    <Text margin="0 0 50px 0" textColor="black" fit>On valide les données</Text>
                    <Text margin="0 0 50px 0" textColor="black" fit>(grâce aux contraintes de validation CreditCardDate, CardScheme et Luhn)</Text>
                </Slide>
                <Slide bgColor="white" notes="On valide le schema de carte, son existence, et la date d'expiration sans appel externe">
                    <Text margin="0 0 50px 0" textColor="black" fit>On interroge la passerelle de paiement</Text>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="0 0 50px 0" textColor="black" fit>On traite la réponse</Text>
                    <List>
                        <ListItem>Captured</ListItem>
                        <ListItem>Failed</ListItem>
                        <ListItem>Redirection 3DSecure</ListItem>
                    </List>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="0 0 50px 0" textColor="black" fit>On enregistre le paiement en base de données</Text>
                </Slide>
                <Slide bgColor="white">
                    <Image src={images.magic} width={600}/>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="0 0 50px 0" textColor="black" fit>Du code, du code, du code !!!</Text>
                    <Image src={images.minions} width={600}/>
                </Slide>
                <Slide bgColor="white" notes="On créé un service Payum (yml)">
                    <CodePane lang="yaml" source={require("raw-loader!../assets/services.yml")}></CodePane>
                </Slide>
                <Slide bgColor="white" notes="On créé un service Payum (php)">
                    <CodePane lang="php" source={require("raw-loader!../assets/payum-service-1.php")}></CodePane>
                </Slide>
                <Slide bgColor="white" notes="On créé un service Payum (php)">
                    <CodePane lang="php" source={require("raw-loader!../assets/payum-service-2.php")}></CodePane>
                </Slide>
                <Slide bgColor="white" notes="On créé un service Payum (php)">
                    <CodePane lang="php" source={require("raw-loader!../assets/payum-service-3.php")}></CodePane>
                </Slide>
                <Slide bgColor="white" notes="On créé un service Payum (php)">
                    <CodePane lang="php" source={require("raw-loader!../assets/payum-service-4.php")}></CodePane>
                </Slide>
                <Slide bgColor="white" notes="Controller de paiement">
                    <CodePane lang="php" source={require("raw-loader!../assets/payment-controller-1.php")}></CodePane>
                </Slide>
                <Slide bgColor="white" notes="Controller de paiement">
                    <CodePane lang="php" source={require("raw-loader!../assets/payment-controller-2.php")}></CodePane>
                </Slide>
                <Slide bgColor="white" notes="Controller de paiement">
                    <CodePane lang="php" source={require("raw-loader!../assets/payment-controller-3.php")}></CodePane>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="0 0 50px 0" textColor="black" fit>Bonus 3DSecure (<Link href="https://github.com/Payum/Payum/pull/625">PR ouverte</Link>)</Text>
                </Slide>
                <Slide bgColor="white">
                    <Text margin="0 0 50px 0" textColor="black" fit>Merci à tous !</Text>
                    <Image src={images.micDrop} width={500} margin="0 0 50px 0"/>
                    <Text margin="0 0 50px 0" textColor="black" fit>Slides : <Link href="https://goo.gl/npcC7Q">https://goo.gl/npcC7Q</Link></Text>
                </Slide>
            </Deck>
        );
    }
}
