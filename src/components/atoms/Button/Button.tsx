import React, {FC, memo} from "react";
import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import {IconsName, IconsProps} from "../../../assets/svgs";
import {ColorsTypes} from "../../../styles/colors";
import {TextProps} from "../Text/Text";
import {BorderButton} from "./BorderButton";
import {DefaultButton} from "./DefaultButton";
import {DropdownButton} from "./DropdownButton";
import {StanderButton} from "./StanderButton";

export type ButtonProps = {
  text?: string;
  type?: "default" | "standard" | "standerGradient" | "dropdown" | "border";
  buttonScale?: number;
  iconName?: IconsName;
  textStyle?: TextProps;
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
    case "dropdown":
      return <DropdownButton {...props} type={type} />;
    case "border":
      return <BorderButton {...props} type={type} />;

    default:
      return <DefaultButton {...props} type={type} />;
  }
};

export default memo(Button);
