import {StyleSheet} from "react-native";
import {
  SCREEN_HIGHT,
  SCREEN_WIDTH,
  getHeight,
  getWidth,
} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HIGHT,
    // backgroundColor: "red",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
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
    width: getWidth(278),
  },
  subTitle: {
    marginVertical: Spacing.S11,
  },
  baseText: {
    textAlign: "center",
  },
  nextStyle: {
    position: "absolute",
    width: "90%",
    alignSelf: "center",
    flex: 1,
    bottom: getHeight(15),
  },
});
