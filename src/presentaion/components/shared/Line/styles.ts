import {StyleSheet, ViewStyle} from "react-native";
import {Colors, Spacing} from "../../../../styles";
const styles = StyleSheet.create<{
  horizontal: ViewStyle;
  vertical?: ViewStyle;
}>({
  horizontal: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.DARK_GRAY,
    marginTop: Spacing.S8,
  },
  vertical: {
    height: "100%",
    width: 1,
    backgroundColor: Colors.GRAY_ECEBEB,
  },
});
export default styles;
