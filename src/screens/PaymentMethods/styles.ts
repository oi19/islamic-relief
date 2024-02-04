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
    paddingHorizontal: Spacing.S20,
  },
  nextButton: {
    marginBottom: Spacing.S35,
    alignSelf: "center",
  },
});
