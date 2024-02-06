import {FlatList, ListRenderItem} from "react-native";
import React from "react";
import { NotificationItemType} from "../../../@types";
import {Spacing} from "../../../styles";
import NotificationCardDetail from "../../organisms/NotificationCardDetail";

type NotificationsListProps = {
  listItems: NotificationItemType[];
};
const NotificationsList: React.FC<NotificationsListProps> = ({listItems}) => {
  const _notificationRenderItem: ListRenderItem<NotificationItemType> = ({item, index}) => {
    return <NotificationCardDetail item={item} index={index} />;
    };
    
  return (
    <FlatList
      data={listItems}
      contentContainerStyle={{
        paddingBottom: Spacing.S40 * 3,
      }}
      renderItem={_notificationRenderItem}
    />
  );
};

export default NotificationsList;
