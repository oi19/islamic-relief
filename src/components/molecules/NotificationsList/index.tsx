import {FlatList, ListRenderItem} from "react-native";
import React from "react";
import { NotificationsTypes} from "../../../@types";
import {Spacing} from "../../../styles";
import NotificationCardDetail from "../../organisms/NotificationCardDetail";
import PaginationFlatlist from "../../atoms/PaginationFlatlist";


type NotificationsProps = {
  notifications: NotificationsTypes[];
};
const NotificationsList: React.FC<NotificationsProps> = ({notifications}) => {
  const _renderNotificationItem: ListRenderItem<NotificationsTypes> = ({
    item,
    index,
  }) => {
    return <NotificationCardDetail {...item} index={index} />;
  };
  return (
    <PaginationFlatlist
      data={notifications}
      renderItem={_renderNotificationItem}
      onLoadMore={() => {}}
      contentContainerStyle={{
        paddingBottom: Spacing.S40 * 7,
      }}
    />
  );
};

export default NotificationsList;
