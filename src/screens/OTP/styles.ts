import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getHeight, getWidth, scale} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    justifyContent: "center",
    marginTop: getHeight(100),
  },
  button: {
    marginVertical: Spacing.S8,
  },
  disableClicks: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: Colors.TRANSPARENT,
  },
  headerStyle: {
    height: getHeight(120),
    paddingTop: Spacing.S20,
  },
  SMSTextContainer: {
    justifyContent: "center",
    marginStart: Spacing.S64,
  },
});
