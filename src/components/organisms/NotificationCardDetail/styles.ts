import {StyleSheet} from "react-native";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";
import {isRTL as rtl} from "../../../locals/i18n-config";

const isRTL = rtl();
export const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "flex-start",
    marginVertical: Spacing.S8,

    width: getWidth(340),
  },
  subContainer: {
    alignItems: "flex-start",
    padding: Spacing.S16,
  },
  image: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(50),
    backgroundColor: "red",
  },
  textContainerStyle: {
    paddingHorizontal: Spacing.S16,
  },
  senderSection: {
    flexDirection: "row",
  },
  senderText: {
    textAlign: "left",
  },
  headerTextRowStyle: {
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "left",
  },
  contentContainer: {
    marginTop: Spacing.S16,
    borderLeftWidth: isRTL ? 0 : Spacing.S4,
    borderRightWidth: isRTL ? Spacing.S4 : 0,
    borderColor: Colors.GRAY_CBCBCB,
    paddingStart: Spacing.S8,
    paddingEnd: getWidth(50),
    justifyContent: "flex-start",
  },
  dateTextStyle: {
    marginTop: getHeight(Spacing.S8),
    textAlign: "left",
  },
});
