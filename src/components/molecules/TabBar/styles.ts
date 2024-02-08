import {SCREEN_HIGHT, SCREEN_WIDTH, getHeight, scale} from "../../../styles/dimensions";
import {Colors, Spacing, Typography} from "../../../styles/index";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    // marginHorizontal: getWidth(15),
  },
  itemContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HIGHT,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
  tabBarContainer: {
    // marginTop: getHeight(15),
  },

  buttonsContainer: {
    backgroundColor: Colors.WHITE,
    flexDirection: "row",
    width: SCREEN_WIDTH,
    alignSelf: "center",
    height: getHeight(53),
    alignItems: "center",
    marginVertical: Spacing.S11,
  },
  tabButton: {
    height: getHeight(50),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(4),
    //  borderBottomWidth: 2,

    marginVertical: Spacing.S2,
    // backgroundColor: "red",
  },

  tabButtonText: {
    fontSize: Typography.FS16,
    fontFamily: Typography.REGULAR,
  },
});
