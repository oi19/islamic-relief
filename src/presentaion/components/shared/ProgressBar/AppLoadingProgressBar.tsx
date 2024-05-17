import React, {useEffect, useRef} from "react";
import {View, Text, StyleSheet, Animated} from "react-native";
import {Easing} from "react-native-reanimated";
import {Colors, Spacing} from "../../../../styles";
import {getHeight} from "../../../../styles/dimensions";

interface AppLoadingProgressBarProps {
  onCompletion: () => void;
  progressPercentage: number;
}

const AppLoadingProgressBar: React.FC<AppLoadingProgressBarProps> = ({
  onCompletion,
  progressPercentage,
}) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateProgress = () => {
      Animated.timing(progress, {
        toValue: progressPercentage,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false, // Use false to animate the width
      }).start(finished => {
        // Call onCompletion when the animation is complete
        if (finished && progressPercentage === 100 && onCompletion) {
          onCompletion();
        }
      });
    };

    animateProgress();
  }, [progressPercentage]);

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  loadingText: {
    fontSize: Spacing.S20,
    marginBottom: getHeight(10),
  },
  progressBarContainer: {
    width: "100%", // Use 100% to be responsive
    height: 6,
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: Colors.PROGRESS_BAR,
  },
});

export default AppLoadingProgressBar;
