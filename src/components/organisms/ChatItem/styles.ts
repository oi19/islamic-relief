import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Spacing} from "../../../styles/index";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  mainCard: {
    width: getWidth(340),
    minHeight: getHeight(90),
    alignItems: "flex-start",
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: Spacing.S16,
    marginTop: Spacing.S16,
  },
  image: {
    width: scale(54),
    height: scale(54),
    borderRadius: scale(40),
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  container: {justifyContent: "space-between", alignItems: "flex-start"},
});
