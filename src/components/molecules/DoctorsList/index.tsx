import {ListRenderItem} from "react-native";
import React from "react";
import {Doctor} from "../../../@types";
import {DoctorCardDetails} from "../../organisms";
import {Spacing} from "../../../styles";
import {PaginationFlatlist} from "../../atoms";

type DoctorsListProps = {
  listItems: Doctor[];
  renderEmptyList?: any;
  onLoadMore: () => void;
  isLoading?: boolean;
};
const DoctorsList: React.FC<DoctorsListProps> = ({
  listItems,
  renderEmptyList,
  onLoadMore,
  isLoading,
}) => {
  const _doctorRenderItem: ListRenderItem<Doctor> = ({item, index}) => {
    return <DoctorCardDetails item={item} index={index} />;
  };
  return (
    <PaginationFlatlist
      data={listItems}
      renderItem={_doctorRenderItem}
      keyExtractor={(_, index) => `activity-item${index}`}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={renderEmptyList}
      isLoading={isLoading}
      contentContainerStyle={{
        paddingBottom: Spacing.S40 * 4,
      }}
      onLoadMore={onLoadMore}
    />
  );
};

export default DoctorsList;
