import {Dimensions, Platform, StatusBar} from "react-native";
export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HIGHT = Dimensions.get("window").height;

interface params {
  width?: number;
  height?: number;
}

let config = {
  width: 375,
  height: 812,
};

export function setDimantionsConfig(params: params) {
  config = {...config, ...params};
}

export const calcWidthRatio = (
  target: number,
  parent: number = config.width,
) => {
  let ratio = ((target / parent) * 100.0).toString() + "%";
  return ratio;
};

export const getWidth = (target: number = config.width) => {
  return SCREEN_WIDTH * (target / config.width);
};

export const getHeight = (target: number = config.height) => {
  return SCREEN_HIGHT * (target / config.height);
};

export function scale(fontSize: number, standardScreenHeight = config.height) {
  const {height, width} = Dimensions.get("window");
  const standardLength = width > height ? width : height;

  const offset =
    width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait
  const deviceHeight =
    isIphoneX() || Platform.OS === "android"
      ? standardLength - (offset ? offset : 0)
      : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export function isIphoneX() {
  const dimen = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}
