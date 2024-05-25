import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "white",
  },
  closeButton: {
    borderColor: Colors.PRIMARY,
    alignItems: "flex-end",
  },
  soicalContainer: {
    justifyContent: "space-around",
    marginVertical: Spacing.S16,
  },
  iconContainerStyle: {
    marginTop: 0,
  },
  input: {
    marginTop: Spacing.S16,
  },
  row: {justifyContent: "space-between"},
  button: {
    marginVertical: Spacing.S40,
  },
  buttonGroup: {},
  line: {
    width: "45%",
    backgroundColor: Colors.INPUT_BORDER,
    height: 1,
    opacity: 0.8,
  },
  socialButton: {
    width: getWidth(105),
    height: 56,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.INPUT_BORDER,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 1,
  },
  socialIconStyle: {
    // width: getWidth(105),
    // height: getHeight(65),
  },
  hintText: {
    textAlign: "center",
    marginVertical: Spacing.S35,
  },
  content: {
    marginTop: Spacing.S40,
    marginHorizontal: Spacing.S20,
  },
  inputContainer: {
    borderWidth: 1,
    // backgroundColor: Colors.RED,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 3.84,

    // elevation: 1,
  },
  disableClicks: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: Colors.TRANSPARENT,
  },
});
