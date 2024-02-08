import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
    paddingHorizontal: Spacing.S20,
    paddingTop: Spacing.S56,
  },
  content: {
    flex: .75,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    marginVertical: Spacing.S16,
  },
});
