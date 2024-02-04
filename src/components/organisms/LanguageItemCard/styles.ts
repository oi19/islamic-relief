import {StyleSheet} from "react-native";
import {Spacing} from "../../../styles";
import {getHeight} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginTop: Spacing.S11,
    overflow: "hidden",
    height: getHeight(60),
    paddingHorizontal: Spacing.S20,
    borderWidth: 0,
  },
  line: {
    width: "90%",
    alignSelf: "center",
  },
});
