import React, {FC} from "react";
import {View, ViewProps} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import {useNavigationHooks} from "../../../hooks";
import {Colors, Spacing} from "../../../styles";
import {ColorsTypes} from "../../../styles/colors";
import {getHeight} from "../../../styles/dimensions";
import {Button, Text} from "../../atoms";
import styles from "./styles";
import {isRTL} from "../../../locals/i18n-config";

const TransparentHeader = ({
  title,
  onBack,
  y = {value: 0},
}: {
  title?: string;
  y?: SharedValue<number>;
  onBack?: () => void;
}) => {
  const {goBack} = useNavigationHooks();

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(y.value, [100, 150], [0, 1], Extrapolate.CLAMP);
    return {opacity};
  });

  const Content: FC<ViewProps & {color: keyof ColorsTypes}> = ({
    color,
    ...props
  }) => {
    const onGoBack = () => {
      if (onBack) onBack();
      goBack();
    };
    return (
      <View style={[styles.transparentHeaderContent, props.style]}>
        <Button
          iconStyle={{rotate: isRTL() ? "right" : "left", color: Colors[color]}}
          onPress={onGoBack}
          iconName="arrow"
          style={{paddingRight: Spacing.S8}}
        />
        <Text color={color} fontFamily="MEDIUM" fontSize="FS16">
          {title}
        </Text>
      </View>
    );
  };
  return (
    <LinearGradient
      start={{y: 0.8, x: 0}}
      end={{y: 0.1, x: 0}}
      colors={[Colors.RGBA_WHITE(0), Colors.RGBA_WHITE(0)]}
      style={styles.transparentHeaderGradientBackground}>
      <Content color={"WHITE"} />

      {/* Animated header to white content background */}
      <Animated.View
        style={[styles.transparentHeaderWhiteBackground, animatedStyle]}>
        <Content style={{top: getHeight(10)}} color={"PRIMARY1"} />
      </Animated.View>
    </LinearGradient>
  );
};

export {TransparentHeader};
