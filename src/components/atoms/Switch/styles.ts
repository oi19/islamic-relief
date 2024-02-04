import {StyleSheet} from "react-native";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  container: {
    width: getWidth(50),
    height: getHeight(30),
    borderRadius: scale(15),
    flexDirection: "row",
    alignItems: "center",
    padding: Spacing.S4,
    backgroundColor: Colors.GRAY_A7A7A7,
    borderWidth: 1,
  },
  activeContainer: {
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.PRIMARY,
  },
  inactiveContainer: {
    borderColor: Colors.GRAY_A7A7A7,
  },
  activeSwitch: {
    backgroundColor: Colors.WHITE,
  },
  inactiveSwitch: {
    backgroundColor: Colors.WHITE,
  },
  switch: {
    width: scale(25),
    height: scale(25),
    borderRadius: scale(15),
  },
});
