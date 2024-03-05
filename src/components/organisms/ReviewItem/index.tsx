import React from "react";
import {View} from "react-native";
import {Review} from "../../../@types";
import {Images} from "../../../assets/images";
import {formatTimeAgo} from "../../../helpers";
import {scale} from "../../../styles/dimensions";
import {Image, Line, Rating, Text, ViewRow} from "../../atoms";
import {styles} from "./styles";

type ReviewItem = {
  item: Review;
  index?: number;
};
const ReviewItem: React.FC<ReviewItem> = ({item}) => {
  const imageUrl = "http://doctors.fmceg.com/storage/";
  const haveImage = item?.user_image ? `${imageUrl}${item?.user_image}` : null;
  return (
    <View>
      <Line />
      <ViewRow style={{justifyContent: "space-between"}}>
        <View style={styles.row}>
          <Image
            source={haveImage ? {uri: haveImage} : Images.default}
            style={styles.avatar}
          />
          <Text fontSize="FS14" fontFamily="MEDIUM">
            {item?.user_name}
          </Text>
        </View>
        <View style={styles.row}>
          <Rating size={scale(20)} rate={item?.rate} />
          <Text>{item?.rate}</Text>
        </View>
      </ViewRow>
      <Text fontSize="P" style={styles.time}>
        {formatTimeAgo(new Date(item?.created_at))}
      </Text>
      <Text fontSize="FS14" color="GRAY_A7A7A7" style={styles.comment}>
        {item?.review}
      </Text>
    </View>
  );
};

export default ReviewItem;
