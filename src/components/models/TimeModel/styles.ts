import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {getWidth, scale} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  model: {
    backgroundColor: Colors.TRANSPARENT,
  },
  container: {
    width: "100%",
    borderRadius: scale(30),
    backgroundColor: Colors.WHITE,
    alignItems: "center",
  },
  title: {margin: Spacing.S16, width: "60%", textAlign: "left"},
  buttonsView: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-evenly",
    marginVertical: Spacing.S20,
  },
  button: {
    width: getWidth(113),
  },
});
