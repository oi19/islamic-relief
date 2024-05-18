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
      <View style={styles.importantFundsItemContainer}></View>
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

const _renderImportantFundsItem: React.FC<PairRowsItemsProps> = ({
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
      style={[
        styles.fundsItemContainer,
        {
          // marginStart: index == 0 ? Spacing.S16 : 0,
        },
      ]}>
      {[item, nextItem].map((item, i) => {
        if (!item) return _renderEmptyCard();
        return (
          <>
            <Card
              key={`importantFundsItem_${index}`}
              onPress={() => {
                console.warn(index + i);
              }}
              style={[styles.importantFundsItemContainer]}>
              {isLoading ? (
                <CardSkeletonPlaceholder width={"100%"} height={"100%"} />
              ) : (
                <ImageBackground
                  style={{width: "100%", height: "100%"}}
                  source={require("../../../../assets/images/logo.png")}
                />
              )}
            </Card>
            <View>
              {isLoading == false ? (
                <Text
                  style={{marginTop: Spacing.S4, textAlign: "center"}}
                  fontSize="FS14"
                  fontFamily="MEDIUM"
                  color="BLACK">
                  {"omarsahdjkas"}
                </Text>
              ) : null}
            </View>
          </>
        );
      })}
    </View>
  );
};

export const ImportantFundsSections: React.FC<CampainListProps> = ({
  data,
  isLoading,
}) => {
  return (
    <Section
      scrollEnabled={false}
      title="تبرعات تهمك"
      key={`campain_section_key`}
      data={data}
      horizontal={true}
      navigateTo={"SpecialDetails"}
      params={{
        name: "Home.topRatedDoctors",
        filterType: "rating",
      }}
      textStyle={{
        fontFamily: "BOLD",
        fontSize: "FS18",
      }}
      renderItem={({item, index}) => (
        <_renderImportantFundsItem
          data={data}
          item={item}
          isLoading={isLoading}
          index={index}
        />
      )}
    />
  );
};
