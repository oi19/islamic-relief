import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingTop: Spacing.S40,
    backgroundColor: Colors.WHITE,
  },
  center: {
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: "100%",
  },
  webViewContainer: {width: "100%", height: "100%"},
});
