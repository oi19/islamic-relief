import {StyleSheet} from "react-native";
import {Colors, Spacing, Typography} from "../../../../styles";
import {getHeight, getWidth, scale} from "../../../../styles/dimensions";

export const styles = StyleSheet.create({
  CampainSectionCard: {
    width: getWidth(252),
    height: 364,
    borderRadius: scale(8),
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
  importantFundsItemContainer: {
    height: 90,
    width: "100%",
    borderRadius: 8,
  },
  importantFundsCardStyle: {
    width: "100%",
    // backgroundColor: "red",
    borderRadius: 8,
  },
  newsCardStyle: {
    width: getWidth(156),
    justifyContent: "space-between",
  },
  newsImageStyle: {
    height: "100%",
    width: "100%",
    borderRadius: 12,
  },
  sadakatColomnContainer: {
    height: 53,
  },
  sadakatCardStyle: {
    height: 53,
    width: getWidth(130),
    backgroundColor: "none",
    borderWidth: 0,
    // opacity: 1,
    // backgroundColor: "red",
  },
  sadakatImage: {
    height: "100%",
    width: "100%",
    // width: getWidth(60),
    borderRadius: 8,
  },
});
