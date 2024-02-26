import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  message: {
    width: getWidth(270),
  },
  buttonsView: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-evenly",
    marginTop: Spacing.S16,
  },
  button: {
    width: getWidth(113),
    height: getHeight(32),
  },
  searchAndCloseButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: getHeight(40),
    paddingHorizontal: Spacing.S16,
  },
  input: {
    height: getHeight(40),
    width: getWidth(310),
    marginTop: 0,
    marginRight: 0,
  },
  closeButtonIcon: {
    color: Colors.GRAY_4B4B4B,
    width: scale(25),
    height: scale(25),
  },
  flatlistStyle: {
    width: "100%",
    height: "100%",
  },
  contentContainerStyle: {
    paddingBottom: getHeight(100),
  },
  disableClicks: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: Colors.TRANSPARENT,
    justifyContent: "center",
  },
});
export default styles;
