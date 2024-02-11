import {MessageType} from "../../../@types";
import {Text} from "../../../components/atoms";
import {useAppSelector} from "../../../redux/index";
import React, {FC} from "react";
import {View} from "react-native";
import {makeStyles} from "./styles";
import {formatTimeAgo} from "../../../helpers";

type Props = {
  item: MessageType;
  index?: number;
};
const ChatMessageItem: FC<Props> = ({item}) => {
  // const {id, name} = useAppSelector(state => state.doctorReducer.profile);
  const owner = item?.sender_id === 2;
  const name = "Omar"

  const styles = makeStyles(owner);

  return (
    <View style={styles.itemContainer}>
      {item.content && (
        <>
          <View style={[styles.messageContainer]}>
            <Text fontSize="FS13" style={styles.message}>
              {item?.content}
              {/* thank you doctor this amazing session */}
            </Text>
            <Text fontSize="FS10" style={styles.date}>
              {/* {formatTimeAgo(new Date(item?.created_at))} */}
              {formatTimeAgo(new Date())}
            </Text>
          </View>
          <Text style={styles.name}>
            {owner ? name : item?.senderUserName || "unknown"}
            {/* {true ? "omar" : "unknown"} */}
          </Text>
        </>
      )}
    </View>
  );
};

export default ChatMessageItem;
