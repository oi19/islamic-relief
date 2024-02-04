import {StyleSheet} from "react-native";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  model: {
    backgroundColor: Colors.TRANSPARENT,
  },
  root: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: getWidth(330),
    height: getHeight(220),
    backgroundColor: Colors.WHITE,
    borderRadius: scale(12),
    overflow: "hidden",
    //  padding: Spacing.S16,
    justifyContent: "center",
  },
  contentStyle: {
    width: "100%",
    backgroundColor: Colors.WHITE,
    height: getHeight(220),
    borderRadius: getWidth(10),
    justifyContent: "center",
    overflow: "hidden",
    paddingBottom: Spacing.S20,
  },
  header: {
    height: getHeight(70),
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    flex: 2,
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    bottom: getWidth(-10),
    right: getWidth(10),
  },
});
