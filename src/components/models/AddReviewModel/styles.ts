import {StyleSheet} from "react-native";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    // width: "100%",
    // alignItems: "center",
    width: getWidth(270),
    minHeight: getHeight(250),
    backgroundColor: Colors.WHITE,
    borderRadius: scale(16),
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainerStyle: {
    height: getHeight(114),
    alignItems: "flex-start",
    backgroundColor: "white",

    width: getWidth(320),
    overflow: "hidden",
  },
  problemInputStyle: {
    paddingTop: Spacing.S11,
  },
  shareOpinionText: {
    width: getWidth(206),
    textAlign: "center",
    marginVertical: Spacing.S20,
  },
  cameraButton: {
    backgroundColor: Colors.WHITE,
    marginVertical: Spacing.S20,
    width: getWidth(104),
    height: getHeight(104),
    alignItems: "center",
    justifyContent: "center",
  },
  sendReview: {
    // width: "100%",
    // backgroundColor: "red",
    justifyContent: "center",
    textAlign: "center",
    // marginTop: Spacing.S20,
    // backgroundColor: "red",
  },
});
