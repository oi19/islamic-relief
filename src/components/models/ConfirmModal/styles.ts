import {StyleSheet} from "react-native";
import {Spacing} from "../../../styles";
import {getHeight, getWidth} from "../../../styles/dimensions";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  message: {
    width: getWidth(270),
  },
  buttonsView: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-evenly",
    marginTop: Spacing.S20,
  },
  button: {
    width: getWidth(113),
    height: getHeight(40),
  },
});
export default styles;
