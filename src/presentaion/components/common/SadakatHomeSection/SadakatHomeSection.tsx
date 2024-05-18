import React, {useEffect} from "react";
import {FlatList, ListRenderItem, View, ImageBackground} from "react-native";
import {Button, Card, Section, ViewRow} from "../../../../components";
import Video from "react-native-video";
import Image from "../../shared/Image";
import CardSkeletonPlaceholder from "../../shared/CardSkeletonPlaceholder/CardSkeletonPlaceholder";
import Text from "../../shared/Text/Text";
import {styles} from "./styles";
import ProgressBar from "../../shared/ProgressBar/ProgressBar";
import {Spacing, Typography} from "../../../../styles";
import {getWidth, scale} from "../../../../styles/dimensions";
import ReadTextMore from "../../shared/ReadTextMore";

interface CampainItemProps {
  item: any;
  isLoading: boolean;
  index: number;
}

interface CampainListProps {
  data: any[];
  isLoading: boolean;
}

interface PairRowsItemsProps extends CampainItemProps {
  data: any;
}

const _renderEmptyCard = () => {
  return (
    <>
      <View style={styles.sadakatCardStyle}></View>
      <Text
        style={{marginTop: Spacing.S4, textAlign: "center"}}
        fontSize="FS14"
        fontFamily="MEDIUM"
        color="BLACK">
        {""}
      </Text>
    </>
  );
};

const _renderSadakatItem: React.FC<PairRowsItemsProps> = ({
  data,
  index,
  isLoading,
}) => {
  if (index % 2 !== 0) {
    return null;
  }
  const item = data[index];
  const nextItem = data[index + 1];

  return (
    <View
      key={`key+${index}+${index + 1}`}
      style={{
        height: 130,
        justifyContent: "space-between",
        marginStart: index == 0 ? Spacing.S16 : 0,
        marginEnd: nextItem ? scale(56) : 0,
      }}>
      {[item, nextItem].map((item, i) => {
        if (!item) {
          return _renderEmptyCard();
        }
        return (
          <>
            <Card
              key={`importantFundsItem_${index}`}
              onPress={() => {
                console.warn(index + i);
              }}
              style={[styles.sadakatCardStyle]}>
              {isLoading ? (
                <CardSkeletonPlaceholder width={"100%"} height={"100%"} />
              ) : (
                <ViewRow style={{paddingTop: 0}}>
                  <View
                    style={{
                      height: "100%",
                      width: getWidth(60),
                      borderRadius: 8,
                      backgroundColor: "red",
                    }}>
                    <Image
                      resizeMode="cover"
                      style={styles.sadakatImage}
                      source={require("../../../../assets/images/logo.png")}
                    />
                  </View>
                  <Text
                    style={{
                      marginStart: Spacing.S16,
                    }}
                    fontSize="FS14"
                    fontFamily="BOLD"
                    color="WHITE">
                    {"OMAR omar"}
                  </Text>
                </ViewRow>
              )}
            </Card>
          </>
        );
      })}
    </View>
  );
};

export const SadakatSection: React.FC<CampainListProps> = ({
  data,
  isLoading,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={{paddingHorizontal: Spacing.S16}}>
        <Text fontFamily="BOLD" fontSize="FS24" color="WHITE">
          الصدقات
        </Text>
        <Text
          style={{marginVertical: Spacing.S16}}
          fontFamily="BOLD"
          fontSize="FS14"
          color="WHITE">
          {" "}
          يستمر ثواب الصدقة بدوام الانتفاع بها حتى بعد انقطاع عمل المتصدق. ازرع
          خيرًا يستمر
        </Text>
      </View>

      <Section
        key={`campain_section_key`}
        data={data}
        horizontal={true}
        style={{marginTop: Spacing.S16}}
        renderItem={({item, index}) => (
          <_renderSadakatItem
            data={data}
            item={item}
            isLoading={isLoading}
            index={index}
          />
        )}
      />
      <ViewRow style={styles.bottomSectionContainer}>
        <Button
          style={{padding: 10}}
          text=" مزيد من الصدقات"
          textStyle={{
            fontFamily: "BOLD",
            fontSize: "FS12",
            color: "WHITE",
          }}
        />
      </ViewRow>
    </View>
  );
};
