import React, {FC, memo} from "react";
import {View, ViewProps} from "react-native";
import styles from "./styles";

const ViewRow: FC<ViewProps> = ({style, ...props}) => {
  return <View style={[styles.viewContainer, style]} {...props} />;
};
export default memo(ViewRow);
