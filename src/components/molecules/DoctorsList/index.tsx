import {FlatList, ListRenderItem} from "react-native";
import React from "react";
import {Doctor} from "../../../@types";
import {DoctorCardDetails} from "../../organisms";

type DoctorsListProps = {
  listItems: Doctor[];
};
const DoctorsList: React.FC<DoctorsListProps> = ({listItems}) => {
  const _doctorRenderItem: ListRenderItem<Doctor> = ({item, index}) => {
    return <DoctorCardDetails item={item} index={index} />;
  };
  return <FlatList data={listItems} renderItem={_doctorRenderItem} />;
};

export default DoctorsList;
