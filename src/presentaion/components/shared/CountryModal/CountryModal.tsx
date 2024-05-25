import React, {memo, RefObject} from "react";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import BaseModal from "../BaseModal/BaseModal";
import {FlatList, ListRenderItem, View} from "react-native";
import styles from "./styles";

import {GenderTypes} from "../../../../@types";
import SelectedItem from "../SelectedItem/SelectedItem";
import {translate} from "../../../../helpers";
import {genders} from "../../../../dummyData";
import Text from "../Text/Text";
import {Spacing} from "../../../../styles";

const CountryModal = ({
  forwardRef,
  onSelect,
  selectedCountry,
}: {
  forwardRef: RefObject<BottomSheetModal>;
  onSelect: (item: any) => void;
  selectedCountry: any;
}) => {
  // const genders = useAppSelector(state => state.userReducer.genders);

  const onSelectCountry = (item: any) => {
    onSelect(item);
    setTimeout(() => {
      forwardRef.current?.close();
    }, 1);
  };

  const renderCountryItem: ListRenderItem<any> = ({item, index}) => {
    return (
      <SelectedItem
        key={`renderCountryItem_${index}`}
        item={item}
        isSelected={selectedCountry?.id === item?.id}
        onPress={() => onSelectCountry(item)}
      />
    );
  };

  return (
    <BaseModal
      // title={translate("gender")}

      snapPoints={["25%"]}
      forwardRef={forwardRef}>
      <View style={styles.container}>
        <Text
          style={{margin: Spacing.S16, textAlign: "left"}}
          fontFamily="MEDIUM"
          fontSize="FS16"
          color="BLUE_4A5970">
          {translate("Common.chooseGender")}
        </Text>
        <FlatList
          keyExtractor={(_, index) => `gender-item${index}`}
          showsVerticalScrollIndicator={false}
          style={styles.flatlistStyle}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={renderCountryItem}
          data={genders}
        />
      </View>
    </BaseModal>
  );
};
export default memo(CountryModal);
