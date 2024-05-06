import React from "react"
import { View, ActivityIndicator, Text } from "react-native"
//import { BlurView } from "@react-native-community/blur"
import { BlurView } from "expo-blur"

import { styles } from "./styles"
import { Colors } from "../../../../shared/styles"

export interface InputProps {
  loadingDisabled?: boolean
}
const BlurProgressView = (props: InputProps) => {
  return (
    <BlurView
      style={styles.container}
      // blurType="light"
      // blurAmount={10}
      intensity={10}
      // reducedTransparencyFallbackColor="white"
    >
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.AZURE} />
      </View>
    </BlurView>
  )
}
export default BlurProgressView
