import React from "react";
import {View, StyleSheet} from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import {Colors, Spacing} from "../../../../styles";
import {getHeight} from "../../../../styles/dimensions";

interface ProgressIndicatorProps {
  totalSteps: number;
  currentStep: number;
  progressStyle?: View;
}

const SegmentedProgressBar: React.FC<ProgressIndicatorProps> = ({
  totalSteps,
  currentStep,
  progressStyle,
}) => {
  const segmentWidth = 100 / totalSteps;
  const gapWidth = Spacing.S4;

  const progress = useDerivedValue(() => {
    const step = currentStep >= totalSteps ? totalSteps - 1 : currentStep;
    return withSpring((step + 1) * segmentWidth, {damping: 20});
  });

  const segments = Array.from({length: totalSteps}, (_, index) => {
    const isCompleted = index < currentStep;
    const segmentStyle = useAnimatedStyle(() => ({
      width: progress.value >= (index + 1) * segmentWidth ? "100%" : "0%",
      backgroundColor: isCompleted ? Colors.PRIMARY : Colors.GRAY_C6C8CC,
      marginLeft: index > 0 ? gapWidth : 0,
    }));
    return <Animated.View key={index} style={[styles.segment, segmentStyle]} />;
  });

  return <View style={styles.container}>{segments}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: getHeight(5),
    borderRadius: 3,
    overflow: "hidden",
  },
  segment: {
    flex: 1,
    height: "100%",
    borderRadius: 15,
  },
});

export default SegmentedProgressBar;
