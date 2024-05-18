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

const renderCardImage = (isLoading: boolean) => {
  return (
    <View style={{width: "100%", height: 87, borderRadius: 12}}>
      {isLoading ? (
        <CardSkeletonPlaceholder width={"100%"} height={"100%"} />
      ) : (
        <Image
          resizeMode="cover"
          source={require("../../../../assets/images/logo.png")}
          style={styles.newsImageStyle}
        />
      )}
    </View>
  );
};

const _renderNewsItem: React.FC<PairRowsItemsProps> = ({
  item,
  data,
  isLoading,
  index,
}) => {
  return (
    <>
      <Card
        style={[
          styles.newsCardStyle,
          {marginStart: index == 0 ? Spacing.S16 : 0},
        ]}>
        <>
          {renderCardImage(isLoading)}
          {isLoading == false ? (
            <ReadTextMore
              textStyle={{
                flexWrap: "wrap",
                fontFamily: "MEDIUM",
              }}
              text="hdfjksfalfkasdklfmasdklfmaslFDJKSFNDSJKFSdsfjksdfdsDFKJSDKFJ"
            />
          ) : null}
        </>
      </Card>
    </>
  );
};

export const NewsSection: React.FC<CampainListProps> = ({data, isLoading}) => {
  return (
    <Section
      textStyle={{
        fontFamily: "BOLD",
        fontSize: "FS18",
      }}
      title="الاخبار"
      key={`news_section_key`}
      data={data}
      horizontal={true}
      navigateTo={"SpecialDetails"}
      params={{
        name: "Home.topRatedDoctors",
        filterType: "rating",
      }}
      renderItem={({item, index}) => (
        <_renderNewsItem
          data={data}
          item={item}
          isLoading={isLoading}
          index={index}
        />
      )}
    />
  );
};
