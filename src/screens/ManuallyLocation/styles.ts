import {StyleSheet} from "react-native";
import {getHeight} from "../../styles/dimensions";
import {Spacing} from "../../styles";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  container: {
    paddingTop: getHeight(20),
    alignItems: "flex-start",
    paddingHorizontal: Spacing.S20,
  },
  line: {
    marginVertical: Spacing.S8,
  },
  buttonContainer: {
    position: "absolute",
    bottom: getHeight(20),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
