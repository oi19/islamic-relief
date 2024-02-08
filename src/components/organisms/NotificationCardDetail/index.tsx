import React from "react";
import {View} from "react-native";
import {Card, Image, RoundedIcon, Text, ViewRow} from "../../atoms";

import {useNavigationHooks} from "../../../hooks";
import {HomeStackTypes} from "../../../navigation/navigation-types";

import {styles} from "./styles";
import {Colors} from "react-native/Libraries/NewAppScreen";

type NotificatinoCardDetailsProps = {
  image?: string;
  title?: string;
  body?: string;
  id?: number;
  index?: number;
};

const NotificationCardDetail: React.FC<NotificatinoCardDetailsProps> = (
  props: NotificatinoCardDetailsProps,
) => {
  const {image, title, body, id, index} = props;
  const {navigate} = useNavigationHooks<HomeStackTypes>();

  return (
    <Card style={styles.cardContainer}>
      <ViewRow style={styles.subContainer}>
        {image ? (
          <Image source={{uri: image}} style={styles.image} />
        ) : (
          <RoundedIcon
            iconStyle={{
              color: Colors.PRIMARY,
            }}
            icon="notifications"
            backgroundColor="GRAY_EEEEEE"
          />
        )}

        <View style={styles.textContainerStyle}>
          {/* sender section  */}
          <ViewRow style={styles.headerTextRowStyle}>
            <Text style={styles.senderText} fontSize="FS16" fontFamily="MEDIUM">
              {title}
            </Text>
            <Text
              style={styles.senderText}
              fontSize="FS16"
              fontFamily="REGULAR">
              {title}
            </Text>
          </ViewRow>

          {/* content section  */}
          {body ? (
            <View style={styles.contentContainer}>
              <Text
                fontFamily="REGULAR"
                fontSize="FS14"
                color="BLACK"
                numberOfLines={2}>
                {body}
              </Text>
            </View>
          ) : null}
          {/* notification date section  */}

          <Text
            fontSize="FS14"
            color="GRAY_969696"
            fontFamily="REGULAR"
            style={styles.dateTextStyle}>
            {/* {item?.date} */}
            Last Wednesday at 9:42 AM
          </Text>
        </View>
      </ViewRow>
    </Card>
  );
};

export default NotificationCardDetail;
