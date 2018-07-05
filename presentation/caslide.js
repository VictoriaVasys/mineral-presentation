import React, { Component } from "react";
import Flex, { FlexItem } from "mineral-ui/Flex";
import { createStyledComponent } from "mineral-ui/styles";
import _Text from "mineral-ui/Text";

// Import Spectacle Core tags
import {
  Heading,
  Notes,
  Slide
} from "spectacle";

export const colors = {
  primary: "#2c2c33",
  secondary: "white",
  tertiary: "#fe5879",
  quarternary: "#CECECE",
  penitentiary: "#fe8aa1"
};

const MineralTextFooter = createStyledComponent(_Text, {
  fontFamily: "Open Sans"
});

export default class CaSlide extends Component {
  render() {
    const { bgColor, children, headerContent, notes, transition, ...restProps } = this.props;
    return (<Slide align="flex-start" transition={transition} bgColor={bgColor}>
      <Notes>
      Allows the company to be unified in its design vision; consistency becomes a by-product, not a mandate
      Provides an avenue for quick & efficient changes (new products too); built for re-use at scale
      Developers are free to focus on other important things
      </Notes>
      <Flex direction="column" justifyContent="between" height="95vh">
        <FlexItem marginTop="10vh" marginBottom="-14vh">
          {/* <MineralText element="h1" fontSize="6rem">Why though?</MineralText> */}
          <Heading size={1} textColor="tertiary">{headerContent}</Heading>
        </FlexItem>
        <FlexItem>{children}</FlexItem>
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
    </Slide>);
  }
}
