import {StyleSheet} from "react-native";
import {getHeight, getWidth} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
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
    width: getWidth(320),
    marginTop: Spacing.S20,
  },
});
