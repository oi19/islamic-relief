import {Colors, Spacing} from "../../../styles/index";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
    paddingHorizontal: Spacing.S20,
    paddingTop: Spacing.S56,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    marginVertical: Spacing.S16,
  },
});
