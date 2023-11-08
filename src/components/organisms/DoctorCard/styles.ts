import {StyleSheet} from "react-native";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  cardContainer: {
    width: getWidth(193),
    height: getHeight(170),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.S11,
    margin: Spacing.S8,
  },
  image: {
    width: scale(74),
    height: scale(74),
    borderRadius: scale(50),
  },
  moreInfo: {
    justifyContent: "center",
  },
  moreInfoText: {
    marginHorizontal: Spacing.S8,
  },
});
