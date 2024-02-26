import {ListRenderItem, View} from "react-native";
import React, {FC} from "react";
import {ChatItem, HandleEmptyList, Header} from "../..";
import PaginationFlatlist from "../../atoms/PaginationFlatlist";
import {ChatType} from "../../../@types";
import {Spacing} from "../../../styles/index";
import {translate} from "../../../helpers/language";
import {getHeight} from "../../../styles/dimensions";
import {Lottie} from "../../../assets/lottie";
import {styles} from "./styles";
import {dummyChatList} from "../../../dummyData";

type Props = {};
const ChatList: FC<Props> = () => {
  // const {oldChats} = useAppSelector(state => state.chatsReducer);
  // const chatsLoader = useLoader("oldChats");

  // const isChatsData = (oldChats && oldChats?.length > 0) || chatsLoader;

  const _renderChatItem: ListRenderItem<ChatType> = ({item, index}) => {
    return <ChatItem item={item} index={index} />;
  };

  return (
    <View style={styles.root}>
      {true && (
        <View>
          <Header
            title={translate("myChat.title")}
            style={{height: getHeight(120), paddingTop: Spacing.S56}}
          />
        </View>
      )}
      {false ? (
        <View style={styles.loaderContainer}>
          <Lottie name="loading" />
        </View>
      ) : (
        <PaginationFlatlist
          keyExtractor={(_, index) => `${index.toString()}`}
          data={dummyChatList}
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
