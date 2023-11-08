/* eslint-disable react-native/no-inline-styles */
import React, {FC, memo} from "react";
import {TouchableOpacityProps, View} from "react-native";
import {Svgs} from "../../../assets";
import {Colors, Spacing} from "../../../styles";
import {scale} from "../../../styles/dimensions";
import Text from "../Text/Text";
import {ButtonProps} from "./Button";
import {ScaleButton} from "./ScaleButton";
import styles from "./styles";

const DropdownButton: FC<TouchableOpacityProps & ButtonProps> = memo(
  ({text, iconName, placeholder, error, ...props}) => {
    console.log(props.iconStyle);

    return (
      <View style={{alignItems: "flex-start"}}>
        <ScaleButton
          {...props}
          style={[styles.dropdownButtonContainer, props.style]}>
          {iconName && (
            <Svgs
              width={scale(16)}
              height={scale(16)}
              name={iconName}
              {...props.iconStyle}
            />
          )}

          {(text || placeholder) && (
            <Text
              fontSize="FS14"
              fontFamily="REGULAR"
              color={text ? "GRAY_1E103A" : "GRAY_CBCBCB"}
              {...props.textStyle}
              style={{
                paddingHorizontal: Spacing.S16,
                flex: 1,
                textAlign: "left",
              }}>
              {text || placeholder}
            </Text>
          )}
          <Svgs
            width={scale(18)}
            height={scale(18)}
            name={"arrow"}
            color={Colors.DARK_GRAY}
            rotate="bottom"
            style={{marginLeft: Spacing.S16}}
            {...props.iconStyle}
          />

          {props.children}
        </ScaleButton>
        {error && (
          <Text color="RED" style={styles.error}>
            {error}
          </Text>
        )}
      </View>
    );
  },
);

export {DropdownButton};
