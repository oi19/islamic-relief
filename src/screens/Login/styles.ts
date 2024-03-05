import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getHeight, getWidth, scale} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: Spacing.S20,
    paddingTop: Spacing.S40,
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
    marginTop: Spacing.S20,
  },
  row: {justifyContent: "space-between"},
  button: {
    marginVertical: Spacing.S8,
  },
  buttonGroup: {
    marginVertical: Spacing.S20,
  },
  line: {
    width: "33%",
  },
  socialButton: {
    width: getWidth(70),
    height: getHeight(70),
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(12),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  hintText: {
    textAlign: "center",
    marginVertical: Spacing.S35,
  },
  content: {
    justifyContent: "center",
    marginTop: Spacing.S40,
  },
  inputContainer: {
    // borderWidth: 1,
    borderColor: Colors.GRAY_EEEEEE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  disableClicks: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: Colors.TRANSPARENT,
  },
});
