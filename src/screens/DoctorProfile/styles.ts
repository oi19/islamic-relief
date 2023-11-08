import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getHeight, getWidth, scale} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
  container: {
    paddingTop: getHeight(125),
    alignItems: "center",
    flex: 1,
    paddingHorizontal: Spacing.S16,
  },
  image: {
    width: scale(74),
    height: scale(74),
    borderRadius: scale(50),
  },
  videoActionButton: {
    right: "18%",
  },
  callActionButton: {
    right: "32%",
  },
  line: {
    backgroundColor: Colors.GRAY_A7A7A7,
    opacity: 0.2,
  },
  statices: {
    justifyContent: "space-between",
    paddingHorizontal: Spacing.S8,
    marginVertical: Spacing.S8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  selectedOptions: {
    marginTop: Spacing.S8,
  },
  makeAppointmentButton: {
    width: getWidth(263),
    height: getHeight(54),
    marginVertical: Spacing.S16,
    alignSelf: "center",
  },
});
