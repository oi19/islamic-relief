import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Animated, I18nManager} from "react-native";
import {Easing} from "react-native-reanimated";
import {Colors, Spacing} from "../../../../styles";
import {getHeight} from "../../../../styles/dimensions";

interface AppLoadingProgressBarProps {
  onCompletion: () => void;
  progressValue?: number;
}

const AppLoadingProgressBar: React.FC<AppLoadingProgressBarProps> = ({
  onCompletion,
  ...props
}) => {
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    const animateProgress = () => {
      Animated.timing(progress, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(finished => {
        // Call onCompletion when the animation is complete
        if (finished && onCompletion) {
          onCompletion();
        }
      });
    };

    animateProgress();

    return () => {
      progress.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              transform: [
                {
                  translateX: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 200],
                  }),
                },
              ],
            },
          ]}
        />
        <Text style={styles.loadingText}>Loading...</Text>
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
    width: "100%",
    height: getHeight(10),
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.BLACK,
  },
  progressBar: {
    height: "100%",
    backgroundColor: Colors.WHITE,
  },
});

export default AppLoadingProgressBar;
