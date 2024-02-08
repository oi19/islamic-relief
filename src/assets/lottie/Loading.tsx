import {StyleSheet, ViewProps} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

import {scale} from "../../styles/dimensions";

const LottieLoading: React.FC<ViewProps> = ({style}) => {
  return (
    <LottieView
      style={[styles.lottie, style]}
      source={require("./json/loading.json")}
      autoPlay
      loop={true}
    />
  );
};
const styles = StyleSheet.create({
  lottie: {
    width: scale(300),
    height: scale(300),
    // backgroundColor: "red",
  },
});
export default LottieLoading;
