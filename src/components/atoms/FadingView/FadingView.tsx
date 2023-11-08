import React, {FC, memo, useEffect} from "react";
import {ViewProps} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const FadingView: FC<ViewProps> = ({style, ...props}) => {
  const _opacity = useSharedValue(0);

  const fadingStyle = useAnimatedStyle(() => {
    const opacity = withTiming(_opacity.value);
    return {opacity};
  });

  useEffect(() => {
    _opacity.value = 1;
  }, []);

  return <Animated.View style={[fadingStyle, style]} {...props} />;
};
export default memo(FadingView);
