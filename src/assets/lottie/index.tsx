import React, {FC} from "react";
import {ViewProps} from "react-native";
import {LottieConfetti} from "./Confetti";
import LottieLoading from "./Loading";
import LottieSuccess from "./Success";

type LottieProps = {
  name: "confetti" | "loading" | "success";
};

const Lottie: FC<ViewProps & LottieProps> = ({name, ...props}) => {
  switch (name) {
    case "confetti":
      return <LottieConfetti {...props} />;
    case "loading":
      return <LottieLoading {...props} />;
    case "success":
      return <LottieSuccess {...props} />;
    default:
      return <LottieConfetti {...props} />;
  }
};

export {Lottie};
