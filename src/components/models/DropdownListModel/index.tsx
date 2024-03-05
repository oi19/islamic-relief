import React, {memo, RefObject, useState} from "react";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import BaseModal from "../BaseModal/BaseModal";
import {FlatList, ListRenderItem, View} from "react-native";
import styles from "./styles";
import {SelectedItem} from "../../organisms";
import {Button, Input} from "../../atoms";
import {translate} from "../../../helpers";

type DropdownListModel = {
  forwardRef: RefObject<BottomSheetModal>;
  onSelect: (item: any) => void;
  selectedId: number;
  listItem: any[];
  search?: boolean;
  snapPoints?: string;
};
const DropdownListModel: React.FC<DropdownListModel> = ({
  forwardRef,
  onSelect,
  selectedId,
  listItem,
  search,
  snapPoints,
}) => {
  const [filterList, setFilterList] = useState<any[]>(listItem);

  const onClose = () => {
    forwardRef.current?.close();
  };

  const onSelectedItem = (item: number) => {
    onSelect(item);
    setTimeout(() => {
      forwardRef.current?.close();
    }, 1);
  };

  const onFilter = (keyword: string) => {
    if (keyword) {
      const newList = filterList.filter(item => item.name.includes(keyword));
      setFilterList(newList);
    } else {
      setFilterList(listItem);
    }
  };

  const RenderCityItem: ListRenderItem<any> = ({item, index}) => {
    return (
      <SelectedItem
        key={`RenderItemList_${index}`}
        item={item}
        isSelected={selectedId === item?.id}
        onPress={() => onSelectedItem(item)}
      />
    );
  };

  return (
    <BaseModal snapPoints={[snapPoints || "100%"]} forwardRef={forwardRef}>
      <View style={styles.container}>
        {search && (
          <View style={styles.searchAndCloseButton}>
            <Input
              onChangeText={onFilter}
              placeholder={translate("Common.search")}
              icon="search"
              style={styles.input}
            />
            <Button
              iconStyle={styles.closeButtonIcon}
              onPress={onClose}
              iconName="close"
            />
          </View>
        )}

        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatlistStyle}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={RenderCityItem}
          data={listItem}
        />
      </View>
    </BaseModal>
  );
};
export default memo(DropdownListModel);
