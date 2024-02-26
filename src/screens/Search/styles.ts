import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getHeight, scale} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
    paddingHorizontal: Spacing.S20,
    paddingTop: Spacing.S40,
  },
  searchBar: {
    height: getHeight(50),
    marginTop: Spacing.S16,
    paddingHorizontal: Spacing.S11,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(24),
  },
  disableClicks: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: Colors.TRANSPARENT,
    justifyContent: "center",
  },
});
