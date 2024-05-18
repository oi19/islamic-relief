import {StyleSheet} from "react-native";
import {Colors, Spacing, Typography} from "../../../../styles";
import {getHeight, getWidth, scale} from "../../../../styles/dimensions";

export const styles = StyleSheet.create({
  CampainSectionCard: {
    height: 223,
    marginHorizontal: Spacing.S16,
    borderRadius: 12,
    overflow: "hidden",
  },
  CampainSectionCardBackgroundStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  textSectionContainer: {
    paddingVertical: Spacing.S20,
    paddingHorizontal: Spacing.S16,
    paddingEnd: Spacing.S40,
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    // backgroundColor: "red",
    flex: 1,
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
  fundsItemContainer: {
    width: getWidth(106),
    height: 254,
    justifyContent: "space-between",
  },
});
