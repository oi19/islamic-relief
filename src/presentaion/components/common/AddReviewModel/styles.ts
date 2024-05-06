import { StyleSheet } from "react-native"
import { getHeight, getWidth } from "../../../../shared/styles/dimensions"
import { Colors, Spacing } from "../../../../shared/styles"
import { FS10, FS14 } from "../../../../shared/styles/typography"

export const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: Spacing.S20,
    // marginTop: Spacing.S20,
  },
  inputContainerStyle: {
    height: getHeight(114),
    alignItems: "flex-start",
    backgroundColor: Colors.WHITE,

    overflow: "hidden",
    marginVertical: Spacing.S16,
    marginHorizontal: Spacing.S20,
  },
  problemInputStyle: {
    paddingTop: Spacing.S11,
  },
  shareOpinionText: {
    marginVertical: Spacing.S20,
    justifyContent: "flex-start",
    marginStart: Spacing.S20,
    fontSize: FS14,
    textDecorationLine: "underline",
    color: Colors.BLUE,
  },
  cameraButton: {
    backgroundColor: Colors.WHITE,
    marginVertical: Spacing.S20,
    width: getWidth(104),
    height: getHeight(104),
    alignItems: "center",
    justifyContent: "center",
  },
  sendReview: {
    width: "100%",
    marginTop: Spacing.S20,
    marginStart: 20,
  },
  arrowContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  arrowIcon: {
    transform: [{ rotate: "180deg" }],
  },
  tagsListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginStart: Spacing.S20,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.S11,
    paddingHorizontal: Spacing.S16,
    marginVertical: Spacing.S4,
    marginEnd: Spacing.S11,
    borderRadius: 40,
  },
  titleQuestionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginStart: Spacing.S20,
    marginTop: Spacing.S11,
  },
})
