import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getWidth} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    paddingTop: Spacing.S20,
    alignItems: "center",
    flex: 1,
    paddingHorizontal: Spacing.S16,
  },
  emptyListContainer: {
    alignItems: "center",
    marginVertical: Spacing.S35,
  },
  saveButton: {
    width: getWidth(340),
    marginVertical: Spacing.S35,
    alignSelf: "center",
  },
});
