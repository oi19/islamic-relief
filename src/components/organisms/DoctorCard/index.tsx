import React from "react";
import {Doctor} from "../../../@types";
import {Svgs} from "../../../assets";
import {Images} from "../../../assets/images";
import {scale} from "../../../styles/dimensions";
import {Card, Image, Text, ViewRow} from "../../atoms";
import {styles} from "./styles";
import {useNavigationHooks} from "../../../hooks";
import {HomeStackTypes} from "../../../navigation/navigation-types";

type DoctorCardProps = {
  item: Doctor;
  index?: number;
};
const DoctorCard: React.FC<DoctorCardProps> = ({item}) => {
  const {navigate} = useNavigationHooks<HomeStackTypes>();

  return (
    <Card
      style={styles.cardContainer}
      onPress={() =>
        navigate("DoctorProfile", {
          item,
        })
      }>
      <Image source={Images.default} style={styles.image} />
      <Text fontSize="FS14" fontFamily="MEDIUM">
        {item?.name}
      </Text>
      <Text fontSize="FS13">{item?.specialty}</Text>
      <ViewRow style={styles.moreInfo}>
        <Svgs name="location" width={scale(15)} height={scale(15)} />
        <Text color="GRAY_969696" fontSize="FS11" style={styles.moreInfoText}>
          {item?.duration} Min , {item?.distance} KM
        </Text>
      </ViewRow>
    </Card>
  );
};

export default DoctorCard;
