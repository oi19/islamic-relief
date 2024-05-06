import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {getHeight, scale} from "../../../styles/dimensions";

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Colors.WHITE,
    borderRadius: 0,
  },
  header: {
    width: "100%",
    height: getHeight(55),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    color: Colors.GRAY_1E103A,
    width: scale(16),
    height: scale(16),
  },
  button: {
    paddingRight: Spacing.S8,
  },
});
export default styles;
