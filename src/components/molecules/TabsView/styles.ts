import {StyleSheet} from "react-native";
import {getWidth, scale} from "../../../styles/dimensions";
import {Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  baseButton: {
    width: getWidth(95),
    marginHorizontal: Spacing.S4,

    borderRadius: scale(24),
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  contentListStyle: {
    padding: Spacing.S16,
  },
  listStyle: {
    flexGrow: 0,
  },
});
