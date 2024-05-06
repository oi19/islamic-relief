import {StyleSheet} from "react-native";
import {Colors, Spacing, Typography} from "../../../../styles";
import {getHeight, getWidth, scale} from "../../../../styles/dimensions";

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 56,
    // borderWidth: 1,
    borderColor: Colors.INPUT_BORDER,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: Spacing.S20,
    backgroundColor: Colors.INPUT_BACKGROUND,
    marginTop: Spacing.S8,
  },
  inputStyle: {
    height: "100%",
    fontWeight: Typography.REGULAR,
    fontSize: Typography.FS14,
    flex: 1,
    paddingLeft: Spacing.S16,
    paddingRight: Spacing.S16,
    paddingVertical: 0,
    marginVertical: 0,
    color: Colors.BLACK,
  },
  passwordButton: {
    paddingRight: Spacing.S20,
  },
  passwordIcon: {
    width: 17,
    height: 12,
  },

  error: {
    paddingTop: Spacing.S8,
    width: "100%",
    textAlign: "left",
  },
});
export default styles;
