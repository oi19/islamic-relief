import {FlatList, ListRenderItem, StyleSheet} from "react-native";
import React from "react";
import {Spacing} from "../../../styles";
import {SelectedCheckPaymentCardType} from "../../../@types";
import SelectedPaymentCardWithCheck from "../../organisms/SelectedPaymentCardWithCheck";

type SelectCheckedOptionsProps = {
  listItems: SelectedCheckPaymentCardType[];
  onSelectedItem?: (index: number) => void;
  onSetAsDefaultPressed?: () => void;
  onEditPressed?: () => void;
};
const SelectCheckedPaymentCard: React.FC<SelectCheckedOptionsProps> = ({
  listItems,
  onSelectedItem,
  onSetAsDefaultPressed,
  onEditPressed,
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState<number>(-1);

  const _selectedItemRender: ListRenderItem<SelectedCheckPaymentCardType> = ({
    item,
    index,
  }) => {
    const active = selectedItemIndex === index;
    return (
      <SelectedPaymentCardWithCheck
        active={active}
        item={item}
        index={index}
        onSetAsDefaultPressed={() => {
          if (onSetAsDefaultPressed) {
            onSetAsDefaultPressed();
          }
        }}
        onSelected={() => {
          if (onSelectedItem) {
            onSelectedItem(index);
          }
          setSelectedItemIndex(index);
        }}
        onEditPressed={() => {
          if (onEditPressed) {
            onEditPressed();
          }
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

export default SelectCheckedPaymentCard;

const styles = StyleSheet.create({
  listStyle: {width: "100%", height: "85%", marginBottom: Spacing.S8},
  contentContainerStyle: {},
});
