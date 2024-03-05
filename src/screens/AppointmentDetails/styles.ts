import {StyleSheet} from "react-native";
import {Colors} from "../../styles";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: Colors.TRANSPARENT,
    borderColor: Colors.TRANSPARENT,
  },
});
