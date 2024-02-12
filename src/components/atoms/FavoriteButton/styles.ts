import {StyleSheet} from "react-native";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    // bottom: getHeight(61),
    // right: getWidth(6),
  },
  button: {
    paddingVertical: scale(6),
    paddingHorizontal: scale(6),
  },
});
export default styles;
