import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../../styles";
import {scale} from "../../../../styles/dimensions";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: scale(10),
    marginRight: Spacing.S8,
    justifyContent: "flex-start",
    paddingTop: 0,
    overflow: "hidden",
    flexDirection: "column",
    paddingBottom: 0,
  },
});

export default styles;
