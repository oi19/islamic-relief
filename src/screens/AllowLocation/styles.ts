import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getWidth, scale} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.S20,
  },
  locationIconContainer: {
    width: scale(124),
    height: scale(124),
    borderRadius: scale(80),
    backgroundColor: Colors.PRIMARY1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginVertical: Spacing.S20,

    width: getWidth(278),
  },
  subTitle: {
    marginVertical: Spacing.S20,
  },
  baseText: {
    textAlign: "center",
  },
  allowLocation: {
    marginVertical: Spacing.S20,
  },
});
