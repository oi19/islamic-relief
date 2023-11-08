import React, {FC, memo} from "react";
import {ActivityIndicator, TouchableOpacityProps} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {Svgs} from "../../../assets";
import {Colors, Spacing} from "../../../styles";
import {getHeight} from "../../../styles/dimensions";
import Text from "../Text/Text";
import {ButtonProps} from "./Button";
import {ScaleButton} from "./ScaleButton";
import styles from "./styles";

const StanderButton: FC<TouchableOpacityProps & ButtonProps> = memo(
  ({text, iconName, type, isLoading, ...props}) => {
    return (
      <ScaleButton
        {...props}
        disabled={isLoading || props.disabled}
        style={[
          styles.standerButtonContainer,
          props.style,
          {opacity: props.disabled ? 0.8 : 1},
        ]}>
        {type === "standerGradient" && (
          <LinearGradient
            start={{x: 1, y: 1}}
            end={{x: 0, y: 0}}
            colors={Colors.PRIMARY_GRADIENT}
            style={[styles.linearGradient, props.style, {borderWidth: 0}]}
          />
        )}
        {!isLoading && iconName && (
          <Svgs
            name={iconName}
            style={[{marginLeft: Spacing.S16}, props.iconContainerStyle]}
            {...props.iconStyle}
          />
        )}

        {!isLoading && text && (
          <Text
            fontSize="FS16"
            fontFamily="MEDIUM"
            color="WHITE"
            {...props.textStyle}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              paddingHorizontal: Spacing.S8,
              textAlign: "center",
            }}>
            {text}
          </Text>
        )}
        {isLoading && <ActivityIndicator size={"small"} color={Colors.WHITE} />}
        {props.children}
      </ScaleButton>
    );
  },
);

StanderButton.defaultProps = {
  style: {borderRadius: getHeight(12)},
};
export {StanderButton};
