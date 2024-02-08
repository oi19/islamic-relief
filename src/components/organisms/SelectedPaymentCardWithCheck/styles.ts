import {StyleSheet} from "react-native";
import {Colors, Spacing, Typography} from "../../../styles";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: getHeight(Spacing.S8),
    marginHorizontal: getWidth(Spacing.S40),
  },
  container: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingStart: getWidth(Spacing.S11),
  },
  image: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(50),
    backgroundColor: "red",
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
});
