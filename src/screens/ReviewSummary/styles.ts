import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getHeight, getWidth} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_F7F8FA,
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
  line: {
    marginVertical: Spacing.S20,
  },
  rowContainer: {justifyContent: "space-between", marginVertical: Spacing.S8},
  iconContainer: {flexDirection: "row", alignItems: "center"},
  iconTitle: {marginTop: 0, color: Colors.GRAY_A7A7A7},
  baseButton: {
    width: getWidth(165),
    height: getHeight(53),
  },
});
