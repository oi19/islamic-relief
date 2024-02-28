import {StyleSheet} from "react-native";
import {getWidth, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";

export const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "flex-start",
    paddingHorizontal: Spacing.S16,
    margin: Spacing.S8,
    elevation: 3,
  },
  image: {
    width: scale(74),
    height: scale(74),
    borderRadius: scale(50),
  },
  topRowViewContainerStyle: {
    alignItems: "flex-start",
    paddingTop: Spacing.S16,
  },
  notifications: {
    width: scale(32),
    height: scale(32),
    backgroundColor: Colors.GRAY_F9F9F9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(25),
    marginVertical: Spacing.S8,
  },
  iconContainerStyle: {},
  spaceBetween: {
    justifyContent: "space-between",
    marginVertical: Spacing.S11,
  },
  actionsButton: {
    flex: 1,
    alignItems: "flex-end",
    width: "22%",
  },
  moreInfo: {
    paddingHorizontal: Spacing.S20,
    alignItems: "flex-start",
  },
  baseButton: {
    width: getWidth(130),
    margin: Spacing.S11,
  },
  singleButtonStyle: {
    alignSelf: "center",
  },
  prescriptionContainerStyle: {
    alignItems: "flex-start",
  },
  walletTextContainerStyle: {
    alignItems: "center",
  },
});
