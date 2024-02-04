import {StyleSheet} from "react-native";
import {getHeight, getWidth} from "../../../styles/dimensions";
import {Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  card: {
    width: getWidth(326),
    height: getHeight(55),
    flexDirection: "row",
    marginVertical: Spacing.S8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.S16,
    paddingBottom: 0,
    borderWidth: 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
