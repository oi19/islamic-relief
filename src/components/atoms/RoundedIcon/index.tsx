import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from "react-native";
import React, {memo} from "react";
import {IconsName, IconsProps} from "../../../assets/svgs";
import {ColorsTypes} from "../../../styles/colors";
import {Colors, Spacing} from "../../../styles";
import {scale} from "../../../styles/dimensions";
import Text from "../Text/Text";
import Button from "../Button/Button";

type RoundedIconProps = {
  icon: IconsName;
  iconStyle?: IconsProps;
  backgroundColor?: keyof ColorsTypes;
  size?: number;
  title?: string;
  subTitle?: string;
  style?: ViewStyle;
  titleStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  textContainerStyle?: StyleProp<ViewStyle>;
};
const RoundedIcon: React.FC<RoundedIconProps> = ({
  icon,
  backgroundColor,
  iconStyle,
  size = 0,
  title,
  subTitle,
  style,
  textContainerStyle,
  titleStyle,
  onPress,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Button
        iconName={icon}
        disabled={!onPress}
        iconContainerStyle={{marginLeft: 0}}
        style={{
          backgroundColor: Colors[backgroundColor || "WHITE"],
          width: scale(size || 50),
          height: scale(size || 50),
          borderRadius: scale(size / 2 || 25),
        }}
        iconStyle={iconStyle}
        onPress={() => onPress && onPress()}
      />
      <View style={textContainerStyle}>
        {title ? (
          <Text
            fontFamily="MEDIUM"
            fontSize="FS14"
            style={[{marginTop: Spacing.S8}, titleStyle]}>
            {title}
          </Text>
        ) : null}

        {subTitle ? (
          <Text color="GRAY_A7A7A7" fontSize="FS11">
            {subTitle}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default memo(RoundedIcon);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
