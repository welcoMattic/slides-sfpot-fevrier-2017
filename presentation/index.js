import React from "react";
import { BlockQuote, Cite, Deck, Heading, Image, List, ListItem, Quote, Slide, Text } from "spectacle";
import JoliSlide from './jolislide';
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  payum: require("../assets/payum-logo.png"),
  jolicode: require("../assets/jolicode-logo.png"),
  avatar: require("../assets/avatar.jpg")
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
          <Heading size={3} fit caps lineHeight={1} textColor="black">
            Payum
          </Heading>
          <Text margin="10px 0 0" textColor="black" size={1} fit bold>
            Payum offers everything you need to work with payments.
          </Text>
          <Text margin="10px 0 0" textColor="black" size={1} fit bold>
            From simplest use cases to very advanced ones.
          </Text>
        </Slide>
        <JoliSlide name="Mathieu Santostefano" pseudo="welcomattic" logo={images.jolicode} avatar={images.avatar} />
        <Slide bgColor="white">
          - Présentation Payum
          - Passerelles de paiement disponibles
          - Intégration aux frameworks
          - Stockages disponibles
          - Objets utiles
          - Exemple de workflow de payment simple
          - Comment le réaliser avec Payum (avec Be2Bill)
          - Bonus : 3DSecure ( [Feature/3dsecure be2bill by welcoMattic · Pull Request #625 · Payum/Payum · GitHub](https://github.com/Payum/Payum/pull/625))
        </Slide>
      </Deck>
    );
  }
}
