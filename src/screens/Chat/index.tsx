import React from "react";
import {View} from "react-native";
import {HandleSignIn, VideoCallControl, ViewRow} from "../../components";
import {styles} from "./styles";
import {translate} from "../../helpers";

const Chat = () => {
  return (
    <View style={styles.rootScreen}>
      <HandleSignIn
        title={translate("myChat.title")}
        icon="bigChat"
        message={translate("myChat.myChatLoginMessage")}
      />
      {/* <ViewRow>
        <VideoCallControl />
      </ViewRow> */}
    </View>
  );
};

export default Chat;
