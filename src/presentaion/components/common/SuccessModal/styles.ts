import { StyleSheet } from "react-native"
import { Colors, Spacing } from "../../../../shared/styles"
import {
  getHeight,
  getWidth,
  scale,
} from "../../../../shared/styles/dimensions"

export const styles = StyleSheet.create({
  model: {
    backgroundColor: Colors.TRANSPARENT,
  },
  root: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
  },
  container: {
    borderRadius: scale(12),
    padding: Spacing.S16,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: getWidth(250),
    height: getHeight(190),
    marginBottom: Spacing.S20,
  },
  title: {
    marginVertical: Spacing.S20,
    textAlign: "center",
  },
  message: {
    marginBottom: Spacing.S20,
    textAlign: "center",
    width: getWidth(262),
  },
  okButton: {
    width: getWidth(300),
    alignSelf: "center",
  },
  doctorName: {
    marginBottom: Spacing.S11,
  },
  anotherButton: {
    width: getWidth(300),
    alignSelf: "center",
    marginVertical: Spacing.S20,
  },
})
