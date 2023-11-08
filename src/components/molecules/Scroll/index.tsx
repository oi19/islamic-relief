import {FlatList, ViewStyle} from "react-native";
import React from "react";
type ScrollProps = {
  children: React.ReactNode | undefined;
  contentContainerStyle?: ViewStyle;
};
const Scroll: React.FC<ScrollProps> = ({
  children,
  contentContainerStyle,
  ...props
}) => {
  return (
    <FlatList
      data={undefined}
      renderItem={undefined}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={contentContainerStyle}
      style={{width: "100%"}}
      ListHeaderComponent={<>{children}</>}
      {...props}
    />
  );
};

export default Scroll;
