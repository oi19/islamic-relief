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
    bottom: -3,
    left: "19%",
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
  userCardContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  actionsButton: {
    marginHorizontal: Spacing.S11,
  },
  notifications: {
    width: scale(32),
    height: scale(32),
    backgroundColor: Colors.GRAY_F9F9F9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(25),
    marginVertical: Spacing.S8,
  },
  iconContainerStyle: {
    marginLeft: 0,
  },
  iconStyle: {color: Colors.PRIMARY},
});
