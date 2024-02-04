import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getHeight, getWidth, scale} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
  container: {
    paddingTop: getHeight(20),
    alignItems: "center",
    height: getHeight(400),
    top: "15%",
    flex: 1,
    //  paddingHorizontal: Spacing.S16,
  },
  image: {
    width: scale(128),
    height: scale(128),
    borderRadius: scale(70),
  },
  icon: {
    width: scale(15),
    height: scale(15),
  },
  roundedIcon: {},
  avatarContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "7%",
  },
  changePhoto: {
    textDecorationLine: "underline",
    textAlign: "center",
    marginVertical: Spacing.S8,
  },
  actionsContainer: {
    bottom: "5%",
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
    width: getWidth(340),
    marginBottom: Spacing.S20,
    alignSelf: "center",
  },
});
