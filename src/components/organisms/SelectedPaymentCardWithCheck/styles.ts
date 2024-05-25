import {StyleSheet} from "react-native";
import {Colors, Spacing, Typography} from "../../../styles";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: getHeight(Spacing.S8),
    paddingHorizontal: Spacing.S16,
    width: "100%",
    borderWidth: 2,
    borderColor: Colors.INPUT_BORDER,
    height: 56,
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    // paddingStart: getWidth(Spacing.S16),
    // paddingTop: getHeight(Spacing.S20),
    // paddingBottom: getHeight(Spacing.S20),
  },
  image: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(50),
  },
  icon: {
    color: Colors.WHITE,
  },
  roundedIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginHorizontal: Spacing.S8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  baseButton: {},
  radioButtonStyle: {
    width: scale(60),
    height: scale(60),
    justifyContent: "flex-end",
  },
});
