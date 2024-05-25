import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {scale} from "../../../styles/dimensions";

const styles = StyleSheet.create({
  container: {
    width: scale(21),
    height: scale(21),
    backgroundColor: Colors.GRAY_F5F5F5,
    borderRadius: scale(20),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
  checkedView: {
    width: scale(12),
    height: scale(12),
    backgroundColor: Colors.PRIMARY,
    borderRadius: scale(6),
  },
  text: {
    // paddingHorizontal: Spacing.S8,
  },
});

export default styles;
