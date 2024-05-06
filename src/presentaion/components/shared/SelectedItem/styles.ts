import {StyleSheet} from "react-native";
import {Spacing} from "../../../../styles";
import {getHeight} from "../../../../styles/dimensions";

const styles = StyleSheet.create({
  container: {width: "100%"},
  button: {
    width: "100%",
    height: getHeight(50),
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.S16,
  },
  line: {
    marginTop: 0,
  },
});
export default styles;
