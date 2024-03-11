import React, {FC, RefObject} from "react";
import {FlatList, ListRenderItem, StyleSheet} from "react-native";
import {ChatMessageItem, PaginationFlatlist} from "../..";

import {MessageType} from "../../../@types";
import {useAppSelector} from "../../../redux/index";

type Props = {
  flatlistRef?: RefObject<FlatList>;
  patientName?: string;
};
const ChatRoomList: FC<Props> = ({flatlistRef, patientName}) => {
  const {sentMessages} = useAppSelector(state => state.chatsReducer);

  const _renderChatItem: ListRenderItem<MessageType> = ({item, index}) => {
    return (
      <ChatMessageItem item={item} index={index} patientName={patientName} />
    );
  };

  return (
    <PaginationFlatlist
      flatlistRef={flatlistRef}
      data={sentMessages}
      onLoadMore={() => {}}
      keyExtractor={(_, index) => `chat-message-item${index}`}
      renderItem={_renderChatItem}
      inverted
      contentContainerStyle={styles.listContentContainer}
    />
  );
};

export default ChatRoomList;

const styles = StyleSheet.create({
  listContentContainer: {},
});
