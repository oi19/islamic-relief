import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    paddingTop: getHeight(20),
    alignItems: "flex-start",
    // paddingHorizontal: Spacing.S16,
    flex: 1,
  },
  searchContainer: {
    marginVertical: Spacing.S11,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notifications: {
    width: getWidth(52),
    height: getHeight(52),
    backgroundColor: Colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(12),
  },
  searchButton: {
    backgroundColor: Colors.WHITE,
    height: getHeight(52),
    borderRadius: scale(12),
    width: getWidth(285),
    justifyContent: "flex-start",
  },
  mainContentContainerStyle: {
    paddingTop: Spacing.S8,
    minWidth: getWidth(),
    paddingBottom: Spacing.S20,
  },
  iconContainerStyle: {
    marginLeft: 0,
  },
  signUpContainer: {
    width: getWidth(320),
    height: getHeight(170),
    borderRadius: scale(10),
    marginVertical: Spacing.S16,
    overflow: "hidden",
    backgroundColor: Colors.PRIMARY,
    alignSelf: "center",

    shadowColor: Colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 8,
  },
  signUpMessage: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    width: "80%",
  },
});
