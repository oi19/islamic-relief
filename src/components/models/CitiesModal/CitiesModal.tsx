import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {memo, RefObject, useState} from "react";
import {FlatList, ListRenderItem, View} from "react-native";
import {CityType} from "../../../@types";
import {translate} from "../../../helpers";
import {selectCombinedAccountData, useAppSelector} from "../../../redux";
import {Button, Input} from "../../atoms";
import {SelectedItem} from "../../organisms";
import BaseModal from "../BaseModal/BaseModal";
import styles from "./styles";

const CitiesModal = ({
  forwardRef,
  onSelect,
  selectedId,
}: {
  forwardRef: RefObject<BottomSheetModal>;
  onSelect: (selectedCity: CityType) => void;
  selectedId?: string;
}) => {
  const {cities} = useAppSelector(selectCombinedAccountData);

  const [citiesList, setCities] = useState<CityType[]>(cities);

  const onClose = () => {
    forwardRef.current?.close();
  };

  const onSelectedCity = (city: CityType) => {
    onSelect(city);
    setTimeout(() => {
      forwardRef.current?.close();
    }, 1);
  };

  const onFilter = (keyword: string) => {
    if (keyword) {
      const lowercaseKeyword = keyword.toLowerCase();
      const newList = cities?.filter((item: CityType) =>
        item?.name?.toLowerCase().includes(lowercaseKeyword),
      );
      setCities(newList);
    } else {
      setCities(cities);
    }
  };

  const RenderCityItem: ListRenderItem<CityType> = ({item, index}) => {
    return (
      <SelectedItem
        key={`RenderCityItem_${index}`}
        item={item}
        selectedId={selectedId}
        onPress={() => onSelectedCity(item)}
      />
    );
  };

  return (
    <BaseModal snapPoints={["100%"]} forwardRef={forwardRef}>
      <View style={styles.container}>
        <View style={styles.searchAndCloseButton}>
          <Input
            onChangeText={onFilter}
            placeholder={translate("Search.searchForCity")}
            icon="search"
            style={styles.input}
          />
          <Button
            iconStyle={styles.closeButtonIcon}
            onPress={onClose}
            iconName="close"
          />
        </View>
        <FlatList
          keyExtractor={(_, index) => `cities${index}`}
          showsVerticalScrollIndicator={false}
          style={styles.flatlistStyle}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={RenderCityItem}
          data={citiesList}
        />
      </View>
    </BaseModal>
  );
};
export default memo(CitiesModal);
