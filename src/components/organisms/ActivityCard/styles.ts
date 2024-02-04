import {StyleSheet} from "react-native";
import {Spacing} from "../../../styles";
import {getHeight, getWidth} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: Spacing.S8,
  },
  cardHeader: {
    height: getHeight(12),
    backgroundColor: "red",
    width: "100%",
  },
  cardContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingLeft: Spacing.S8,
  },
  statusIcon: {
    position: "absolute",
    bottom: 0,
    left: "12%",
  },
  baseButton: {
    width: getWidth(127),
    height: getHeight(53),
  },
  rowContainer: {
    justifyContent: "space-evenly",
  },
});
