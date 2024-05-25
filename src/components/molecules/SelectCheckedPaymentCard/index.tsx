import {FlatList, ListRenderItem, StyleSheet, View} from "react-native";
import React from "react";
import {Spacing} from "../../../styles";
import {
  SelectedCheckLangau,
  SelectedCheckPaymentCardType,
} from "../../../@types";
import SelectedPaymentCardWithCheck from "../../organisms/SelectedPaymentCardWithCheck";
import Button from "../../../presentaion/components/shared/Button/Button";
import Text from "../../../presentaion/components/shared/Text/Text";
import ViewRow from "../../../presentaion/components/shared/ViewRow/ViewRow";

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

  const renderAddCardSection = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: Spacing.S16,
        }}>
        <Button
          style={{width: 40, height: 40, marginEnd: 20}}
          iconName="addPaymentIcon"
          // iconStyle={{width: 40, height: 40}}
        />
        <Text fontFamily="BOLD" fontSize="FS14">
          اضف بطاقة ائتمان
        </Text>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={list}
        style={styles.listStyle}
        renderItem={_selectedItemRender}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(_, index) => `SelectedOptions_${index}`}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderAddCardSection}
      />
    </>
  );
};

export default SelectCheckedPaymentCard;

const styles = StyleSheet.create({
  listStyle: {width: "100%", height: "85%", marginBottom: Spacing.S8},
  contentContainerStyle: {},
});
