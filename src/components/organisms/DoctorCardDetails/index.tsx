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
import FavoriteButton from "../../atoms/FavoriteButton/FavoriteButton";

type DoctorCardDetailsProps = {
  item: Doctor;
  index?: number;
};

const DoctorCardDetails: React.FC<DoctorCardDetailsProps> = ({item}) => {
  const {navigate} = useNavigationHooks<HomeStackTypes>();
  // const isBooked: boolean = item.isBooked;
  const isBooked: boolean = true;

  return (
    <Card
      style={styles.cardContainer}
      onPress={() =>
        navigate("DoctorProfile", {
          item,
        })
      }>
      <ViewRow style={styles.topRowViewContainerStyle}>
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
              {5} | {20} {translate("Common.review")}
            </Text>
          </ViewRow>
        </View>

        {/* Actions Button Section  */}
        <View style={styles.actionsButton}>
          <FavoriteButton
            isFavorite={true}
            style={styles.notifications}
            onPress={() => {
              console.log("this doctor is added to favourite");
            }}
          />
          <Button
            iconName="phone"
            iconContainerStyle={{marginLeft: 0}}
            style={styles.notifications}
            onPress={() => {
              console.log("Audio Calling " + item.name);
            }}
          />
          <Button
            iconName="video"
            iconContainerStyle={{marginLeft: 0}}
            style={styles.notifications}
            onPress={() => {
              console.log("Video Calling " + item.name);
            }}
          />
        </View>
      </ViewRow>

      <View style={styles.moreInfo}>
        <TextWithIcon
          type="medium"
          icon="prescription"
          text="Lorem ipsum dolor sit amet consectetur. Lacus sit quis vitae consectetur nulla rutrum."
          style={styles.prescriptionContainerStyle}
        />

        <TextWithIcon
          type="medium"
          icon="wallet"
          text={`${500}`}
          style={styles.walletTextContainerStyle}
        />
      </View>
      <ViewRow style={styles.spaceBetween}>
        {true ? (
          <>
            <Button
              text={translate("Search.bookAppointment")}
              type="standard"
              style={styles.baseButton}
              // onPress={() => onBookAppointmentPressed()}
            />
            <Button
              text="Today from 10:00 am"
              textStyle={{fontFamily: "BOLD", fontSize: "FS14"}}
              type="border"
              style={styles.baseButton}
              // onPress={() => onBookTodayPressed()}
            />
          </>
        ) : (
          <Button
            style={styles.baseButton}
            type="standard"
            text={translate("Common.bookAgain")}
            // onPress={() => onBookAgainPressed()}
          />
        )}
      </ViewRow>
    </Card>
  );
};

export default DoctorCardDetails;
