import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: Spacing.S16,
  },

  disableClicks: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: Colors.TRANSPARENT,
  },
  headerStyle: {
    height: getHeight(120),
    paddingTop: Spacing.S20,
  },
  otpContainer: {
    width: "100%",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.GRAY_CBCBCB,
    width: getWidth(50),
    height: getHeight(60),
    margin: Spacing.S8,
    textAlign: "center",
    borderRadius: Spacing.S11,
    backgroundColor: Colors.WHITE,
  },
  inputFocused: {
    borderColor: Colors.PRIMARY,
  },
});
