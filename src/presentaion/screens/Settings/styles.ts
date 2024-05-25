import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../styles";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    // flex: 1,
    // paddingTop: Spacing.S20,
    // paddingHorizontal: getWidth(Spacing.S20),
  },

  headerWithoutLogin: {
    paddingTop: getHeight(Spacing.S56),
    paddingHorizontal: getWidth(Spacing.S20),
    marginEnd: getWidth(Spacing.S20),
  },
  button: {},
  avatar: {
    width: scale(45),
    height: scale(45),
    borderRadius: scale(30),
  },
  card: {
    flexDirection: "row",
    marginVertical: Spacing.S8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: getWidth(Spacing.S16),
    width: "100%",
    borderRadius: 0,
    // backgroundColor: Colors.BLACK,
  },
  disableClicks: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: Colors.TRANSPARENT,
  },
  headerShadow: {
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  saperatorStyle: {
    height: Spacing.S16,
    backgroundColor: "#F3F7FB",
  },
});
