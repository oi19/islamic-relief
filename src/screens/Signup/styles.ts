import {StyleSheet} from "react-native";
import {getHeight, getWidth, scale} from "../../styles/dimensions";
import {Colors, Spacing} from "../../styles";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop: Spacing.S40,
  },
  container: {
    alignItems: "center",
    height: getHeight(400),
  },
  image: {
    width: scale(128),
    height: scale(128),
    borderRadius: scale(70),
  },
  icon: {
    width: scale(40),
    height: scale(40),
  },
  roundedIcon: {},
  avatarContainer: {
    alignSelf: "center",
    paddingTop: getHeight(20),
  },
  changePhoto: {
    textDecorationLine: "underline",
    textAlign: "center",
    marginVertical: Spacing.S8,
  },
  actionsContainer: {
    bottom: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: Spacing.S11,
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

  dropdownButton: {
    backgroundColor: Colors.WHITE,
    borderRadius: scale(12),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: Spacing.S8,
    paddingHorizontal: Spacing.S11,
  },
  title: {
    textAlign: "left",
    marginTop: Spacing.S11,
    width: "90%",
  },
  calenderButtonStyle: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    borderWidth: 0,
    paddingHorizontal: Spacing.S11,
  },
  saveButton: {
    width: getWidth(350),
    marginTop: Spacing.S20,
    alignSelf: "center",
  },
  password: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    width: getWidth(350),
    marginHorizontal: Spacing.S11,
    marginTop: Spacing.S20,
    height: getHeight(48),
  },
  error: {
    paddingTop: Spacing.S8,
    paddingHorizontal: Spacing.S20,
    width: "100%",
    textAlign: "left",
  },
});
