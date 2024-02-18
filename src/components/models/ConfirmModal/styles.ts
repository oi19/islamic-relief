import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: getWidth(330),
    minHeight: getHeight(190),
    backgroundColor: Colors.WHITE,
    borderRadius: scale(12),
    padding: Spacing.S16,
    alignItems: "center",
    justifyContent: "center",
  },
  roundedIcon: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  okButton: {
    width: getWidth(220),
    alignSelf: "center",
  },
  message: {
    marginVertical: Spacing.S16,
  },
  title: {
    marginHorizontal: Spacing.S16,
  },
  buttonsView: {
    width: "80%",
    justifyContent: "space-evenly",
    marginTop: Spacing.S20,
  },
  button: {
    width: "100%",
    height: getHeight(40),
    marginTop: Spacing.S11,
  },
  model: {
    backgroundColor: Colors.TRANSPARENT,
  },
});
export default styles;
