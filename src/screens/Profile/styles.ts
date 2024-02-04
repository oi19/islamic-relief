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
    paddingHorizontal: Spacing.S20,
  },

  headerWithoutLogin: {
    paddingTop: Spacing.S56,
    paddingHorizontal: Spacing.S20,
  },
  button: {
    width: getWidth(326),
  },
  avatar: {
    width: scale(45),
    height: scale(45),
    borderRadius: scale(30),
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.S8,
    backgroundColor: Colors.TRANSPARENT,
    width: getWidth(326),
    marginTop: Spacing.S11,
    borderWidth: 0,
    alignSelf: "center",
  },
});
