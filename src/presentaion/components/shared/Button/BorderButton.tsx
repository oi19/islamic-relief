import React, {FC, memo} from "react";
import {ActivityIndicator, TouchableOpacityProps, View} from "react-native";
import {ButtonProps} from "./Button";
import {ScaleButton} from "./ScaleButton";
import styles from "./styles";
import {Colors, Spacing} from "../../../../styles";
import Svgs from "../../../../assets/svgs";
import Text from "../Text/Text";

const BorderButton: FC<TouchableOpacityProps & ButtonProps> = memo(
  ({text, iconName, isLoading, iconContainerStyle, subText, ...props}) => {
    console.warn(text);
    return (
      <ScaleButton
        {...props}
        style={[
          styles.borderButtonContainer,
          {
            borderColor: Colors[props.color || "PRIMARY"],
          },
          props.style,
        ]}>
        {isLoading ? (
          <ActivityIndicator size={"small"} color={Colors.PRIMARY} />
        ) : (
          <>
            {iconName && (
              <View
                style={{
                  flex: 0.5,
                  alignItems: "flex-end",
                }}>
                <Svgs
                  name={iconName}
                  style={[iconContainerStyle]}
                  {...props.iconStyle}
                />
              </View>
            )}
            {(text || true) && (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  marginEnd: Spacing.S70,
                }}>
                <View>
                  <Text
                    fontSize="FS14"
                    fontFamily="BOLD"
                    color={props.color || "PRIMARY"}
                    {...props.textStyle}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      paddingHorizontal: Spacing.S8,
                      textAlign: "center",
                    }}>
                    {text}
                  </Text>
                  {subText ? (
                    <Text
                      fontSize="FS14"
                      fontFamily="MEDIUM"
                      color="WHITE"
                      {...props.subTextStyle}
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        paddingHorizontal: Spacing.S8,
                        textAlign: "center",
                      }}>
                      {subText}
                    </Text>
                  ) : null}
                </View>
              </View>
            )}
            {props.children}
          </>
        )}
      </ScaleButton>
    );
  },
);

export {BorderButton};
