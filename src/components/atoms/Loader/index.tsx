/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {ActivityIndicator, StyleProp, ViewStyle} from "react-native";
import {useLoader} from "../../../hooks";
import {Colors, Spacing} from "../../../styles";
import {getWidth} from "../../../styles/dimensions";
import {ApisTypes} from "../../../api/api-types";

function Loader({
  loadingApi,
  isLoading,
  style,
}: {
  loadingApi?: keyof ApisTypes;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle> | undefined;
}) {
  //   const _isLoading = loadingApi ? useLoader(loadingApi) : false;
  const _isLoading = null;
  return (
    <ActivityIndicator
      color={Colors.PRIMARY}
      size={"large"}
      style={[
        {
          paddingVertical: Spacing.S20,
          alignItems: "center",
          width: getWidth(20),
          justifyContent: "center",
          display: isLoading || _isLoading ? "flex" : "none",
        },
        style,
      ]}
    />
  );
}

export default Loader;
