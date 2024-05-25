import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {getHeight, scale} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.S8,
    marginVertical: Spacing.S8,
    height: getHeight(56),
    borderWidth: 2,
    borderColor: Colors.INPUT_BORDER,
    borderRadius: scale(12),
  },
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Spacing.S16,
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
    width: "30%",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
});
