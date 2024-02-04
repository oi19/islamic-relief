/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {View} from "react-native";
import {Button, Card, Image, Rating, Text, ViewRow} from "../../atoms";

import {Doctor} from "../../../@types";
import {Images} from "../../../assets/images";
import {TextWithIcon} from "../../molecules";
import {styles} from "./styles";
import {scale} from "../../../styles/dimensions";
import {useNavigationHooks} from "../../../hooks";
import {HomeStackTypes} from "../../../navigation/navigation-types";
import {translate} from "../../../helpers";

type DoctorCardDetailsProps = {
  item: Doctor;
  index?: number;
};

const DoctorCardDetails: React.FC<DoctorCardDetailsProps> = ({item}) => {
  const {navigate} = useNavigationHooks<HomeStackTypes>();

  return (
    <Card
      style={styles.cardContainer}
      onPress={() =>
        navigate("DoctorProfile", {
          item,
        })
      }>
      <ViewRow>
        <Image source={Images.default} style={styles.image} />

        {/* Middle Section Info */}
        <View>
          <Text fontSize="FS16" fontFamily="MEDIUM">
            {item?.name}
          </Text>

          <Text color="GRAY_A7A7A7" fontSize="FS13">
            {item?.specialty}
          </Text>
          <ViewRow>
            <Rating size={scale(20)} />
            <Text color="GRAY_A7A7A7">
              {5} | {20} Reviews
            </Text>
          </ViewRow>
        </View>

        {/* Actions Button Section  */}
        <View style={styles.actionsButton}>
          <Button
            iconName="phone"
            iconContainerStyle={{marginLeft: 0}}
            style={styles.notifications}
          />
          <Button
            iconName="video"
            iconContainerStyle={{marginLeft: 0}}
            style={styles.notifications}
          />
        </View>
      </ViewRow>

      <View style={styles.moreInfo}>
        <TextWithIcon
          type="medium"
          icon="prescription"
          text="Lorem ipsum dolor sit amet consectetur. Lacus sit quis vitae consectetur nulla rutrum."
        />

        <TextWithIcon type="medium" icon="wallet" text={`${500}`} />
      </View>
      <ViewRow style={styles.spaceBetween}>
        <Button
          text={translate("Search.bookAppointment")}
          type="standard"
          style={styles.baseButton}
        />
        <Button
          text="Today from 10:00 am"
          textStyle={{fontFamily: "BOLD", fontSize: "FS14"}}
          type="border"
          style={styles.baseButton}
        />
      </ViewRow>
    </Card>
  );
};

export default DoctorCardDetails;
