/* eslint-disable react-native/no-inline-styles */
import LottieView from "lottie-react-native";
import React, {FC, useState} from "react";
import {ViewProps} from "react-native";

const LottieConfetti: FC<ViewProps> = () => {
  const [hideConfetti, onHideConfetti] = useState(false);

  return (
    <>
      <LottieView
        source={require("./json/confetti.json")}
        onAnimationFinish={() => onHideConfetti(true)}
        loop={false}
        autoPlay
        style={{
          position: "absolute",
          width: "100%",
          height: "110%",
          zIndex: 100,
          display: hideConfetti ? "none" : "flex",
        }}
      />
      <LottieView
        source={require("./json/confetti.json")}
        loop={false}
        autoPlay
        style={{
          position: "absolute",
          width: "110%",
          height: "70%",
          zIndex: 101,
          display: hideConfetti ? "none" : "flex",
        }}
      />
    </>
  );
};

export {LottieConfetti};
