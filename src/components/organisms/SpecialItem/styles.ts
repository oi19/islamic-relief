import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {scale} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    //  justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 0,
    marginTop: Spacing.S8,
  },
  image: {
    width: scale(32),
    height: scale(32),
    backgroundColor: "red",
    borderRadius: scale(50),
  },
  name: {marginHorizontal: Spacing.S8},
  line: {
    backgroundColor: Colors.GRAY_CBD1DA,
    marginVertical: Spacing.S8,
    opacity: 0.5,
  },
});
