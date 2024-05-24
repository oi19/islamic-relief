import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../../../styles";
import {getHeight, getWidth, scale} from "../../../../styles/dimensions";
const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 86,
    justifyContent: "center",
    alignItems: "flex-start",
    // position: "absolute",
    // zIndex: 10,
    paddingHorizontal: scale(16),
    backgroundColor: Colors.WHITE,
  },
  headerBottomLine: {
    borderBottomColor: "#DDEEFB",
    borderBottomWidth: 2.5,
  },
  headerShadow: {
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  header: {
    position: "absolute",
    height: "100%",
    width: "101%",
  },

  // transparent Header
  transparentHeaderWhiteBackground: {
    backgroundColor: Colors.WHITE,
    width: "100%",
    height: getHeight(80),
    position: "absolute",
    top: 0,
    justifyContent: "center",
  },
  transparentHeaderGradientBackground: {
    width: "100%",
    height: getHeight(100),
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 5,
  },
  transparentHeaderContent: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  // animated Header style
  searchBar: {
    marginTop: 0,
    width: "100%",
  },
  animatedHeaderContainer: {
    width: "100%",
  },
  animatedHeaderSvg: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  titleAndArrowBack: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowBackContainer: {
    width: getWidth(40),
    justifyContent: "center",
  },
  searchBarAndBackIcon: {
    flexDirection: "row",
    width: "95%",
    borderRadius: scale(12),
    alignSelf: "center",
    marginTop: getHeight(20),
    marginHorizontal: Spacing.S4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.WHITE,
    height: getHeight(55),
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});
export default styles;
