import {StyleSheet} from "react-native";
import {Colors, Spacing, Typography} from "../../../../styles";
import {getHeight, getWidth, scale} from "../../../../styles/dimensions";

export const styles = StyleSheet.create({
  CampainSectionCard: {
    width: getWidth(252),
    height: 364,
    borderRadius: scale(8),
    backgroundColor: "red",
  },
  CampainSectionCardBackgroundStyle: {
    width: getWidth(252),
    height: 364,
  },
  textSectionContainer: {
    position: "absolute",
    height: 100,
    // top: getHeight(245),
    width: "100%",
    paddingHorizontal: Spacing.S16,
    alignItems: "flex-start",
    marginTop: Spacing.S16,
    bottom: Spacing.S20,
  },
  textSectionSubContainer: {
    justifyContent: "space-between",
  },
  progressBarContainer: {
    marginVertical: Spacing.S8,
  },
});
