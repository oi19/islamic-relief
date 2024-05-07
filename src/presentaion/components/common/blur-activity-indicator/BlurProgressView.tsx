import React, {FC} from "react";
import {View, ActivityIndicator, Text} from "react-native";
import {BlurView} from "@react-native-community/blur";

import {styles} from "./styles";
import {Colors} from "../../../../styles";

export interface InputProps {
  loadingDisabled?: boolean;
}
const BlurProgressView: FC<InputProps> = ({loadingDisabled}) => {
  return (
    <BlurView
      style={styles.container}
      blurType="light"
      blurAmount={10}
      reducedTransparencyFallbackColor="white">
      {!loadingDisabled ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={Colors.PRIMARY} />
        </View>
      ) : null}
    </BlurView>
  );
};
export default BlurProgressView;
