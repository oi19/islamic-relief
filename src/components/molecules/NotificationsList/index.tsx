import React, {memo} from "react";
import {ListRenderItem} from "react-native";
import {NotificationsTypes} from "../../../@types";
import {Spacing} from "../../../styles";
import PaginationFlatlist from "../../atoms/PaginationFlatlist";
import NotificationCardDetail from "../../organisms/NotificationCardDetail";

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
        alignItems: "center",
      }}
    />
  );
};

export default memo(NotificationsList);
