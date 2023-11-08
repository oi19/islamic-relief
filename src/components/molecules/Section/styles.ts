import {StyleSheet} from "react-native";
import {Spacing} from "../../../styles";
import {getWidth} from "../../../styles/dimensions";
const styles = StyleSheet.create({
  sectionContainer: {
    width: getWidth(363),
    // alignItems: "center",
  },
  headerSection: {
    alignItems: "center",
    // marginTop: Spacing.S8,
  },
  viewAllButton: {
    paddingHorizontal: Spacing.S16,
  },
  contentContainerStyle: {
    paddingRight: Spacing.S35,
    paddingLeft: Spacing.S11,
    paddingTop: Spacing.S8,
    minWidth: getWidth(),
    paddingBottom: Spacing.S20,
    alignItems: "center",
  },
  contentVerticalContainerStyle: {
    paddingBottom: Spacing.S20,
  },
  listVerticalStyle: {
    paddingHorizontal: Spacing.S11,
  },
});
export default styles;
