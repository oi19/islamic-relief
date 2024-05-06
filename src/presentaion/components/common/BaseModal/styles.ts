import { StyleSheet } from "react-native"
import { Colors, Spacing } from "../../../../shared/styles"
import { getHeight, scale } from "../../../../shared/styles/dimensions"

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Colors.WHITE,
    borderRadius: 0,
  },
  header: {
    width: "100%",
    height: getHeight(55),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    color: Colors.GRAY_1E103A,
    width: scale(16),
    height: scale(16),
  },
  button: {
    paddingRight: Spacing.S8,
  },
  arrowContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  horizontalLine: {
    height: 6,
    backgroundColor: Colors.GRAY_CBCBCB,
    width: Spacing.S70,
    alignSelf: "center",
    borderRadius: 20,
    marginVertical: Spacing.S20,
  },
})
export default styles
