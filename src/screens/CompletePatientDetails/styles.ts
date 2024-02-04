import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getHeight, scale} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
  dropdownButton: {
    backgroundColor: Colors.WHITE,
    borderRadius: scale(12),
    marginTop: 0,
  },
  container: {
    flex: 1,
    paddingTop: getHeight(20),
    paddingHorizontal: Spacing.S20,
  },
  title: {
    marginVertical: Spacing.S11,
  },
  ageContainer: {
    marginTop: Spacing.S20,
  },
  uploadButton: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.S16,
    borderWidth: 0,
    marginVertical: Spacing.S20,
  },
  nextButton: {
    marginTop: Spacing.S56,
  },
  inputContainerStyle: {
    height: getHeight(114),
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  problemInputStyle: {
    backgroundColor: "white",
    width: "95%",
    flex: 0,
    height: "100%",
    paddingTop: Spacing.S11,
  },
  writeProblem: {},
});
