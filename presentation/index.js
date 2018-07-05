// Import React
import React from "react";
import IconArrowDownward from "mineral-ui-icons/IconArrowDownward";
import Flex, { FlexItem } from "mineral-ui/Flex";
import { createStyledComponent } from "mineral-ui/styles";
import _Text from "mineral-ui/Text";
import { colors } from "./CaSlide";

// Import Spectacle Core tags
import {
  Anim,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Heading,
  Image,
  Notes,
  Quote,
  Slide,
  Table,
  TableBody,
  TableRow,
  TableItem,
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

const TextRoot = createStyledComponent(_Text, ({ color, fontSize }) => ({
  color,
  fontFamily: "inherit",
  fontSize
  // display: "inline"
}));

const TableHeaderRoot = createStyledComponent(_Text, ({ color, fontSize, marginRight, width }) => ({
  textAlign: "right",
  fontFamily: "Open Sans",
  fontSize,
  color,
  marginRight,
  width
}));

const TableTextRoot = createStyledComponent(_Text, ({ color, fontSize }) => ({
  textAlign: "left",
  fontFamily: "Open Sans",
  fontSize,
  color
}));

const MineralTextFooter = createStyledComponent(_Text, {
  fontFamily: "Open Sans"
});

const MineralText = ({
  color = colors.tertiary,
  fontSize = "inherit",
  ...restProps
}) => {
  const rootProps = { color, fontSize, ...restProps };
  return <TextRoot element="span" {...rootProps} />;
};

const MineralTextTableHeader = ({
  color = colors.secondary,
  fontSize = "3.5rem",
  marginRight = "40px",
  width = "200px",
  ...restProps
}) => {
  const rootProps = { color, fontSize, marginRight, width, ...restProps };
  return <TableHeaderRoot {...rootProps} />;
};

const MineralTextTable = ({
  color = colors.tertiary,
  fontSize = "3.5rem",
  ...restProps
}) => {
  const rootProps = { color, fontSize, ...restProps };
  return <TableTextRoot {...rootProps} />;
};

const theme = createTheme({
  primary: colors.primary,
  secondary: colors.secondary,
  tertiary: colors.tertiary,
  quarternary: colors.quarternary,
  penitentiary: colors.penitentiary
}, {
  primary: { name: "Open Sans", googleFont: true },
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
        <Slide align="flex-start" transition={["zoom"]} bgColor="primary">
          <Flex direction="column" justifyContent="between" height="75vh" marginTop="18vh" marginBottom="7vh">
            <FlexItem>
              <Flex justifyContent="center">
                <FloatingMinerals
                  dangerouslySetInnerHTML={{ __html: floatingMineralsSvg }}
                />
              </Flex>
              <Heading caps textColor="tertiary">
                <MineralText fontSize="9rem">Mineral UI Design System</MineralText>
              </Heading>
              <Text margin="10px 0 0" textColor="secondary" textSize="4rem" bold>
                2018 ASE Training
              </Text>
            </FlexItem>
            <FlexItem>
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
                marginTop="8vh"
                marginBottom="-8vh"
              >
                  Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        {/* <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide> */}
        {/* <Slide align="flex-start" transition={["fade"]} bgColor="primary" textColor="secondary">
          <Flex>
            <FlexItem marginTop={100}>
              <Heading size={6} textColor="tertiary">Mineral UI User Interface</Heading>
            </FlexItem>
          </Flex>
          <Flex direction="column" height="80vh" justifyContent="center">
            <FlexItem>
              <Text margin="10px 0 0" textColor="secondary" textSize="3em" textAlign="left">
            Mineral UI is a library of React components that are easily consumable, reflect the intent of the style guide, and increase the speed of development.
              </Text>
            </FlexItem>
            <FlexItem>
              <List textColor="secondary">
                <ListItem>Zero compromise with faster and higher quality code</ListItem>
                <ListItem>Work on things that matter instead of repetitive UI.</ListItem>
                <ListItem>Consistency becomes a by-product, not a mandate</ListItem>
              </List>
            </FlexItem>
          </Flex>
        </Slide> */}
        <Slide align="flex-start" transition={["zoom"]} bgColor="primary">
          <Flex direction="column" justifyContent="between" height="95vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading size={1} textColor="tertiary" width="2000px">Design Systems</Heading>
            </FlexItem>
            <FlexItem>
              <Text margin="4.5rem 0" textColor="secondary" textSize="4rem">
                Industry wide, everyone is building design systems:
              </Text>
              <Text textColor="secondary" textSize="4rem">Google: <MineralText>Material</MineralText></Text>
              <Text textColor="secondary" textSize="4rem">Twitter: <MineralText>Bootstrap</MineralText></Text>
              <Text textColor="secondary" textSize="4rem">IBM: <MineralText>Carbon</MineralText></Text>
              <Text textColor="secondary" textSize="4rem">Salesforce: <MineralText>Lightning</MineralText></Text>
              <Text textColor="secondary" textSize="4rem">Shopify: <MineralText>Polaris</MineralText></Text>
              <Text margin="4.5rem 0" textColor="secondary" textSize="4rem">
                CA's design system = Mineral UI; launched last fall.
              </Text>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="primary">
          <Notes>
            Allows the company to be unified in its design vision; consistency becomes a by-product, not a mandate
            Provides an avenue for quick & efficient changes (new products too); built for re-use at scale
            Developers are free to focus on other important things
          </Notes>
          <Flex direction="column" justifyContent="between" height="95vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading size={1} textColor="tertiary">Why though?</Heading>
            </FlexItem>
            <FlexItem>
              <Anim
                fromStyle={{ opacity: 0 }}
                toStyle={[{ opacity: 1 }, { opacity: 0.2 }]}
                transitionDuration={300}
              >
                <Text textColor="secondary" textSize="4.5rem">Unified design vision</Text>
              </Anim>
              <br />
              <Anim
                fromStyle={{ opacity: 0 }}
                toStyle={[{ opacity: 1 }, { opacity: 0.2 }]}
                transitionDuration={300}
              >
                <Text textColor="secondary" textSize="4.5rem">Quick & efficient change</Text>
              </Anim>
              <br />
              <Anim
                fromStyle={{ opacity: 0 }}
                toStyle={[{ opacity: 1 }]}
                transitionDuration={300}
              >
                <Text textColor="secondary" textSize="4.5rem">Cognitive resources</Text>
              </Anim>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="tertiary">
          <BlockQuote>
            <Quote><MineralText fontSize="9rem" color={colors.primary}>Time is money.</MineralText></Quote>
            <Cite textColor="primary">Benjamin Franklin</Cite>
          </BlockQuote>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="primary">
          <Notes>
            Is "Product Teams v Contractor" piece important here?
            User Research: Interviews and behavior analysis
            Info Architecture: Structure design and content organization
            Interaction Design: Research and user/product workflows
            Visual Design: Visual layout and information design
            Prototyping: Build/test product workflows and concept designs
            Front-end dev: Implement complete interaction and visual designs into product
          </Notes>
          <Flex direction="column" justifyContent="between" height="95vh">
            <FlexItem marginTop="10vh" marginBottom="-2vh">
              <Heading size={1} textColor="tertiary" width="2000px">CA Design</Heading>
            </FlexItem>
            <FlexItem>
              <Text textColor="secondary" textSize="4.5rem">User Research</Text>
              <IconArrowDownward color={colors.secondary} size="4.5rem" />
              <Text textColor="secondary" textSize="4.5rem">Information Architecture</Text>
              <IconArrowDownward color={colors.secondary} size="4.5rem" />
              <Text textColor="secondary" textSize="4.5rem">Interaction Design</Text>
              <IconArrowDownward color={colors.secondary} size="4.5rem" />
              <Text textColor="secondary" textSize="4.5rem">Visual Design</Text>
              <IconArrowDownward color={colors.secondary} size="4.5rem" />
              <Text textColor="secondary" textSize="4.5rem">Prototyping</Text>
              <IconArrowDownward color={colors.secondary} size="4.5rem" />
              <Text textColor="secondary" textSize="4.5rem">Front-End Dev</Text>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="primary">
          <Notes>
            ‘Owns’ the overall practice of user experience at CA.
            Supplies tools/techniques/best practices to enable individual groups to design quicker and more efficiently.
            Provides the processes to ensure UX is part of CA’s overall workflows & initiatives.
            Is the communications “glue” to keep teams coordinated and talking.
          </Notes>
          <Flex direction="column" justifyContent="between" height="95vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading size={1} textColor="tertiary" width="2000px">UXD at CA: Design Strategy & Ops</Heading>
            </FlexItem>
            <FlexItem>
              <Text textColor="secondary" textSize="4.5rem">Tools & best practices</Text>
              <br />
              <Text textColor="secondary" textSize="4.5rem">Processes for UX inclusion</Text>
              <br />
              <Text textColor="secondary" textSize="4.5rem">Communications “glue”</Text>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="primary">
          <Flex direction="column" alignItems="center" justifyContent="between" height="90vh" marginBottom="10vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading textColor="tertiary" width="2000px">Exercise time!</Heading>
            </FlexItem>
            <FlexItem>
              <Text textColor="secondary" textSize="4rem">Mineral UI includes a component library.</Text>
              <br/>
              <Text textColor="secondary" textSize="4rem" width="20vw">Components are atomic elements like selects, checkboxes, and pop-up windows.</Text>
              <br/>
              <br/>
              <br/>
              <Text textColor="secondary" textSize="4rem" width="20vw"><MineralText>Your task</MineralText>: Pair & develop a button</Text>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="primary">
          <Notes>
            Encapsulation - implements and advocates for the CA Style Guide, making components automatically on-brand & drop-in-ready
            Performance - modern apps
            Flexibility - we don't have opinions on everything, so we offer room for devs who have additional needs: composition (wrap anything in a Tooltip or Popover), formfield labels (can be text or React component), render props (power & value- search!)
            Accessibility (a11y) - Considers color to keyboard navigation to screen readers and beyond
            Responsiveness - quick & simple to add breakpoints
            Browser Support
            Open Source - Increases marketability in the industry
          </Notes>
          <Flex direction="column" justifyContent="between" height="95vh">
            <FlexItem marginTop="10vh">
              <Heading size={1} textColor="tertiary" width="2000px">What are some Mineral-UI-specific advantages?</Heading>
            </FlexItem>
            <FlexItem>
              <Text textColor="secondary" textSize="4.5rem">Encapsulation</Text>
              <br />
              <Text textColor="secondary" textSize="4.5rem">Performance</Text>
              <br />
              <Text textColor="secondary" textSize="4.5rem">Flexibility</Text>
              <br />
              <Text textColor="secondary" textSize="4.5rem">Accessibility (a11y)</Text>
              <br />
              <Text textColor="secondary" textSize="4.5rem">Internationalization (i18n)</Text>
              <br />
              <Text textColor="secondary" textSize="4.5rem">Responsiveness</Text>
              <br />
              <Text textColor="secondary" textSize="4.5rem">Browser Support</Text>
              <br />
              <Text textColor="secondary" textSize="4.5rem">Open Source</Text>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["slide"]} bgColor="penitentiary" notes="">
          <Notes>
            Go to ETHERPAD
            Who all has seen javascript?
            Who's written it?
            Who's used React?
            ES = created to standardize JavaScript
          </Notes>
          <Flex direction="column" justifyContent="between" height="95vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading size={1} textColor="secondary" width="2000px">A little intro to JS & React</Heading>
              <Text textSize="3rem">https://etherpad.net/p/mineral-ui</Text>
            </FlexItem>
            <FlexItem marginBottom="-9vh">
              <CodePane height="60vh" lang="jsx" overflow="scroll" source={require("raw-loader!../assets/react/code-js")} textSize="2.5rem"/>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
              Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["slide"]} bgColor="penitentiary" notes="">
          <Notes>
            React
          </Notes>
          <Flex direction="column" justifyContent="between" height="95vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading size={1} textColor="secondary" width="2000px">A little intro to JS & React</Heading>
              <Text textSize="3rem">https://etherpad.net/p/mineral-ui</Text>
            </FlexItem>
            <FlexItem marginBottom="-9vh">
              <ComponentPlayground height="60vh" lang="jsx" overflow="scroll" code={require("raw-loader!../assets/react/code-react")} textSize="2.5rem"/>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
              Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="primary">
          <Notes>
            A good rule of thumb for priority when making changes:
            1. Always best to use a component as-is for consistency's sake
            2. Next, you can reach for theming (from your entire app to a specific component)
            3. Lastly, you can style components using CSS-in-JS
          </Notes>
          <Flex direction="column" justifyContent="between" height="95vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading size={1} textColor="tertiary" width="2000px">Ok... but how do I use Mineral?</Heading>
            </FlexItem>
            <FlexItem>
              <Text margin="4.5rem 0" textColor="secondary" textSize="4rem">
                Mineral's demo site informs how and when to use our components.
              </Text>
              <Text textColor="secondary" textSize="4rem"><MineralText>Component as-is</MineralText></Text>
              <Text textColor="secondary" textSize="4rem"><MineralText>Theming</MineralText></Text>
              <Text textColor="secondary" textSize="4rem"><MineralText>Styled components</MineralText></Text>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        {/* <CodeSlide
          bgColor="penitentiary"
          transition={[]}
          lang="js"
          textSize="3rem"
          code={require("raw-loader!../assets/code-theme-provider")}
          ranges={[
            { loc: [0, 270], title: "What does Mineral look like?" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [4, 7], image: kat },
            { loc: [8, 10] }
          ]}
        /> */}
        <Slide align="flex-start" transition={["slide"]} bgColor="penitentiary">
          <Flex direction="column" justifyContent="between" height="95vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading size={1} textColor="secondary" width="2000px">Theming your app</Heading>
            </FlexItem>
            <FlexItem marginBottom="-9vh">
              <CodePane lang="jsx" source={require("raw-loader!../assets/code-theme-provider")} textSize="3rem" />
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
              Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["slide"]} bgColor="penitentiary" notes="After creation, theme can be applied using a ThemeProvider">
          <Flex direction="column" marginLeft="5vw" width="70vw" justifyContent="between" height="90vh" marginBottom="10vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading size={1} textColor="secondary" width="2000px">Creating your own theme</Heading>
            </FlexItem>
            <FlexItem marginBottom="-9vh">
              <CodePane height="60vh" lang="jsx" overflow="scroll" source={require("raw-loader!../assets/code-theme-create")} textSize="3rem"/>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
              Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["slide"]} bgColor="penitentiary">
          <Flex direction="column" marginLeft="5vw" width="70vw" justifyContent="between" height="90vh" marginBottom="10vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading size={1} textColor="secondary" width="2000px">Theming a portion of your app</Heading>
            </FlexItem>
            <FlexItem marginBottom="-9vh">
              <CodePane lang="jsx" source={require("raw-loader!../assets/code-theme-provider-portion")} textSize="3rem" />
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
              Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["slide"]} bgColor="penitentiary">
          <Flex direction="column" marginLeft="5vw" width="70vw" justifyContent="between" height="90vh" marginBottom="10vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading size={1} textColor="secondary" width="2000px">Theming a Component</Heading>
            </FlexItem>
            <FlexItem marginBottom="-9vh">
              <CodePane lang="jsx" source={require("raw-loader!../assets/code-theme-component")} textSize="3rem" />
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
              Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["slide"]} bgColor="penitentiary">
          <Flex direction="column" marginLeft="5vw" width="70vw" justifyContent="between" height="90vh" marginBottom="10vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading size={1} textColor="secondary" width="2000px">Styling a Component</Heading>
            </FlexItem>
            <FlexItem marginBottom="-9vh">
              <CodePane lang="jsx" overflow="scroll" source={require("raw-loader!../assets/code-style-component")} textSize="3rem"/>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
              Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["slide", "zoom"]} bgColor="primary">
          <Flex direction="column" justifyContent="between" height="95vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading size={1} textColor="tertiary" width="2000px">Exercise time again :D</Heading>
            </FlexItem>
            <FlexItem>
              <Text textColor="secondary" textSize="4.5rem"><MineralText>Goal</MineralText>: Transform an html form to use Mineral components</Text>
              <br />
              <br />
              <br />
              <Text textColor="secondary" textSize="4.5rem">One component together</Text>
              <Text textColor="secondary" textSize="4.5rem"><MineralText>30 minutes</MineralText> to propagate & explore</Text>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
              Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="primary">
          <Notes>
            Great product development is not about features and functionality; it's about solving users' problems
            User-centered design will change your understanding of who you are developing your software for and how they will use it.
              Observing your users in their own environment allows you to better understand how they actually use the product
            We want to build the right products, not just the products right.
          </Notes>
          <Flex direction="column" justifyContent="between" height="95vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading size={1} textColor="tertiary" width="2000px">Conclusion: Great Product Development</Heading>
            </FlexItem>
            <FlexItem>
              <Anim
                fromStyle={{ opacity: 0 }}
                toStyle={[{ opacity: 1 }, { opacity: 0.2 }]}
                transitionDuration={300}
              >
                <Text textColor="secondary" textSize="4.5rem">Not just features & functionality</Text>
              </Anim>
              <br />
              <Anim
                fromStyle={{ opacity: 0 }}
                toStyle={[{ opacity: 1 }, { opacity: 0.2 }]}
                transitionDuration={300}
              >
                <Text textColor="secondary" textSize="4.5rem">User-centered design</Text>
              </Anim>
              <br />
              <Anim
                fromStyle={{ opacity: 0 }}
                toStyle={[{ opacity: 1 }]}
                transitionDuration={300}
              >
                <Text textColor="secondary" textSize="4.5rem">We want to build the <MineralText>right products</MineralText>, not just the products right.</Text>
              </Anim>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
              Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide transition={["slide", "zoom"]} bgColor="tertiary">
          <BlockQuote>
            <Quote><MineralText fontSize="6rem" color={colors.primary}>The biggest waste of all is building something no one wants.</MineralText></Quote>
            <Cite textColor="primary">Eric Ries</Cite>
          </BlockQuote>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="primary">
          <Flex direction="column" justifyContent="between" height="95vh">
            <FlexItem marginTop="10vh" marginBottom="-11vh">
              <Heading size={1} textColor="tertiary" width="2000px">Resources</Heading>
            </FlexItem>
            <FlexItem>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableItem><MineralTextTableHeader>Demo Site</MineralTextTableHeader></TableItem>
                    <TableItem><MineralTextTable>mineral-ui.com</MineralTextTable></TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem><MineralTextTableHeader>Github</MineralTextTableHeader></TableItem>
                    <TableItem><MineralTextTable>github.com/mineral-ui/mineral-ui</MineralTextTable></TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem><MineralTextTableHeader>Flowdock</MineralTextTableHeader></TableItem>
                    <TableItem><MineralTextTable>"Mineral & Styleguide"</MineralTextTable></TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem><MineralTextTableHeader>Tech Talks</MineralTextTableHeader></TableItem>
                    <TableItem><MineralTextTable>techtalks.ca.com</MineralTextTable></TableItem>
                  </TableRow>
                </TableBody>
              </Table>
            </FlexItem>
            <FlexItem alignSelf="center" justifyContent="center" marginBottom="1vh" marginTop="-1vh">
              <MineralTextFooter
                appearance="prose"
                element="span"
                color={colors.quarternary}
              >
                Copyright © 2018 CA
              </MineralTextFooter>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="primary">
          <Flex height="90vh" alignItems="center" justifyContent="evenly">
            <FlexItem>
              <Image src={images.ca} width="250px"/>
            </FlexItem>
            <FlexItem>
              <Text textColor="secondary" textSize="4.5rem"><MineralText>Elisa K Miller</MineralText></Text>
              <Text textColor="secondary" textSize="3.5rem">Design Transformation Coach</Text>
              <Text textColor="secondary" textSize="3.5rem">elisa.miller@ca.com</Text>
              <br />
              <br />
              <Text textColor="secondary" textSize="4.5rem"><MineralText>Victoria Vasys</MineralText></Text>
              <Text textColor="secondary" textSize="3.5rem">Mineral UI Developer</Text>
              <Text textColor="secondary" textSize="3.5rem">victoria.vasys@ca.com</Text>
            </FlexItem>
          </Flex>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Text textColor="secondary" textSize="10rem">Thank you.</Text>
        </Slide>
      </Deck>
    );
  }
}
