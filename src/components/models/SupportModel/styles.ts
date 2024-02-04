import {StyleSheet} from "react-native";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  model: {
    backgroundColor: Colors.TRANSPARENT,
  },
  root: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: getWidth(330),
    minHeight: getHeight(190),
    backgroundColor: Colors.WHITE,
    borderRadius: scale(12),
    padding: Spacing.S16,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  roundedIcon: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  okButton: {
    width: getWidth(300),
    alignSelf: "center",
    marginVertical: Spacing.S16,
  },
  cancelButton: {
    width: getWidth(300),
    marginBottom: Spacing.S16,
  },
  message: {
    marginVertical: Spacing.S16,
  },
  title: {
    marginHorizontal: Spacing.S16,
  },
  inputContainerStyle: {
    height: getHeight(114),
    alignItems: "flex-start",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: Colors.GRAY_A7A7A7,
    width: getWidth(300),
    overflow: "hidden",
  },
  problemInputStyle: {
    paddingTop: Spacing.S11,
  },
});
