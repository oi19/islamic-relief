import {getHeight, getWidth, scale} from "../../styles/dimensions";
import {Colors, Spacing} from "../../styles/index";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  keyboardView: {flex: 1},
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
  header: {
    height: getHeight(120),
    backgroundColor: Colors.PRIMARY,
    paddingTop: Spacing.S11,
  },
  headerInfoContainer: {
    marginHorizontal: Spacing.S8,
  },
  image: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(40),
  },
  // old styles
  imageProfileStyle: {
    width: scale(48),
    height: scale(48),
    borderWidth: 1,
    marginHorizontal: Spacing.S11,
  },
  bottomSectionContainer: {
    backgroundColor: Colors.WHITE,
    width: "100%",
  },
  inputContainer: {
    minHeight: getHeight(100),
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  input: {
    backgroundColor: Colors.GRAY_EEEEEE,
    width: getWidth(279),
    marginTop: 0,
  },
  iconBtn: {
    width: getWidth(30),
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: scale(30),
    top: 0,
  },
  iconContainer: {
    marginLeft: 0,
  },
  imageContainer: {
    backgroundColor: Colors.RGBA_WHITE(0.7),
    paddingVertical: Spacing.S11,
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: Spacing.S20,
  },
  closeButton: {
    paddingHorizontal: Spacing.S20,
    width: "100%",
    justifyContent: "flex-end",
  },
  selectedImage: {},
});
