import {StyleSheet} from "react-native";
import {getHeight} from "../../../styles/dimensions";
import {Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  cardContainer: {
    height: getHeight(130),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: Spacing.S8,
    marginLeft: Spacing.S16,
  },
});
