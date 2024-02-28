import {getHeight, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles/index";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  content: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "90%",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  baseButton: {flexDirection: "column-reverse"},
  textButtonContainer: {marginTop: getHeight(7)},
  searchAndCloseButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: Spacing.S11,
    paddingHorizontal: Spacing.S16,
  },
  closeButtonIcon: {
    color: Colors.GRAY_4B4B4B,
    width: scale(25),
    height: scale(25),
  },
});
