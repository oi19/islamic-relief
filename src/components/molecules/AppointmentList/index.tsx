import React, {ReactElement} from "react";
import {ListRenderItem} from "react-native";
import HandleEmptyList from "../HandleEmptyList";
import {AppointmentsTypes} from "../../../@types";
import {PaginationFlatlist} from "../../atoms";
import {AppointmentCard} from "../../organisms";
import {Spacing} from "../../../styles";
import {translate} from "../../../helpers";

type AppointmentListProps = {
  listItems: AppointmentsTypes[];
  onLoadMore: () => void;
  isLoading?: boolean;
  refreshControl?: ReactElement;
};
const AppointmentList: React.FC<AppointmentListProps> = ({
  listItems,
  isLoading,
  onLoadMore,
  refreshControl,
}) => {
  const _renderActivityItem: ListRenderItem<AppointmentsTypes> = ({
    item,
    index,
  }) => {
    return <AppointmentCard item={item} header index={index} />;
  };
  return (
    <PaginationFlatlist
      data={listItems}
      refreshControl={refreshControl}
      renderItem={_renderActivityItem}
      keyExtractor={(_, index) => `page-item-${index.toString()}`}
      onLoadMore={() => {
        if (listItems.length > 0) {
          onLoadMore();
        }
      }}
      isLoading={isLoading}
      contentContainerStyle={{
        paddingBottom: Spacing.S40 * 3,
      }}
      ListEmptyComponent={
        <HandleEmptyList
          icon="bigDocument"
          message={translate("myAppointment.emptyMessage")}
        />
      }
    />
  );
};

export default AppointmentList;
