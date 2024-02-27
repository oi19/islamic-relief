import React from "react";
import {View} from "react-native";
import {Button, Card, Image, Rating, Text, ViewRow} from "../../atoms";

import {Doctor} from "../../../@types";
import {Images} from "../../../assets/images";
import {TextWithIcon} from "../../molecules";
import {styles} from "./styles";
import {scale} from "../../../styles/dimensions";
import {useNavigationHooks} from "../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";
import {translate} from "../../../helpers";
import FavoriteButton from "../../atoms/FavoriteButton/FavoriteButton";
import {getValueFromICreatedObj} from "../../../redux";

type DoctorCardDetailsProps = {
  item: Doctor;
  index?: number;
};

const DoctorCardDetails: React.FC<DoctorCardDetailsProps> = ({item}) => {
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();

  const onBookAppointmentPressed = () => {
    navigate("DoctorProfile", {
      item,
    });
  };
  const onBookTodayPressed = () => {
    // dispatch action responsible for apointment data and add the buttons date
    // skip the doctor details screen and head to selectPackageScreen
    navigate("SelectPackage");
  };
  const onBookAgainPressed = () => {};

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
            {getValueFromICreatedObj(item?.specialty_id, "specialties")}
          </Text>
          <ViewRow>
            <Rating size={scale(20)} rate={Number(item?.rating)} />
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
            iconContainerStyle={styles.iconContainerStyle}
            style={styles.notifications}
            onPress={() => {
              console.log("Audio Calling " + item.name);
            }}
          />
          <Button
            iconName="video"
            iconContainerStyle={styles.iconContainerStyle}
            style={styles.notifications}
            onPress={() => {
              console.log("Video Calling" + item.name);
            }}
          />
        </View>
      </ViewRow>

      <View style={styles.moreInfo}>
        <TextWithIcon
          type="medium"
          icon="prescription"
          text={
            item?.desc ||
            "Lorem ipsum dolor sit amet consectetur. Lacus sit quis vitae consectetur nulla rutrum."
          }
          style={styles.prescriptionContainerStyle}
        />

        <TextWithIcon
          type="medium"
          icon="wallet"
          text={`${item?.clinics?.[0]?.price || 0} `}
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
              onPress={() => onBookAppointmentPressed()}
            />
            <Button
              text="Today from 10:00 am"
              textStyle={{fontFamily: "BOLD", fontSize: "FS14"}}
              type="border"
              style={styles.baseButton}
              onPress={() => onBookTodayPressed()}
            />
          </>
        ) : (
          <Button
            style={styles.baseButton}
            type="standard"
            text={translate("Common.bookAgain")}
            onPress={() => onBookAgainPressed()}
          />
        )}
      </ViewRow>
    </Card>
  );
};

export default DoctorCardDetails;
