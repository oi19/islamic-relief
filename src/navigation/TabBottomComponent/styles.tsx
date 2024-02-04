import {StyleSheet} from "react-native";
import {Colors} from "../../styles";
import {
  SCREEN_WIDTH,
  getHeight,
  getWidth,
  scale,
} from "../../styles/dimensions";

const styles = StyleSheet.create({
  buttonItem: {
    width: getWidth() / 5,
    height: getHeight(90),

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: Colors.WHITE,
  },

  middleBtnContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: getWidth(-5),
  },

  tabsContainer: {
    width: SCREEN_WIDTH,
    flexDirection: "row",

    justifyContent: "space-between",
    position: "absolute",
    borderRadius: 100,
    left: 0,
    bottom: 0,
    right: 0,
    borderTopWidth: 0,
    backgroundColor: Colors.TRANSPARENT,
    height: getHeight(90),
    // borderRadius: 12,
    shadowColor: Colors.DARK_GRAY,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 20,
  },
  routesContainer: {
    justifyContent: "space-between",
  },
  middleIconContainer: {
    position: "absolute",
    top: "-37%",
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 9,
  },
  middleIconStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: scale(70),
    height: scale(70),
    borderRadius: scale(50),
  },
});

export default styles;
