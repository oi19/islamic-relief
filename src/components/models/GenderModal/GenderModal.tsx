import React, {memo, RefObject} from "react";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import BaseModal from "../BaseModal/BaseModal";
import {FlatList, ListRenderItem, View} from "react-native";
import styles from "./styles";

import {GenderTypes} from "../../../@types";
import {SelectedItem} from "../../organisms";
import {translate} from "../../../helpers";
import {genders} from "../../../dummyData";
import {Text} from "../../atoms";
import {Spacing} from "../../../styles";

const GenderModal = ({
  forwardRef,
  onSelect,
  selectedId,
}: {
  forwardRef: RefObject<BottomSheetModal>;
  onSelect: (id: number) => void;
  selectedId: number;
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
        isSelected={selectedId === item?.id}
        onPress={() => onSelectedCity(item.id)}
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
          renderItem={RenderGenderItem}
          data={genders}
        />
      </View>
    </BaseModal>
  );
};
export default memo(GenderModal);
