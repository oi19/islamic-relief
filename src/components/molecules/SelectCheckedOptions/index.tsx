import {FlatList, ListRenderItem, StyleSheet} from "react-native";
import React from "react";
import {SelectedItemWithCheck} from "../../organisms";
import {Spacing} from "../../../styles";

type SelectCheckedOptionsProps = {
  listItems: any[];
  onSelectedItem?: (index: number) => void;
};
const SelectCheckedOptions: React.FC<SelectCheckedOptionsProps> = ({
  listItems,
  onSelectedItem,
}) => {
  const [selectedItem, setSelectedItem] = React.useState<number>(-1);

  const _selectedItemRender: ListRenderItem<any> = ({item, index}) => {
    const active = selectedItem === index;
    return (
      <SelectedItemWithCheck
        active={active}
        item={item}
        index={index}
        onSelected={() => {
          if (onSelectedItem) {
            onSelectedItem(index);
          }
          setSelectedItem(index);
        }}
      />
    );
  };
  return (
    <FlatList
      data={listItems}
      style={styles.listStyle}
      renderItem={_selectedItemRender}
      contentContainerStyle={styles.contentContainerStyle}
      keyExtractor={(_, index) => `SelectedOptions_${index}`}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SelectCheckedOptions;

const styles = StyleSheet.create({
  listStyle: {width: "100%", height: "85%", marginBottom: Spacing.S8},
  contentContainerStyle: {},
});
