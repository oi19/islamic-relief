import React from "react";
import {View} from "react-native";
import {Card, Image, RoundedIcon, Text, ViewRow} from "../../atoms";

import {useNavigationHooks} from "../../../hooks";
import {MainAppStackTypes} from "../../../navigation/navigation-types";

import {NotificationsTypes} from "../../../@types";
import {formatTimeAgo} from "../../../helpers";
import {Colors} from "../../../styles";
import {styles} from "./styles";

const NotificationCardDetail: React.FC<NotificationsTypes> = props => {
  const {navigate} = useNavigationHooks<MainAppStackTypes>();

  const {image, title, body, created_at, appointment_id} = props;
  const handleNotificationPress = () => {
    if (appointment_id) {
      navigate("TabsBottomStack", {
        screen: "MyActivityStack",
      });
    }
  };

  return (
    <Card style={styles.cardContainer} onPress={handleNotificationPress}>
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
            <Text
              style={styles.senderText}
              fontSize="FS14"
              color="BLUE_4A5970"
              fontFamily="MEDIUM">
              {title}
            </Text>
          </ViewRow>
          {/* content section  */}
          <View style={styles.contentContainer}>
            <Text fontFamily="REGULAR" fontSize="FS13" color="GRAY_969696">
              {body}
            </Text>
          </View>
          {/* notification date section  */}
          <Text color="GRAY_969696" style={styles.dateTextStyle}>
            {formatTimeAgo(new Date(created_at))}
          </Text>
        </View>
      </ViewRow>
    </Card>
  );
};

export default NotificationCardDetail;
