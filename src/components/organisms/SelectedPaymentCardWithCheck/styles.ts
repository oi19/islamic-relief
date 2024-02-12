import {StyleSheet} from "react-native";
import {Colors, Spacing, Typography} from "../../../styles";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginVertical: getHeight(Spacing.S8),
    marginHorizontal: getWidth(Spacing.S20),
    marginEnd: getWidth(Spacing.S20),
  },
  container: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingStart: getWidth(Spacing.S16),
    paddingTop: getHeight(Spacing.S20),
    paddingBottom: getHeight(Spacing.S20),
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
