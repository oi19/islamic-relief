import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getWidth} from "../../styles/dimensions";

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
  input: {
    marginTop: Spacing.S11,
  },
  inputContainer: {
    // borderWidth: 1,
    borderColor: Colors.GRAY_EEEEEE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  saveButton: {
    width: getWidth(340),
    marginVertical: Spacing.S35,
    alignSelf: "center",
  },
});
