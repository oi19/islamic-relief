import {StyleSheet} from "react-native";
import {Spacing} from "../../../styles";
import {scale} from "../../../styles/dimensions";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: scale(5),
  },
  text: {
    paddingHorizontal: Spacing.S4,
    width: "100%",
  },
});
export default styles;
