/* eslint-disable react-native/no-inline-styles */
import React, {FC, memo} from "react";
import {StyleSheet, TouchableOpacityProps, View} from "react-native";
import {Images} from "../../../assets/images";
import {useNavigationHooks} from "../../../hooks";
import {isRTL} from "../../../locals/i18n-config";
import {MainAppStackTypes} from "../../../navigation/navigation-types";
import {getHeight, getWidth} from "../../../styles/dimensions";
import {Button, Image} from "../../atoms";
import styles from "./styles";

type DefaultHeaderProps = {
  title?: string;
};

const DefaultHeader: FC<TouchableOpacityProps & DefaultHeaderProps> = memo(
  ({title, ...props}) => {
    const {goBack} = useNavigationHooks<MainAppStackTypes>();

    return (
      <View style={StyleSheet.flatten([styles.headerContainer, props.style])}>
        <View
          style={[
            styles.row,
            {justifyContent: title ? "flex-start" : "center"},
          ]}>
          {title ? (
            <Button
              iconStyle={{rotate: isRTL() ? "right" : "left"}}
              onPress={goBack}
              textStyle={{color: "WHITE"}}
              iconName="arrow"
              text={title}
            />
          ) : (
            <View
              style={{
                width: title ? "50%" : "100%",
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
        </View>
      </View>
    );
  },
);

DefaultHeader.defaultProps = {};

export {DefaultHeader};
