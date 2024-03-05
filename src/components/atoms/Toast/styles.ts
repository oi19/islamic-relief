import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {getHeight, scale} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: Colors.RGBA_BLACK(0.84),
    paddingHorizontal: Spacing.S35,
    borderRadius: 5,
    position: "absolute",
    bottom: scale(20),
    left: scale(20),
    right: scale(20),
    justifyContent: "center",
    height: getHeight(55),
  },
  toastText: {
    color: Colors.WHITE,
    lineHeight: scale(22),
  },
});
