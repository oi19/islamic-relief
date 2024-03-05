import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";

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
    minHeight: getHeight(50),
  },
  rowContainer: {
    justifyContent: "space-evenly",
  },
  image: {
    width: scale(74),
    height: scale(74),
    borderRadius: scale(50),
  },
  showButton: {
    width: getWidth(281),
    height: getHeight(53),
    backgroundColor: Colors.GRAY_EEEEEE,
    borderRadius: scale(12),
    marginVertical: Spacing.S11,
    alignSelf: "center",
  },
});
