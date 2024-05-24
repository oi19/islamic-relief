/* eslint-disable react-native/no-inline-styles */
import React, {FC, memo} from "react";
import {StyleSheet, TouchableOpacityProps, View} from "react-native";
import {Images} from "../../../../assets/images";
import {useNavigationHooks} from "../../../../hooks";
import {isRTL} from "../../../../locals/i18n-config";
import {MainAppStackTypes} from "../../../../navigation/navigation-types";
import {getHeight, getWidth} from "../../../../styles/dimensions";
import Button from "../Button/Button";
import Image from "../Image";
import styles from "./styles";
import {Colors, Spacing} from "../../../../styles";
import Text, {TextProps} from "../Text/Text";

type DefaultHeaderProps = {
  title?: string;
  authHeader?: boolean;
  isBackArrow?: boolean;
  centeredTitle?: string;
  isShowHeaderShadow?: boolean;
  renderHeaderSideIcons?: () => React.ReactNode;
};

const DefaultHeader: FC<TouchableOpacityProps & DefaultHeaderProps> = memo(
  ({
    title,
    authHeader = false,
    isBackArrow = true,
    centeredTitle,
    isShowHeaderShadow,
    renderHeaderSideIcons,
    ...props
  }) => {
    const {goBack} = useNavigationHooks<MainAppStackTypes>();
    return (
      <View
        style={StyleSheet.flatten([
          styles.headerContainer,
          isShowHeaderShadow && styles.headerBottomLine,
          {
            paddingTop: authHeader ? Spacing.S40 : 0,
          },
          props.style,
        ])}>
        <View
          style={[
            styles.row,
            {
              justifyContent:
                title || renderHeaderSideIcons ? "space-between" : "center",
            },
          ]}>
          {title && (
            <Button
              iconStyle={{rotate: isRTL() ? "left" : "right", color: "black"}}
              onPress={goBack}
              textStyle={{color: "BLACK"}}
              iconName={isBackArrow ? "arrow" : undefined}
              text={title}
              style={{alignItems: "flex-start"}}
            />
          )}
          {centeredTitle && (
            <View
              style={{
                position: "absolute",
                width: "100%",
                justifyContent: "center",
              }}>
              <Text
                color="BLACK"
                fontSize="FS16"
                fontFamily="BOLD"
                style={{
                  alignSelf: "center",
                }}>
                {centeredTitle}
              </Text>
            </View>
          )}

          {!title && !renderHeaderSideIcons && (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Image
                source={Images.logo}
                style={{
                  width: getWidth(98),
                  height: getHeight(98),
                }}
                resizeMode="cover"
              />
            </View>
          )}
          {renderHeaderSideIcons && renderHeaderSideIcons()}
        </View>
      </View>
    );
  },
);

DefaultHeader.defaultProps = {};

export {DefaultHeader};
