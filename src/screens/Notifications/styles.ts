import {StyleSheet} from "react-native";
import {Colors, Spacing} from "../../styles";

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
        backgroundColor: Colors.GRAY_EEEEEE,
  },
    container: {
    alignItems: "center",
    flex: 1,
  },
    navigationListContainer: { flex: 1 },
  notLogged: { justifyContent: 'center', },
  customizedContentListStyle: { padding: 0 },
  cutomizedBasedButtonStyle: {
      marginTop:Spacing.S16,
      marginHorizontal: Spacing.S20,
      paddingBottom: Spacing.S16,
  },
  selectedButtonStyle: {
      borderBottomColor:Colors.PRIMARY,
      borderBottomWidth: 3,
  },    
});
