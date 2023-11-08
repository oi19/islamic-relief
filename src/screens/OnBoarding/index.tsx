import {StyleSheet, View} from "react-native";
import React from "react";
import {OnBoardingSlider} from "../../components";
import {Colors} from "../../styles";

const OnBoarding = () => {
  return (
    <View style={styles.rootScreen}>
      <OnBoardingSlider />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
    alignItems: "center",
    justifyContent: "center",
  },
});
