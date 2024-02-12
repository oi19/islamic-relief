import React from "react";
import {View} from "react-native";

import {styles} from "./styles";
import {ChatType} from "../../../@types";
import {Card, Image, Text, ViewRow} from "../..";
import {Images} from "../../../assets/images";
import {Spacing} from "../../../styles/index";
import {formatTimeAgo} from "../../../helpers";
import {useNavigationHooks} from "../../../hooks/navigation-hooks";
import {MainAppStackTypes} from "../../../navigation/navigation-types";

type ChatItemProps = {
  item: ChatType;
  index?: number;
};
const ChatItem: React.FC<ChatItemProps> = ({item}) => {
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  return (
    <Card
      style={styles.mainCard}
      onPress={() =>
        navigate("ChatRoom", {
          chatData: item,
        })
      }>
      <ViewRow style={styles.container}>
        <View style={styles.row}>
          <Image source={Images.default} style={styles.image} />
          <View style={{marginHorizontal: Spacing.S8}}>
            <Text fontFamily="REGULAR" fontSize="FS14">
              {item?.name}
            </Text>
            <Text color="BLUE_4A5970">{item?.email}</Text>
          </View>
        </View>
        <Text>{formatTimeAgo(new Date(item?.created_at))}</Text>
      </ViewRow>
    </Card>
  );
};

export default ChatItem;
