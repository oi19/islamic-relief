import {StyleSheet, ViewProps} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import {scale} from "../../styles/dimensions";

const LottieSuccess: React.FC<ViewProps> = ({style}) => {
  const [hideConfetti, onHideConfetti] = React.useState(false);
  return (
    <LottieView
      style={[styles.lottie, style]}
      onAnimationFinish={() => onHideConfetti(true)}
      source={require("./json/successAnimation.json")}
      autoPlay
      loop={hideConfetti}
    />
  );
};

export default LottieSuccess;

const styles = StyleSheet.create({
  lottie: {
    width: scale(300),
    height: scale(300),
  },
});
