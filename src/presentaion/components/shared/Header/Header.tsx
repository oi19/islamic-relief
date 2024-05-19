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
import {Spacing} from "../../../../styles";

type DefaultHeaderProps = {
  title?: string;
  authHeader?: boolean;
  renderHeaderSideIcons?: () => React.ReactNode;
};

const DefaultHeader: FC<TouchableOpacityProps & DefaultHeaderProps> = memo(
  ({title, authHeader = false, renderHeaderSideIcons, ...props}) => {
    const {goBack} = useNavigationHooks<MainAppStackTypes>();
    return (
      <View
        style={StyleSheet.flatten([
          styles.headerContainer,
          !authHeader&&styles.headerShadow,
          {marginTop: authHeader? Spacing.S40:0},
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
              textStyle={{color: "WHITE"}}
              iconName="arrow"
              text={title}
            />
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
