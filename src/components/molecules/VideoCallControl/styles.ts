import {StyleSheet} from "react-native";
import {scale} from "../../../styles/dimensions";
import {Colors, Spacing, Typography} from "../../../styles";

export const styles = StyleSheet.create({
  middleBtnContainer: {
    alignItems: "center",
    marginHorizontal: scale(-5),
  },
  roundedIcon: {
    marginHorizontal: Spacing.S4,
  },
  row: {
    flexDirection: "row",
  },
  buttonActions: {
    height: "100%",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.S11,
    borderRadius: scale(23),
    zIndex: 1001,
  },
  middleBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: scale(70),
    height: scale(70),
    borderRadius: scale(40),
    position: "absolute",
    top: -45,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  swipeContainer: {
    top: "2.6%",
  },
  swipeIcon: {
    color: Colors.WHITE,
    width: scale(15),
  },
  swipeTitle: {
    fontSize: Typography.FS10,
    color: Colors.WHITE,
    fontFamily: Typography.NORMAL,
    opacity: 0.7,
  },
});
