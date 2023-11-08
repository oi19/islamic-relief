import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.S8,
    paddingVertical: Spacing.S16,
    marginVertical: Spacing.S8,
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
});
