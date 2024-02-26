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

const Chat = () => {
  const isLogged = useToken();
  console.log(isLogged);
  return (
    <View style={styles.rootScreen}>
      {true ? (
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
