import React, {memo} from "react";
import {Source} from "react-native-fast-image";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import styles from "./styles";
import Image from "../Image";

const AnimatedImage = ({
  y,
  source,
}: {
  y: SharedValue<number>;
  source: Source | number;
}) => {
  const animatedstyle = useAnimatedStyle(() => {
    const scale = interpolate(y.value, [0, -300], [1, 3], Extrapolate.CLAMP);
    const translateY = interpolate(
      y.value,
      [-100, 0, 180],
      [40, 0, -50],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{scale}, {translateY}],
    };
  });
  return (
    <Animated.View style={[styles.viewContainer, animatedstyle]}>
      <Image source={source} resizeMode="cover" style={styles.image} />
    </Animated.View>
  );
};

export default memo(AnimatedImage);
