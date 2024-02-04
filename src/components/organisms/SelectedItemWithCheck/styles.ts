import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {getHeight} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.S8,
    marginVertical: Spacing.S8,
    height: getHeight(70),
  },
  container: {
    justifyContent: "space-between",
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
    alignItems: "center",
    justifyContent: "space-between",
  },
});
