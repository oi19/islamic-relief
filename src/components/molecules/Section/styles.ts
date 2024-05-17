import {StyleSheet} from "react-native";
import {Spacing} from "../../../styles";
import {getWidth} from "../../../styles/dimensions";
const styles = StyleSheet.create({
  sectionContainer: {
    width: "100%",
    // alignItems: "center",
  },
  headerSection: {
    alignItems: "center",
    paddingStart: Spacing.S16,
    // marginTop: Spacing.S8,
  },
  viewAllButton: {
    paddingHorizontal: Spacing.S16,
  },
  contentContainerStyle: {
    paddingHorizontal: Spacing.S16,
    paddingTop: Spacing.S8,
    minWidth: getWidth(),
    paddingBottom: Spacing.S20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentVerticalContainerStyle: {
    paddingBottom: Spacing.S20,
  },
  listVerticalStyle: {
    paddingHorizontal: Spacing.S11,
  },
});
export default styles;
