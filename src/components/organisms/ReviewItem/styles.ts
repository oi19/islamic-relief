import {StyleSheet} from "react-native";
import {scale} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  avatar: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
  },
  time: {
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  comment: {},
});
