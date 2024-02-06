import {  StyleSheet} from "react-native";
import { getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";
import { isRTL as rtl } from "../../../locals/i18n-config";

const isRTL = rtl()
export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    alignItems: "flex-start",
    marginVertical: Spacing.S8,
  },
  subContainer: {
    alignItems: 'flex-start',
    padding: Spacing.S16
  },
  image: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(50),
  },
  textContainerStyle: {
    paddingHorizontal: getWidth(Spacing.S16),
  },
  senderSection: {
    flexDirection: 'row',
  },
  senderText: {
    marginEnd: getWidth(Spacing.S16),
    textAlign:'left'
  },
  headerTextRowStyle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign:'left'
  },
  contentContainer: {
    marginTop: Spacing.S16,
    borderLeftWidth: isRTL ? 0 : getWidth(Spacing.S4),
    borderRightWidth: isRTL ? getWidth(Spacing.S4) : 0,
    borderColor: Colors.GRAY_CBCBCB,
    paddingStart: getWidth(Spacing.S8),
    paddingEnd: getWidth(120),
    justifyContent: "flex-start",
  },
  dateTextStyle: {
    marginTop: getHeight(Spacing.S8),
    textAlign:'left'
  }
});
