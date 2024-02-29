import React, {useEffect} from "react";
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

const Chat = () => {
  const isLogged = useToken();

  useEffect(() => {
    getOldChats();
  }, []);

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
