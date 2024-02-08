import React, {memo, RefObject, useState} from "react";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import BaseModal from "../BaseModal/BaseModal";
import {FlatList, ListRenderItem, View} from "react-native";
import styles from "./styles";
import {Button, Input} from "../../atoms";
import {CityTypes} from "../../../@types";
import {SelectedItem} from "../../organisms";
import {translate} from "../../../helpers";
import {dummyCities} from "../../../dummyData";

const CitiesModal = ({
  forwardRef,
  onSelect,
  selectedId,
}: {
  forwardRef: RefObject<BottomSheetModal>;
  onSelect: (selectedCity: CityTypes) => void;
  selectedId?: string;
}) => {
  // const cities = useAppSelector(state => state.userReducer.cities);
  const [citiesList, setCities] = useState<CityTypes[]>(dummyCities);

  const onClose = () => {
    forwardRef.current?.close();
  };

  const onSelectedCity = (city: CityTypes) => {
    onSelect(city);
    setTimeout(() => {
      forwardRef.current?.close();
    }, 1);
  };

  const onFilter = (keyword: string) => {
    if (keyword) {
      const newList = citiesList.filter(item => item.name.includes(keyword));
      setCities(newList);
    } else {
      setCities(dummyCities);
    }
  };

  const RenderCityItem: ListRenderItem<CityTypes> = ({item, index}) => {
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
      </View>
    </BaseModal>
  );
};
export default memo(CitiesModal);
