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
    alignItems: "center",
    justifyContent: "center",
  },
  roundedIcon: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  okButton: {
    width: getWidth(220),
    alignSelf: "center",
  },
  message: {
    marginVertical: Spacing.S16,
  },
  title: {
    marginHorizontal: Spacing.S16,
  },
});
