import {StyleSheet} from "react-native";
import {Spacing} from "../../../styles";
import {getHeight, scale} from "../../../styles/dimensions";
const styles = StyleSheet.create({
  item: {
    height: getHeight(30),
    marginRight: Spacing.S4,
    marginTop: Spacing.S4,
    paddingHorizontal: Spacing.S4,
  },
  contentContainerStyle: {
    paddingRight: Spacing.S35,
    minHeight: getHeight(70),
    paddingBottom: Spacing.S16,
    // width: getWidth(363),
  },
  container: {
    width: scale(99),
    height: scale(64),
    // borderRadius: scale(32),
    marginLeft: 5,
    flexDirection: "column",
  },
  dateContainer: {
    width: scale(99),
    height: scale(64),
  },
});
export default styles;
