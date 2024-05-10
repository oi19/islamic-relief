import {StyleSheet} from "react-native";
import {Colors, Spacing, Typography} from "../../../../styles";
import {getHeight, getWidth, scale} from "../../../../styles/dimensions";

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
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.GRAY_CBCBCB,
    width: getWidth(70),
    height: 60,
    marginVertical: Spacing.S8,
    textAlign: "center",
    borderRadius: Spacing.S16,
    backgroundColor: Colors.INPUT_BACKGROUND,
    color: Colors.BLUE_4A5970,
    fontFamily: Typography.BOLD,
    fontSize: Typography.FS24,
  },
  inputFocused: {
    borderColor: Colors.PRIMARY,
  },
});
