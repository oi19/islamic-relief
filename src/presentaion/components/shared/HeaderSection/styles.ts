import {StyleSheet} from "react-native";
import {Spacing} from "../../../../styles";
import {getHeight} from "../../../../styles/dimensions";
const styles = StyleSheet.create({
  headerSection: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: Spacing.S16,
    alignItems: "center",
    marginTop: Spacing.S8,
    minHeight: getHeight(35),
  },
  viewAllButton: {
    paddingHorizontal: Spacing.S16,
  },
});
export default styles;
