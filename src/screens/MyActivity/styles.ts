import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {scale} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
  container: {
    flex: 1,
    paddingHorizontal: Spacing.S20,
  },
  supportButton: {
    width: scale(65),
    height: scale(65),
    flexDirection: "column",
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(50),
    position: "absolute",
    bottom: Spacing.S56 * 2,
    right: Spacing.S16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
