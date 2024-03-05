import {StyleSheet} from "react-native";
import {Colors, Spacing, Typography} from "../../../styles";
import {getHeight, scale} from "../../../styles/dimensions";

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
    width: scale(55),
    height: scale(55),
    margin: Spacing.S8,
    textAlign: "center",
    borderRadius: Spacing.S4,
    backgroundColor: Colors.WHITE,
    color: Colors.BLUE_4A5970,
    fontFamily: Typography.MEDIUM,
    fontSize: Typography.FS16,
  },
  inputFocused: {
    borderColor: Colors.PRIMARY,
  },
});
