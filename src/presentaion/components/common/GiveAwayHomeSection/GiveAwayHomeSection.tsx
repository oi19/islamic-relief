import React, {useEffect} from "react";
import {View,ImageBackground} from "react-native";
import Button from "../../shared/Button/Button";
import CardSkeletonPlaceholder from "../../shared/CardSkeletonPlaceholder/CardSkeletonPlaceholder";
import Text from "../../shared/Text/Text";
import {styles} from "./styles";
import {Colors, Spacing, Typography} from "../../../../styles";
import {getWidth, scale} from "../../../../styles/dimensions";

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
