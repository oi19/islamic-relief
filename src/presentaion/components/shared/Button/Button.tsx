import React, {FC, memo} from "react";
import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

import {TextProps} from "../Text/Text";
import {BorderButton} from "./BorderButton";
import {DefaultButton} from "./DefaultButton";
import {StanderButton} from "./StanderButton";
import {IconsName, IconsProps} from "../../../../assets/svgs";
import {ColorsTypes} from "../../../../styles/colors";

export type ButtonProps = {
  text?: string;
  subText?: string;
  type?: "default" | "standard" | "standerGradient" | "dropdown" | "border";
  buttonScale?: number;
  iconName?: IconsName;
  textStyle?: TextProps;
  subTextStyle?: TextProps;
  iconStyle?: IconsProps;
  iconContainerStyle?: StyleProp<ViewStyle>;
  textContainerStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  color?: keyof ColorsTypes;
  isLoading?: boolean;
  placeholder?: string;
  error?: string;
};

const Button: FC<TouchableOpacityProps & ButtonProps> = ({type, ...props}) => {
  switch (type) {
    case "default":
      return <DefaultButton {...props} type={type} />;
    case "standard":
      return <StanderButton {...props} type={type} />;
    case "standerGradient":
      return <StanderButton {...props} type={type} />;
    case "border":
      return <BorderButton {...props} type={type} />;

    default:
      return <DefaultButton {...props} type={type} />;
  }
};

export default memo(Button);
