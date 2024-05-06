import {StyleSheet} from "react-native";
import {Colors} from "../../../styles";
import {getHeight, getWidth} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
  },
  button: {
    width: getWidth(130),
    height: getHeight(50),

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  selectedButton: {
    backgroundColor: Colors.ORANGE_FDEEDE,
  },

  buttonGroup: {
    // width: SCREEN_WIDTH,
    width: "90%",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});
