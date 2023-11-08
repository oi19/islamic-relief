import {StyleSheet} from "react-native";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  cardContainer: {
    width: getWidth(336),
    height: getHeight(266),
    alignItems: "flex-start",
    paddingHorizontal: Spacing.S16,
    margin: Spacing.S8,
  },
  image: {
    width: scale(74),
    height: scale(74),
    borderRadius: scale(50),
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
  spaceBetween: {
    justifyContent: "space-between",
  },
  actionsButton: {
    alignItems: "flex-end",
    //  justifyContent: "flex-end",
    width: "22%",
  },
  moreInfo: {
    paddingHorizontal: Spacing.S20,
    alignItems: "flex-start",
  },
  baseButton: {
    width: getWidth(130),
    margin: Spacing.S11,
  },
});
