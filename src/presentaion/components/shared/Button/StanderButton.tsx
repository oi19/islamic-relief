import React, { FC, memo } from "react"
import { ActivityIndicator, TouchableOpacityProps, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"

import Text from "../Text/Text"
import { ButtonProps } from "./Button"
import { ScaleButton } from "./ScaleButton"
import styles from "./styles"
import { Colors, Spacing } from "../../../../styles/index"
import { getHeight } from "../../../../styles/dimensions"
import Svgs from "../../../../assets/svgs"

const StanderButton: FC<TouchableOpacityProps & ButtonProps> = memo(
  ({
    text,
    iconName,
    type,
    isLoading,
    subText,
    textStyle,
    subTextStyle,
    ...props
  }) => {
    return (
      <ScaleButton
        {...props}
        disabled={isLoading || props.disabled}
        style={[
          styles.standerButtonContainer,
          props.style,
          { opacity: props.disabled ? 0.8 : 1 },
        ]}
      >
        {type === "standerGradient" && (
          <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={Colors.PRIMARY_GRADIENT}
            style={[styles.linearGradient, props.style, { borderWidth: 0 }]}
          />
        )}
        {!isLoading && iconName && (
          <View
            style={{
              flex: 0.5,
              alignItems: "flex-end",
            }}
          >
            <Svgs
              name={iconName}
              style={[props.iconContainerStyle]}
              {...props.iconStyle}
            />
          </View>
        )}

        {!isLoading && text && (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              marginEnd: iconName ? Spacing.S70 : 0,
            }}
          >
            <Text
              fontSize="FS14"
              fontFamily={"MEDIUM"}
              color={"WHITE"}
              {...textStyle}
              style={{
                paddingHorizontal: Spacing.S8,
                textAlign: "center",
              }}
            >
              {text}
            </Text>
            {subText ? (
              <Text
                fontSize="FS14"
                fontFamily={"MEDIUM"}
                color="WHITE"
                {...subTextStyle}
                style={{
                  paddingHorizontal: Spacing.S8,
                  textAlign: "center",
                }}
              >
                {subText}
              </Text>
            ) : null}
          </View>
        )}
        {isLoading && <ActivityIndicator size={"small"} color={Colors.WHITE} />}
        {props.children}
      </ScaleButton>
    )
  }
)

StanderButton.defaultProps = {
  style: { borderRadius: getHeight(12) },
}
export { StanderButton }
