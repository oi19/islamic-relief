import {FlatList, ListRenderItem} from "react-native";
import React from "react";
import {Doctor} from "../../../@types";
import {DoctorCardDetails} from "../../organisms";
import {Spacing} from "../../../styles";

type DoctorsListProps = {
  listItems: Doctor[];
};
const DoctorsList: React.FC<DoctorsListProps> = ({listItems}) => {
  const _doctorRenderItem: ListRenderItem<Doctor> = ({item, index}) => {
    return <DoctorCardDetails item={item} index={index} />;
  };
  return (
    <FlatList
      data={listItems}
      contentContainerStyle={{
        paddingBottom: Spacing.S40 * 3,
      }}
      renderItem={_doctorRenderItem}
    />
  );
};

export default DoctorsList;
