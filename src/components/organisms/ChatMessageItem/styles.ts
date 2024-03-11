import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles/index";
import {StyleSheet} from "react-native";

export const makeStyles = (owner: boolean) => {
  const styles = StyleSheet.create({
    itemContainer: {
      transform: [{scaleX: owner ? 1 : -1}],
      marginBottom: scale(30),
      marginHorizontal: scale(16),
    },
    messageContainer: {
      width: getWidth(250),
      minHeight: getHeight(50),
      backgroundColor: owner ? Colors.PRIMARY : Colors.WHITE,
      borderTopEndRadius: Spacing.S20,
      borderTopStartRadius: Spacing.S20,
      borderBottomRightRadius: Spacing.S20,
      padding: scale(10),
      marginVertical: Spacing.S16,
      justifyContent: "center",
    },
    messageImage: {
      width: getWidth(200),
      height: getHeight(200),
      marginBottom: Spacing.S16,
    },
    message: {
      transform: [{scaleX: owner ? 1 : -1}],
      color: owner ? Colors.WHITE : Colors.FONT_07101A,
    },
    date: {
      transform: [{scaleX: owner ? 1 : -1}],
      textAlign: owner ? "left" : "right",
      color: owner ? Colors.GRAY_ECEBEB : Colors.GRAY_CBD1DA,
      marginTop: Spacing.S8,
    },
    name: {
      transform: [{scaleX: owner ? 1 : -1}],
      textAlign: owner ? "left" : "right",
    },
  });

  return styles;
};
