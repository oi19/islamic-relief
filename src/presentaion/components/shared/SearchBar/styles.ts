import {StyleSheet} from "react-native";
import {getHeight} from "../../../../styles/dimensions";
import {Colors, Spacing} from "../../../../styles";

export const styles = StyleSheet.create({
  headerContainer: {
    height: getHeight(40),
    flexDirection: "row",
    backgroundColor: Colors.WHITE,
    paddingHorizontal: Spacing.S16,
    overflow: "hidden",
  },
  searchInput: {
    height: getHeight(40),
    marginTop: 0,
    flex: 1,
    width: "100%",
  },
  titleAndGraduationIcon: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.S16,
    marginTop: getHeight(35),
  },
});
