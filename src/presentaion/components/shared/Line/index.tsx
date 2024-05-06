import React, {memo, FC} from "react";
import {View, ViewProps} from "react-native";
import styles from "./styles";
export type LineProps = {
  type?: "horizontal" | "vertical";
};

const Line: FC<ViewProps & LineProps> = ({type, style, ...props}) => {
  return <View style={[styles[type || "horizontal"], style]} {...props} />;
};

export default memo(Line);
