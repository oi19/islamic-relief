import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
  container: {
    paddingTop: getHeight(160),
    alignItems: "flex-start",
    paddingHorizontal: Spacing.S20,
  },
});
