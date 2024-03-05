import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getHeight, getWidth, scale} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
    paddingTop: Spacing.S40,
    paddingHorizontal: Spacing.S20,
  },
  content: {
    flex: 0.65,
    paddingTop: Spacing.S40,
  },
  calenderButtonStyle: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    borderWidth: 0,
    paddingHorizontal: Spacing.S20,
    borderRadius: scale(30),
    alignSelf: "center",
    width: getWidth(350),

    marginTop: Spacing.S20,
    height: getHeight(48),
  },
  saveButton: {
    width: getWidth(350),
    alignSelf: "center",
  },
});
