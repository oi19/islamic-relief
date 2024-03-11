import React from "react";
import {View} from "react-native";
import {
  ChatList,
  HandleSignIn,
  // VideoCallControl,
  // ViewRow,
} from "../../components";
import {styles} from "./styles";
import {translate} from "../../helpers";
import {useToken} from "../../hooks";
import {getOldChats} from "../../redux/actions/chatAction";
import {useFocusEffect} from "@react-navigation/native";

const Chat = () => {
  const isLogged = useToken();

  useFocusEffect(
    React.useCallback(() => {
      getOldChats(res => {
        if (res.status === 200) {
          console.log("Old Chats", res.data);
        }
      });
    }, []),
  );

  return (
    <View style={styles.rootScreen}>
      {isLogged ? (
        <ChatList />
      ) : (
        <HandleSignIn
          title={translate("myChat.title")}
          icon="bigChat"
          message={translate("myChat.myChatLoginMessage")}
        />
      )}
    </View>
  );
};

export default Chat;
