import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
  container: {
    paddingTop: Spacing.S20,
    alignItems: "center",
    flex: 1,
    paddingHorizontal: Spacing.S16,
  },
  emptyListContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: Spacing.S70,
  },
});
