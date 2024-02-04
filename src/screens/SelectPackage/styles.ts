import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
  container: {
    flex: 1,
    paddingTop: getHeight(20),
    alignItems: "flex-start",
    paddingHorizontal: Spacing.S20,
  },
});
