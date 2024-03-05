import {ListRenderItem, View} from "react-native";
import React, {FC} from "react";
import {ChatItem, HandleEmptyList, Header, PaginationFlatlist} from "../..";

import {styles} from "./styles";
import {useAppSelector} from "../../../redux";
import {useLoader} from "../../../hooks";
import {ChatType} from "../../../@types";
import {translate} from "../../../helpers";
import {getHeight} from "../../../styles/dimensions";
import {Spacing} from "../../../styles";
import {Lottie} from "../../../assets";

type Props = {};
const ChatList: FC<Props> = () => {
  const {oldChats} = useAppSelector(state => state.chatsReducer);
  const chatsLoader = useLoader("oldChats");

  const isChatsData = (oldChats && oldChats?.length > 0) || chatsLoader;

  const _renderChatItem: ListRenderItem<ChatType> = ({item, index}) => {
    return <ChatItem item={item} index={index} />;
  };

  return (
    <View style={styles.root}>
      {isChatsData && (
        <View>
          <Header
            title={translate("myChat.title")}
            style={{height: getHeight(120), paddingTop: Spacing.S56}}
          />
        </View>
      )}
      {chatsLoader ? (
        <View style={styles.loaderContainer}>
          <Lottie name="loading" />
        </View>
      ) : (
        <PaginationFlatlist
          data={oldChats}
          onLoadMore={() => {}}
          renderItem={_renderChatItem}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <HandleEmptyList
                title={translate("myChat.title")}
                icon="bigChat"
                message={translate("myChat.emptyMessage")}
              />
            </View>
          }
        />
      )}
    </View>
  );
};

export default ChatList;
