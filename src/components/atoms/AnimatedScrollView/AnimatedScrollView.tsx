import React, {FC} from "react";
import {ScrollViewProps} from "react-native";
import Animated, {
  SharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

type AnimatedScrollViewProps = {
  y: SharedValue<number>;
};
const AnimatedScrollView: FC<ScrollViewProps & AnimatedScrollViewProps> = ({
  y,
  ...props
}) => {
  const onScroll = useAnimatedScrollHandler({
    onScroll(event) {
      y.value = event.contentOffset.y;
    },
  });

  return (
    <Animated.ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={0.00015}
      {...props}
    />
  );
};

export default AnimatedScrollView;
