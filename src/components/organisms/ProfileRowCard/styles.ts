import {StyleSheet} from "react-native";
import {getHeight, getWidth} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  card: {
    height: getHeight(40),
    width: "100%",
    flexDirection: "row",
    marginVertical: Spacing.S11,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.S16,
    paddingBottom: 0,
    borderWidth: 0,
  },
  supportCardStyle: {
    height: getHeight(40),
    width: "100%",
    flexDirection: "row",
    marginVertical: Spacing.S11,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.S16,
    paddingBottom: 0,
    borderWidth: 1,
    borderColor: Colors.INPUT_BORDER,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
