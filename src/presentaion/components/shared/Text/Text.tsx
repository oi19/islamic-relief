import React, {memo, FC} from "react";
import {
  TextProps as RNTextProps,
  StyleSheet,
  StyleProp,
  TextStyle,
} from "react-native";
import Animated from "react-native-reanimated";

import styles from "./styles";
import {ColorsTypes} from "../../../../styles/colors";
import {FontFamilyTypes, FontSizeTypes} from "../../../../styles/typography";
import {Colors, Typography} from "../../../../styles/index";

export type TextProps = {
  color?: keyof ColorsTypes;
  fontFamily?: keyof FontFamilyTypes;

  /**
    default fontSize = 12px
    H1= 22 px \
    H2= 16 px \
    H3= 12 px \
    H4= 9 px \
    P= 12 px
    **/
  fontSize?: keyof FontSizeTypes;
};

type TextStyleTypes = StyleProp<TextStyle> | undefined;

const Text: FC<RNTextProps & TextProps> = props => {
  return (
    <Animated.Text
      {...props}
      style={StyleSheet.flatten([
        styles.textStyle,
        customStyles(props),
        props.style,
      ])}
    />
  );
};

Text.defaultProps = {
  color: "FONT_07101A",
};

const customStyles = ({fontFamily, fontSize, color}: TextProps) => {
  const _styles: TextStyleTypes = {
    color: Colors[color || "FONT_07101A"],
    fontWeight: Typography[fontFamily || "System"],
    fontSize: Typography[fontSize || "P"],
  };
  return _styles;
};

export default memo(Text);
