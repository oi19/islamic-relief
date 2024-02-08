/* eslint-disable react-native/no-inline-styles */
import React, {FC, memo} from "react";
import {View} from "react-native";
import {Button, Line} from "../../atoms";
import styles from "./styles";
import {Colors} from "../../../styles";

const SelectedItem: FC<{
  item: any;
  selectedId?: string;
  onPress: () => void;
}> = ({item, selectedId, onPress}) => {
  const isSelected = selectedId === `${item.id}`;
  return (
    <View style={styles.container}>
      <Button
        textStyle={{
          color: isSelected ? "PRIMARY" : "DARK_GRAY",
          fontFamily: isSelected ? "BOLD" : "MEDIUM",
        }}
        onPress={onPress}
        {...(isSelected && {
          iconName: "checked",
          iconStyle: {color: Colors.PRIMARY},
        })}
        text={item.name}
        style={[
          styles.button,
          {flexDirection: isSelected ? "row-reverse" : "row"},
        ]}
      />
      <Line style={styles.line} />
    </View>
  );
};
export default memo(SelectedItem);
