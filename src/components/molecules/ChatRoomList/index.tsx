import {FlatList, ListRenderItem, StyleSheet} from "react-native";
import React, {FC, RefObject} from "react";
import {PaginationFlatlist, ChatMessageItem} from "../..";

import {MessageType} from "../../../@types";
import {useAppSelector} from "../../../redux/index";
import {doctors, dummyChatMessages} from "../../../dummyData";

type Props = {
  flatlistRef?: RefObject<FlatList>;
};
const ChatRoomList: FC<Props> = ({flatlistRef}) => {
  // const {sentMessages} = useAppSelector(state => state.chatsReducer);

  const _renderChatItem: ListRenderItem<MessageType> = ({item, index}) => {
    return <ChatMessageItem item={item} index={index} />;
  };

  return (
    <PaginationFlatlist
      flatlistRef={flatlistRef}
      data={dummyChatMessages}
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
