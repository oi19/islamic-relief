import React, {FC, memo} from "react";
import {ViewProps} from "react-native";
import {Svgs} from "../../../assets";
import {IconsName, IconsProps} from "../../../assets/svgs";
import {Text} from "../../../components";
import {scale} from "../../../styles/dimensions";
import {FontSizeTypes} from "../../../styles/typography";
import {Button} from "../../atoms";
import {TextProps} from "../../atoms/Text/Text";
import styles from "./styles";

type TextWithIconProps = {
  icon: IconsName;
  text?: string;
  type?: "small" | "large" | "medium";
  textStyle?: TextProps;
  iconStyle?: IconsProps;
  onPress?: () => void;
};

const TextWithIcon: FC<ViewProps & TextWithIconProps> = ({
  icon,
  text,
  type,
  textStyle,
  iconStyle,
  style,
  onPress,
}) => {
  return (
    <Button
      onPress={onPress}
      disabled={!onPress}
      style={[styles.container, style]}>
      <Svgs
        width={getType(type).iconSize}
        height={getType(type).iconSize}
        name={icon}
        {...iconStyle}
      />
      <Text
        fontSize={getType(type).fontSize}
        color="GRAY_4B4B4B"
        style={styles.text}
        {...textStyle}>
        {text}
      </Text>
    </Button>
  );
};

const getType = (
  type?: "small" | "large" | "medium",
): {
  iconSize: number;
  fontSize: keyof FontSizeTypes;
} => {
  switch (type) {
    case "small":
      return {
        iconSize: scale(9),
        fontSize: "H4",
      };
    case "medium":
      return {
        iconSize: scale(24),
        fontSize: "FS13",
      };
    case "large":
      return {
        iconSize: scale(25),
        fontSize: "H2",
      };
    default:
      return {
        iconSize: scale(16),
        fontSize: "FS13",
      };
  }
};
export default memo(TextWithIcon);
