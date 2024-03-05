import React, {FC, useState} from "react";
import {TouchableOpacityProps} from "react-native";
import {ScrollView} from "react-native-gesture-handler";

import {Button, Text} from "../../../components";
import {Colors} from "../../../styles";
import styles from "./styles";

export type OptionType = {
  id: number;
  value: string;
  name?: string;
};
type SelectedOptionsProps = {
  data: Array<OptionType>;
  type?: "date";
  onSelected?: (index: number) => void;
  selectedId?: number;
};
const SelectedOptions: FC<TouchableOpacityProps & SelectedOptionsProps> = ({
  type,
  data,
  onSelected,
  selectedId,
  ...props
}) => {
  let [selectedIndex, setSelectedIndex] = useState(selectedId || -1);
  const onSelectedPressed = (index: number, id: number) => {
    if (onSelected) {
      onSelected(id);
    }
    setSelectedIndex(index);
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      horizontal>
      {data.map((item, index) => {
        const isSelected = index === selectedIndex;
        return (
          <Button
            key={`SelectedOptions_${index}`}
            onPress={() => onSelectedPressed(index, item?.id)}
            type={isSelected ? "standard" : "border"}
            style={[
              styles.container,
              // type === "date" && styles.dateContainer,
              props.style,
              {
                borderColor: isSelected ? undefined : Colors.PRIMARY,
              },
            ]}>
            <Text
              fontSize="FS13"
              fontFamily="NORMAL"
              color={isSelected ? "WHITE" : "GRAY_A7A7A7"}>
              {item.name || item.value}
            </Text>
            {type === "date" && (
              <Text
                fontSize="FS13"
                fontFamily="MEDIUM"
                color={isSelected ? "WHITE" : "GRAY_1E103A"}>
                {item.value}
              </Text>
            )}
          </Button>
        );
      })}
    </ScrollView>
  );
};

export default SelectedOptions;
