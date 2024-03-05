import {StyleSheet} from "react-native";
import {getHeight, getWidth} from "../../styles/dimensions";
import {Spacing} from "../../styles";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    marginTop: getHeight(100),
  },
  button: {
    marginVertical: Spacing.S8,
  },
  headerStyle: {
    height: getHeight(120),
    paddingTop: Spacing.S20,
  },
  SMSTextContainer: {
    justifyContent: "center",
    marginStart: Spacing.S64,
  },
  hint: {
    marginBottom: Spacing.S20,
  },
  saveButton: {
    width: getWidth(340),
    marginVertical: Spacing.S35,
    alignSelf: "center",
  },
});
