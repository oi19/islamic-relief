import {FlatList, StyleSheet, ViewStyle} from "react-native";
import React from "react";
import {Spacing} from "../../../styles";
type ScrollProps = {
  children: React.ReactNode | undefined;
  contentContainerStyle?: ViewStyle;
  ListHeaderComponentStyle?: ViewStyle;
};
const Scroll: React.FC<ScrollProps> = ({
  children,
  contentContainerStyle,
  ListHeaderComponentStyle,
  ...props
}) => {
  return (
    <FlatList
      data={undefined}
      renderItem={undefined}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={StyleSheet.flatten([
        styles.contentContainerStyle,
        contentContainerStyle,
      ])}
      style={{width: "100%"}}
      ListHeaderComponent={<>{children}</>}
      ListHeaderComponentStyle={ListHeaderComponentStyle}
      {...props}
    />
  );
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: Spacing.S40 * 3.5,
  },
});

export default Scroll;
