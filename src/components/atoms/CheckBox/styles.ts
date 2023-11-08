import {StyleSheet} from "react-native";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";

const styles = StyleSheet.create({
  textStyle: {
    paddingHorizontal: getWidth(6),
    paddingRight: 0,
  },
  icon: {
    height: scale(24),
    width: scale(24),
  },
  button: {
    height: getHeight(46),
    paddingLeft: getWidth(4),
  },
});

export default styles;
