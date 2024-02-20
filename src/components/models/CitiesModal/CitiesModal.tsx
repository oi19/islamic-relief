import React, {memo, RefObject, useEffect, useState} from "react";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import BaseModal from "../BaseModal/BaseModal";
import {FlatList, ListRenderItem, View} from "react-native";
import styles from "./styles";
import {Button, Input} from "../../atoms";
import {CityType} from "../../../@types";
import {SelectedItem} from "../../organisms";
import {translate} from "../../../helpers";
import {dummyCities} from "../../../dummyData";
import {
  getCities,
  selectAllCities,
  store,
  useAppSelector,
} from "../../../redux";
import {useLoader} from "../../../hooks";

const CitiesModal = ({
  forwardRef,
  onSelect,
  selectedId,
}: {
  forwardRef: RefObject<BottomSheetModal>;
  onSelect: (selectedCity: CityType) => void;
  selectedId?: string;
}) => {
  const cities = selectAllCities(store.getState());
  const [citiesList, setCities] = useState<CityType[]>(cities);
  const isLoading = useLoader("cities");

  console.log(cities);
  useEffect(() => {
    getCities();
  }, []);

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
      const newList = cities?.filter((item: CityType) =>
        item.name.includes(keyword),
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
          showsVerticalScrollIndicator={false}
          style={styles.flatlistStyle}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={RenderCityItem}
          data={citiesList}
        />
        {isLoading && <View style={styles.disableClicks}></View>}
      </View>
    </BaseModal>
  );
};
export default memo(CitiesModal);
