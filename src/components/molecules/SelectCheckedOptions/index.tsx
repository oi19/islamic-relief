import {FlatList, ListRenderItem, StyleSheet} from "react-native";
import React from "react";
import {SelectedItemWithCheck} from "../../organisms";
import {Spacing} from "../../../styles";
import {PermissionStatus, ServiceTypes} from "../../../@types";
import SelectedServiceItem from "./SelectedServiceItem";

type SelectCheckedOptionsProps = {
  listItems: any[];
  onSelectedItem?: (index?: number, service?: ServiceTypes) => void;
  fromComponent?: "services" | "banks";
};
const SelectCheckedOptions: React.FC<SelectCheckedOptionsProps> = ({
  listItems,
  onSelectedItem,
  fromComponent,
}) => {
  const [selectedItem, setSelectedItem] = React.useState<number>(-1);

  const _selectedServiceItemRender: ListRenderItem<ServiceTypes> = ({
    item,
    index,
  }) => {
    const active = selectedItem === index;

    if (item?.is_available === PermissionStatus.TRUE) {
      return (
        <SelectedServiceItem
          active={active}
          item={item}
          index={index}
          onSelected={() => {
            if (onSelectedItem) {
              onSelectedItem(item?.id, item);
            }
            setSelectedItem(index);
          }}
        />
      );
    }
  };

  const _selectedItemRender: ListRenderItem<any> = ({item, index}) => {
    const active = selectedItem === index;
    return (
      <SelectedItemWithCheck
        active={active}
        item={item}
        index={index}
        onSelected={() => {
          if (onSelectedItem && item?.id) {
            onSelectedItem(item?.id);
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
      renderItem={
        fromComponent === "services"
          ? _selectedServiceItemRender
          : _selectedItemRender
      }
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
