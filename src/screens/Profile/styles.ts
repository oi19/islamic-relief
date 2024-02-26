import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getHeight, getWidth, scale} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
  container: {
    flex: 1,
    paddingTop: getHeight(20),
    paddingHorizontal: getWidth(Spacing.S20),
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
    paddingEnd: getWidth(Spacing.S56),
    paddingBottom: 0,
    borderWidth: 0,
    backgroundColor: Colors.TRANSPARENT,
  },
  disableClicks: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: Colors.TRANSPARENT,
  },
});
