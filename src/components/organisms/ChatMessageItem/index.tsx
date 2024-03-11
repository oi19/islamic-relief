import {MessageType} from "../../../@types";
import {Image, Text} from "../../../components/atoms";
import {useAppSelector} from "../../../redux/index";
import React, {FC} from "react";
import {View} from "react-native";
import {makeStyles} from "./styles";
import {formatTimeAgo} from "../../../helpers";

type Props = {
  item: MessageType;
  index?: number;
  patientName?: string;
};
const ChatMessageItem: FC<Props> = ({item, patientName}) => {
  const {id, name} = useAppSelector(state => state.userReducer.profile);
  const owner = item?.sender_id === id;

  const styles = makeStyles(owner);

  return (
    <View style={styles.itemContainer}>
      <View style={[styles.messageContainer]}>
        {item?.image && (
          <Image source={{uri: item?.image}} style={styles.messageImage} />
        )}
        {item?.content && (
          <Text fontSize="FS13" style={styles.message}>
            {item?.content}
          </Text>
        )}
        <Text fontSize="FS10" style={styles.date}>
          {formatTimeAgo(new Date(item?.created_at))}
        </Text>
      </View>

      <Text style={styles.name}>{owner ? name : patientName || "Doctor"}</Text>
    </View>
  );
};

export default ChatMessageItem;
