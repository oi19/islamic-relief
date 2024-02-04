import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";
import {getHeight, scale} from "../../styles/dimensions";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
  container: {
    paddingTop: getHeight(15),
    alignItems: "center",
    flex: 1,
  },
  searchBar: {
    height: getHeight(50),
    marginTop: Spacing.S16,
    paddingHorizontal: Spacing.S11,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(12),
    marginHorizontal: Spacing.S16,
  },
  doctorListContainer: {flex: 1},
});
