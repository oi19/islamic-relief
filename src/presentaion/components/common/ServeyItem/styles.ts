import { StyleSheet } from "react-native"
import {
  SCREEN_HIGHT,
  SCREEN_WIDTH,
  getHeight,
  getWidth,
} from "../../../../shared/styles/dimensions"
import { Colors, Spacing } from "../../../../shared/styles/index"

export const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HIGHT,
    // backgroundColor: "red",
    // borderWidth: 1,
    // alignItems: "center",/
  },
  animationContainer: {
    width: getWidth(295),
    height: getHeight(236),
    overflow: "hidden",
  },
  point: {
    width: getWidth(7),
    height: getWidth(7),
    backgroundColor: Colors.PRIMARY,
    margin: getWidth(5),
    borderRadius: getWidth(10),
    opacity: 0.5,
  },
  selectedPoint: {
    width: getWidth(20),
    height: getWidth(7),
    backgroundColor: Colors.PRIMARY,
    margin: getWidth(5),
    borderRadius: getWidth(10),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    marginBottom: Spacing.S40,
  },
  subTitle: {
    marginVertical: Spacing.S11,
  },
  baseText: {
    marginHorizontal: getWidth(20),
  },
  nextStyle: {
    position: "absolute",
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: getWidth(20),
    bottom: getHeight(40),
  },
  buttonContainerStyle: {
    marginHorizontal: getWidth(20),
    shadowColor: Colors.GRAY_1E103A,
  },
  buttonStyle: {
    marginVertical: Spacing.S11,
    width: "100%",
    height: getHeight(55),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextContainer: {
    flex: 1,
    alignItems: "center",
    marginEnd: Spacing.S70,
  },
  baseButtonText: {
    paddingHorizontal: Spacing.S8,
    textAlign: "center",
  },
  imageContainerStyle: {
    flex: 0.5,
    alignItems: "flex-end",
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
})
