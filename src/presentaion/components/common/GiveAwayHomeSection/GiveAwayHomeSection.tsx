import React, {useEffect} from "react";
import {
  FlatList,
  ListRenderItem,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import {Button, Card, Section, ViewRow} from "../../../../components";
import Video from "react-native-video";
import Image from "../../shared/Image";
import CardSkeletonPlaceholder from "../../shared/CardSkeletonPlaceholder/CardSkeletonPlaceholder";
import Text from "../../shared/Text/Text";
import {styles} from "./styles";
import ProgressBar from "../../shared/ProgressBar/ProgressBar";
import {Colors, Spacing, Typography} from "../../../../styles";
import {getWidth, scale} from "../../../../styles/dimensions";
import ReadTextMore from "../../shared/ReadTextMore";

interface GiveAwayCardProps {
  isLoading: boolean;
}
export const GiveAwayCard: React.FC<GiveAwayCardProps> = isLoading => {
  return (
    <View style={[styles.CampainSectionCard]}>
      {false ? (
        <CardSkeletonPlaceholder width={"100%"} height={"100%"} />
      ) : (
        <>
          <ImageBackground
            source={require("../../../../assets/images/logo.png")}
            style={styles.CampainSectionCardBackgroundStyle}>
            <View style={styles.textSectionContainer}>
              <Text fontSize="FS24" fontFamily="BOLD" color="WHITE">
                اهدي تبرعك
              </Text>

              <Text
                fontSize="FS14"
                fontFamily="BOLD"
                color="WHITE"
                style={{flexWrap: "wrap", paddingStart: 120}}
                numberOfLines={3}>
                يمكنك اختيار هدية غير معتادة لذكرى لا تنسى , من بين صدقات جارية
                تجعل أثر هديتك دائما
              </Text>

              <Button
                text="تبرع الان"
                textStyle={{
                  fontFamily: "BOLD",
                  fontSize: "FS16",
                  color: "#495656",
                }}
                style={{
                  backgroundColor: Colors.WHITE,
                  borderRadius: 12,
                  width: getWidth(117),
                }}
              />
            </View>
          </ImageBackground>
        </>
      )}
    </View>
  );
};
