import {getHeight} from "../../../styles/dimensions";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  loaderContainer: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyContainer: {
    height: getHeight(),
  },
});
