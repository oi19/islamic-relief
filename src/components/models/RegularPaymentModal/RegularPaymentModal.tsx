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
import {Button, SelectCheckedOptions} from "../..";
import {Svgs} from "../../../assets";

const list = [
  {id: 1, name: "تبرع مرة واحدة"},
  {id: 2, name: "تبرع بشكل يومي"},
  {id: 3, name: "تبرع بشكل اسبوعي"},
  {id: 4, name: "تبرع بشكل شهري"},
];

const RegularPaymentModal = ({
  forwardRef,
  onSelect,
  selectedId,
}: {
  forwardRef: RefObject<BottomSheetModal>;
  onSelect: (data: any) => void;
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
      backgroundStyle={{borderRadius: 20}}
      snapPoints={["45%"]}
      forwardRef={forwardRef}
      style={{borderRadius: 20}}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Text
            style={{margin: Spacing.S16, textAlign: "left"}}
            fontFamily="MEDIUM"
            fontSize="FS16"
            color="BLUE_4A5970">
            {"اختر دورة تبرعك"}
          </Text>
          <Button
            iconName="close"
            onPress={() => {
              forwardRef.current?.close();
            }}
          />
          {/* <Svgs name="close" color="black" /> */}
        </View>

        {/* <FlatList
          keyExtractor={(_, index) => `gender-item${index}`}
          showsVerticalScrollIndicator={false}
          style={styles.flatlistStyle}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={RenderGenderItem}
          data={genders}
        /> */}
        <SelectCheckedOptions
          selectedId={selectedId - 1}
          onSelectedItem={data => onSelect(data)}
          listItems={list}
        />
      </View>
    </BaseModal>
  );
};
export default memo(RegularPaymentModal);
