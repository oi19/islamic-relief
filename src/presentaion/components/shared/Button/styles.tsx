import {getHeight, getWidth} from "../../../../styles/dimensions";
import {Colors, Spacing} from "../../../../styles/index";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  defaultButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: getHeight(10),
  },
  standerButtonContainer: {
    width: "100%",
    height: 56,
    backgroundColor: Colors.PRIMARY,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // overflow: "hidden",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#2626261F",
    elevation: 4,
    borderRadius: 12,
  },

  dropdownButtonContainer: {
    width: "100%",
    height: 56,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: Colors.GRAY_F9F9F9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.S20,
    backgroundColor: Colors.GRAY_FBFBFB,
    marginTop: Spacing.S16,
  },

  dropdownText: {
    paddingHorizontal: Spacing.S16,
    flex: 1,
    textAlign: "left",
  },

  borderButtonContainer: {
    // width: getWidth(343),
    height: 56,
    borderRadius: 12,
    backgroundColor: Colors.WHITE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },

  linearGradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: getHeight(10),
  },
  error: {
    paddingTop: Spacing.S8,
    paddingLeft: Spacing.S35,
  },
});
export default styles;
