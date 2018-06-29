// Import React
import React from "react";
import Flex, { FlexItem } from "mineral-ui/Flex";
import { createStyledComponent } from "mineral-ui/styles";
import _Text from "mineral-ui/Text";
import CodeSlide from "spectacle-code-slide";
import kat from "../assets/kat.png";
import preloader from "spectacle/lib/utils/preloader";

// Import Spectacle Core tags
import {
  Anim,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Markdown as _Markdown,
  Notes,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const styles = {
  floatingMinerals: ({ theme }) => ({
    height: 360,
    alignSelf: "center",
    // display: "block !important",
    // margin: `${theme.baseline_2} auto ${theme.baseline_2}`,
    width: 300,

    [theme.bp_home_bigH3]: {
      margin: `0 auto ${theme.baseline_3}`
    },

    [theme.bp_home_guidelinesMultiColumn]: {
      height: 300,
      flex: "0 0 300px",
      order: 2,
      margin: 0
    }
  }),
  markdown: {
    color: "white",
    fontSize: "3rem"
  }
};

const floatingMineralsSvg = require("!!raw-loader!../assets/minerals.svg");

const FloatingMinerals = createStyledComponent("div", styles.floatingMinerals);
const Markdown = createStyledComponent(_Markdown, styles.markdown);

const MineralText = createStyledComponent(_Text, {
  fontFamily: "Montserrat",
  fontSize: "3.5rem",
  color: "#fe5879",
  display: "inline"
});

const MineralTextFooter = createStyledComponent(_Text, {
  fontFamily: "Montserrat"
});

const theme = createTheme({
  primary: "white",
  secondary: "#2c2c33",
  tertiary: "#fe5879",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const images = {
  ca: require("../assets/ca-logo-white.png")
};

// preloader({
//   kat
// });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck contentWidth="80vw" transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide align="flex-start" transition={["zoom"]} bgColor="secondary">
          <Flex direction="column" justifyContent="space-between" height="75vh" marginTop="18vh" marginBottom="7vh">
            <FlexItem>
              <Flex justifyContent="center">
                <FloatingMinerals
                  dangerouslySetInnerHTML={{ __html: floatingMineralsSvg }}
                />
              </Flex>
              <Heading size={1} caps textColor="primary">
            Mineral UI Design System
              </Heading>
              <Text margin="10px 0 0" textColor="primary" size={3} bold>
            2018 ASE Training
              </Text>
            </FlexItem>
            <FlexItem>
              <MineralTextFooter
                appearance="prose"
                element="span"
                color="white"
              >
                  Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        {/* <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide> */}
        {/* <Slide align="flex-start" transition={["fade"]} bgColor="secondary" textColor="primary">
          <Flex>
            <FlexItem marginTop={100}>
              <Heading size={6} textColor="tertiary">Mineral UI User Interface</Heading>
            </FlexItem>
          </Flex>
          <Flex direction="column" height="80vh" justifyContent="center">
            <FlexItem>
              <Text margin="10px 0 0" textColor="primary" textSize="3em" textAlign="left">
            Mineral UI is a library of React components that are easily consumable, reflect the intent of the style guide, and increase the speed of development.
              </Text>
            </FlexItem>
            <FlexItem>
              <List textColor="primary">
                <ListItem>Zero compromise with faster and higher quality code</ListItem>
                <ListItem>Work on things that matter instead of repetitive UI.</ListItem>
                <ListItem>Consistency becomes a by-product, not a mandate</ListItem>
              </List>
            </FlexItem>
          </Flex>
        </Slide> */}
        <Slide align="flex-start" transition={["zoom"]} bgColor="secondary">
          <Flex direction="column" justifyContent="space-between" height="90vh" marginBottom="10vh">
            <FlexItem marginTop="10vh" marginBottom="-10vh">
              <Heading size={1} textColor="tertiary" width="2000px">Design Systems</Heading>
            </FlexItem>
            <FlexItem>
              <Text margin="5rem 0" textColor="primary" textSize="4rem">
                Industry wide, everyone is building design systems:
              </Text>
              <Text textColor="primary" textSize="3.5rem">Google: <MineralText>Material</MineralText></Text>
              <Text textColor="primary" textSize="3.5rem">Twitter: <MineralText>Bootstrap</MineralText></Text>
              <Text textColor="primary" textSize="3.5rem">IBM: <MineralText>Carbon</MineralText></Text>
              <Text textColor="primary" textSize="3.5rem">Salesforce: <MineralText>Lightning</MineralText></Text>
              <Text textColor="primary" textSize="3.5rem">Shopify: <MineralText>Polaris</MineralText></Text>
              <Text margin="5rem 0" textColor="primary" textSize="4rem">
                CA's design system = Mineral UI; launched last fall.
              </Text>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color="white"
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="secondary">
          <Flex direction="column" justifyContent="space-between" height="90vh" marginBottom="10vh">
            <FlexItem marginTop="10vh" marginBottom="-10vh">
              <Heading size={1} textColor="tertiary" width="2000px">Why though?</Heading>
            </FlexItem>
            <FlexItem>
              <Anim
                fromStyle={{ opacity: 0 }}
                toStyle={[{ opacity: 1 }, { opacity: 0.2 }]}
                transitionDuration={300}
              >
                <Text textColor="primary" textSize="3.5rem">Allows the company to be <MineralText>unified in its design</MineralText> vision; consistency becomes a by-product, not a mandate</Text>
              </Anim>
              <Anim
                fromStyle={{ opacity: 0 }}
                toStyle={[{ opacity: 1 }, { opacity: 0.2 }]}
                transitionDuration={300}
              >
                <Text textColor="primary" textSize="3.5rem">Provides an avenue for <MineralText>quick & efficient changes</MineralText>; built for re-use at scale</Text>
              </Anim>
              <Anim
                fromStyle={{ opacity: 0 }}
                toStyle={[{ opacity: 1 }]}
                transitionDuration={300}
              >
                <Text textColor="primary" textSize="3.5rem">Frees up <MineralText>cognitive resources</MineralText> for developers</Text>
              </Anim>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color="white"
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Time is money.</Quote>
            <Cite>Benjamin Franklin</Cite>
          </BlockQuote>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="secondary">
          <Flex direction="column" justifyContent="space-between" height="90vh" marginBottom="10vh">
            <FlexItem marginTop="10vh" marginBottom="-10vh">
              <Heading size={1} textColor="tertiary" width="2000px">Exercise time!</Heading>
            </FlexItem>
            <FlexItem>
              <Text textColor="primary" textSize="4rem">Mineral UI includes a component library.</Text>
              <Text textColor="primary" textSize="4rem">Components are simple things like selects, checkboxes, and pop-up windows.</Text>
              <Text textColor="primary" textSize="4rem">Your task: Pair with the person(s) next to you & develop a button</Text>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color="white"
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="secondary">
          <Notes>
            Encapsulation - implements and advocates for the CA Style Guide, making components automatically on-brand & drop-in-ready
            Performance - modern apps
            Flexibility - we don't have opinions on everything, so we offer room for devs who have needs we don't account for
            Accessibility (a11y) - Considers color to keyboard navigation to screen readers and beyond
            Responsiveness - quick & simple to add breakpoints
            Open Source - Increases marketability in the industry
          </Notes>
          <Flex direction="column" justifyContent="space-between" height="90vh" marginBottom="10vh">
            <FlexItem marginTop="10vh" marginBottom="-10vh">
              <Heading size={1} textColor="tertiary" width="2000px">What are some Mineral-UI-specific advantages?</Heading>
            </FlexItem>
            <FlexItem>
              <Text textColor="primary" textSize="4rem">Encapsulation</Text>
              <Text textColor="primary" textSize="4rem">Performance</Text>
              <Text textColor="primary" textSize="4rem">Flexibility</Text>
              <Text textColor="primary" textSize="4rem">Accessibility (a11y)</Text>
              <Text textColor="primary" textSize="4rem">Responsiveness</Text>
              <Text textColor="primary" textSize="4rem">Open Source</Text>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color="white"
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="secondary">
          <Notes>
            Always best to use a component as-is for consistency's sake
            Next, you can reach for theming (from your entire app to a specific component)
            astly, you can style components using CSS-in-JS
          </Notes>
          <Flex direction="column" justifyContent="space-between" height="90vh" marginBottom="10vh">
            <FlexItem marginTop="10vh" marginBottom="-10vh">
              <Heading size={1} textColor="tertiary" width="2000px">So... how do I use this thing?</Heading>
            </FlexItem>
            <FlexItem>
              <Text margin="5rem 0" textColor="primary" textSize="4rem">
                Mineral's demo site informs how and when to use our components. A good rule of thumb for priority when making changes:
              </Text>
              <List ordered textAlign="center">
                <ListItem textColor="primary" textSize="3.5rem"><MineralText>Component as-is</MineralText></ListItem>
                <ListItem textColor="primary" textSize="3.5rem"><MineralText>Theming</MineralText></ListItem>
                <ListItem textColor="primary" textSize="3.5rem"><MineralText>Styled components</MineralText></ListItem>
              </List>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color="white"
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="secondary">
          <Flex direction="column" justifyContent="space-between" height="90vh" marginBottom="10vh">
            <FlexItem marginTop="10vh" marginBottom="-10vh">
              <Heading size={1} textColor="tertiary" width="2000px">Mineral UI Resources</Heading>
            </FlexItem>
            <FlexItem>
              <Text textColor="primary" textSize="3.5rem">Github: <MineralText>https://github.com/mineral-ui/mineral-ui</MineralText></Text>
              <Text textColor="primary" textSize="3.5rem">Demo Site: <MineralText>http://mineral-ui.com</MineralText></Text>
              <Text textColor="primary" textSize="3.5rem">Flowdock: <MineralText>https://www.flowdock.com/app/ca-technologies/mineral-ui</MineralText></Text>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color="white"
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        {/* <CodePane lang="jsx" source="hi I'm jsx" /> */}
        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="jsx"
          code={require("raw-loader!../assets/code.example")}
          ranges={[
            { loc: [0, 270], title: "What is React?" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [4, 7], image: kat },
            { loc: [8, 10] }
          ]}
        />
        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="jsx"
          code={require("raw-loader!../assets/code.example")}
          ranges={[
            { loc: [0, 270], title: "What does Mineral look like?" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [4, 7], image: kat },
            { loc: [8, 10] }
          ]}
        />
        <Slide align="flex-start" transition={["zoom"]} bgColor="secondary">
          <Flex direction="column" justifyContent="space-between" height="90vh" marginBottom="10vh">
            <FlexItem marginTop="10vh" marginBottom="-10vh">
              <Heading size={1} textColor="tertiary" width="2000px">Exercise time again :D</Heading>
            </FlexItem>
            <FlexItem>
              <Text textColor="primary" textSize="4rem">We want to transform an html form to use Mineral components</Text>
              <Text textColor="primary" textSize="4rem">We'll walk through one exercise together</Text>
              <Text textColor="primary" textSize="4rem">Then you'll have 30 minutes to propagate the idea & explore on your own</Text>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color="white"
              >
              Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="secondary">
          <Flex direction="column" justifyContent="space-between" height="90vh" marginBottom="10vh">
            <FlexItem marginTop="10vh" marginBottom="-10vh">
              <Heading size={1} textColor="tertiary" width="2000px">Conclusion</Heading>
            </FlexItem>
            <FlexItem marginLeft="13vw" marginRight="13vw">
              <List>
                <ListItem textColor="primary" textSize="3.5rem">Great product development is not about features and functionality; it's about <MineralText>solving users' problems</MineralText></ListItem>
                <ListItem textColor="primary" textSize="3.5rem">Observing your users in their own environment allows you to better understand how they actually use the product</ListItem>
                <ListItem textColor="primary" textSize="3.5rem"><MineralText>User-centered design</MineralText> will change your understanding of who you are developing your software for and how they will use it.</ListItem>
                <ListItem textColor="primary" textSize="3.5rem">We want to build the <MineralText>right products</MineralText>, not just the products right.</ListItem>
              </List>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color="white"
              >
              Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>The biggest waste of all is building something no one wants.</Quote>
            <Cite>Eric Ries</Cite>
          </BlockQuote>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="secondary">
          <Flex direction="column" justifyContent="space-between" height="90vh" marginBottom="10vh">
            <FlexItem marginTop="10vh" marginBottom="-10vh">
              <Heading size={1} textColor="tertiary" width="2000px">References & Resources</Heading>
            </FlexItem>
            <FlexItem>
              <Text textColor="primary" textSize="3.5rem">Central UX wiki: <MineralText>design.ca.com</MineralText></Text>
              <Text textColor="primary" textSize="3.5rem">CTE Tech Talks: <MineralText>https://km.ca.com/rnd/MyTeams/cte/Site%20Pages/TechTalks.aspx</MineralText></Text>
              <Text textColor="primary" textSize="3.5rem">UX SIG (special interest group) website (many UX SIG talks listed): <MineralText>https://km.ca.com/rnd/MyTeams/cte/UXSIG/default.aspx</MineralText></Text>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color="white"
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="secondary">
          <Flex height="90vh" alignItems="center" justifyContent="evenly">
            <FlexItem>
              <Image src={images.ca} width="250px"/>
            </FlexItem>
            <FlexItem>
              <Text textColor="primary" textSize="4rem"><MineralText>Elisa K Miller</MineralText></Text>
              <Text textColor="primary" textSize="3.5rem">Design Transformation Coach</Text>
              <Text textColor="primary" textSize="3.5rem">elisa.miller@ca.com</Text>
              <br />
              <br />
              <Text textColor="primary" textSize="4rem"><MineralText>Victoria Vasys</MineralText></Text>
              <Text textColor="primary" textSize="3.5rem">Mineral UI Developer</Text>
              <Text textColor="primary" textSize="3.5rem">victoria.vasys@ca.com</Text>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary" textSize="10rem">Thank you.</Text>
        </Slide>
      </Deck>
    );
  }
}
