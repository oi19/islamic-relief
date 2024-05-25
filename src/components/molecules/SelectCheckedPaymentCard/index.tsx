import {FlatList, ListRenderItem, StyleSheet} from "react-native";
import React from "react";
import {Spacing} from "../../../styles";
import {
  SelectedCheckLangau,
  SelectedCheckPaymentCardType,
} from "../../../@types";
import SelectedPaymentCardWithCheck from "../../organisms/SelectedPaymentCardWithCheck";

const list = [
  {id: 1, name: "العربية"},
  {id: 2, name: "English"},
];

type SelectCheckedOptionsProps = {
  listItems: SelectedCheckLangau[];
  selectedItem: number;
  onSelectedItem: (index: number) => void;
  onSetAsDefaultPressed: (index: number) => void;
  onEditPressed: () => void;
};
const SelectCheckedPaymentCard: React.FC<SelectCheckedOptionsProps> = ({
  listItems,
  onSelectedItem,
  onEditPressed,
  onSetAsDefaultPressed,
  selectedItem,
}) => {
  const _selectedItemRender: ListRenderItem<SelectedCheckPaymentCardType> = ({
    item,
    index,
  }) => {
    const active = selectedItem === index;
    return (
      <SelectedPaymentCardWithCheck
        active={active}
        item={item}
        index={index}
        onSetAsDefaultPressed={() => {
          onSetAsDefaultPressed(index);
        }}
        onSelected={() => {
          onSelectedItem(index);
        }}
        onEditPressed={onEditPressed}
      />
    );
  };
  return (
    <FlatList
      data={list}
      style={styles.listStyle}
      renderItem={_selectedItemRender}
      contentContainerStyle={styles.contentContainerStyle}
      keyExtractor={(_, index) => `SelectedOptions_${index}`}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SelectCheckedPaymentCard;

const styles = StyleSheet.create({
  listStyle: {width: "100%", height: "85%", marginBottom: Spacing.S8},
  contentContainerStyle: {},
});
