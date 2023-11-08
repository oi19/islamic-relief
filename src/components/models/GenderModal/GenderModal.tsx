import React, {memo, RefObject} from "react";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import BaseModal from "../BaseModal/BaseModal";
import {FlatList, ListRenderItem, View} from "react-native";
import styles from "./styles";

import {GenderTypes} from "../../../@types";
import {SelectedItem} from "../../organisms";
import {translate} from "../../../helpers";
import {genders} from "../../../dummyData";

const GenderModal = ({
  forwardRef,
  onSelect,
  selectedId,
}: {
  forwardRef: RefObject<BottomSheetModal>;
  onSelect: (id: number) => void;
  selectedId: string;
}) => {
  // const genders = useAppSelector(state => state.userReducer.genders);

  const onSelectedCity = (id: number) => {
    onSelect(id);
    setTimeout(() => {
      forwardRef.current?.close();
    }, 1);
  };

  const RenderGenderItem: ListRenderItem<GenderTypes> = ({item, index}) => {
    return (
      <SelectedItem
        key={`RenderGenderItem_${index}`}
        item={item}
        selectedId={selectedId}
        onPress={() => onSelectedCity(item.id)}
      />
    );
  };

  return (
    <BaseModal
      title={translate("gender")}
      snapPoints={["25%"]}
      forwardRef={forwardRef}>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatlistStyle}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={RenderGenderItem}
          data={genders}
        />
      </View>
    </BaseModal>
  );
};
export default memo(GenderModal);
