import {StyleSheet} from "react-native";
import {getHeight} from "../../../styles/dimensions";

const styles = StyleSheet.create({
  viewContainer: {
    height: getHeight(180),
    width: "100%",
    // backgroundColor: "red",
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
