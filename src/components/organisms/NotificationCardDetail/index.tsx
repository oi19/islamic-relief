import React from "react";
import {View} from "react-native";
import {Card, Image, RoundedIcon, Text, ViewRow} from "../../atoms";

import {useNavigationHooks} from "../../../hooks";
import {HomeStackTypes} from "../../../navigation/navigation-types";

import {styles} from "./styles";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {NotificationsTypes} from "../../../@types";

const NotificationCardDetail: React.FC<NotificationsTypes> = props => {
  const {navigate} = useNavigationHooks<HomeStackTypes>();

  const {image, title, body, date} = props;

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
          <View style={styles.contentContainer}>
            <Text
              fontFamily="REGULAR"
              fontSize="FS14"
              color="BLACK"
              numberOfLines={2}>
              {body}
            </Text>
          </View>
          {/* notification date section  */}
          <Text
            fontSize="FS14"
            color="GRAY_969696"
            fontFamily="REGULAR"
            style={styles.dateTextStyle}>
            {date}
          </Text>
        </View>
      </ViewRow>
    </Card>
  );
};

export default NotificationCardDetail;
