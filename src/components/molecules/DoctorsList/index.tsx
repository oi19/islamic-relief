import {FlatList, ListRenderItem} from "react-native";
import React from "react";
import {Doctor} from "../../../@types";
import {DoctorCardDetails} from "../../organisms";
import {Spacing} from "../../../styles";

type DoctorsListProps = {
  listItems: Doctor[];
  renderEmptyList?: any;
};
const DoctorsList: React.FC<DoctorsListProps> = ({
  listItems,
  renderEmptyList,
}) => {
  const _doctorRenderItem: ListRenderItem<Doctor> = ({item, index}) => {
    return <DoctorCardDetails item={item} index={index} />;
  };
  return (
    <FlatList
      data={listItems}
      renderItem={_doctorRenderItem}
      keyExtractor={(_, index) => `activity-item${index}`}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={renderEmptyList}
      contentContainerStyle={{
        paddingBottom: Spacing.S40 * 3,
      }}
    />
  );
};

export default DoctorsList;
