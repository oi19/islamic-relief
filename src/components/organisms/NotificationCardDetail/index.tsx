/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {View} from "react-native";
import { Card, Image, Text, ViewRow} from "../../atoms";

import { NotificationItemType} from "../../../@types";
import {Images} from "../../../assets/images";
import {useNavigationHooks} from "../../../hooks";
import { HomeStackTypes } from "../../../navigation/navigation-types";

import {styles} from "./styles";

type NotificatinoCardDetailsProps = {
  item: NotificationItemType;
  index?: number;
};

const NotificationCardDetail: React.FC<NotificatinoCardDetailsProps> = ({item}) => {
  const {navigate} = useNavigationHooks<HomeStackTypes>();

  return (
    <Card
      style={styles.cardContainer}
      // onPress={() =>
      //   navigate("DoctorProfile", {
      //     item,
      //   })
      // }
    >
      <ViewRow style={styles.subContainer}>
        <Image source={Images.default} style={styles.image} />
        <View style={styles.textContainerStyle}>

          {/* sender section  */}
          <ViewRow style={styles.headerTextRowStyle}>
            <Text style={styles.senderText} fontSize="FS16" fontFamily="MEDIUM">
              {item?.name}
            </Text>
            <Text style={styles.senderText} fontSize="FS16" fontFamily="REGULAR">
              {item?.title}
            </Text>
          </ViewRow>

          {/* content section  */}
          {
            item?.content ?
              <View style={styles.contentContainer}>
              <Text
              fontSize="FS14"
              color="BLACK"
              numberOfLines={2}
            >
              {item?.content}
                 </Text>
               </View> 
              :
              null
          }
          {/* notification date section  */}

            <Text
              fontSize="FS14"
              color="GRAY_969696"
              fontFamily="REGULAR"
              style={styles.dateTextStyle}
                >
              {/* {item?.date} */}
              Last Wednesday at 9:42 AM
             </Text>
        </View>
      </ViewRow>
    </Card>
  );
};

export default NotificationCardDetail;
