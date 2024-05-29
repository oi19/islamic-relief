import React, {useEffect} from "react";
import {FlatList, ListRenderItem, View, ImageBackground} from "react-native";
import Card from "../../shared/Card/Card";
import Section from "../../shared/Section/Section";
import Image from "../../shared/Image";
import CardSkeletonPlaceholder from "../../shared/CardSkeletonPlaceholder/CardSkeletonPlaceholder";
import {styles} from "./styles";
import {Spacing, Typography} from "../../../../styles";
import ReadTextMore from "../../shared/ReadTextMore";
import {useNavigationHooks} from "../../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../../navigation/navigation-types";
import {newsList} from "./data";

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
    <View
      style={{
        width: "100%",
        height: 87,
        borderRadius: 12,
        flex: 1,
        alignSelf: "flex-start",
      }}>
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
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();

  return (
    <>
      <Card
        onPress={() => {
          navigate("ItemDetail", {
            itemID: index,
            title: item.title,
            hasProgress: false,
            isNews: true,
          });
        }}
        style={[
          styles.newsCardStyle,
          {
            marginStart: index == 0 ? Spacing.S16 : 0,
          },
        ]}>
        <>
          {renderCardImage(isLoading)}
          {isLoading == false ? (
            <View
              style={{
                width: "100%",
                // alignItems: "center",
              }}>
              <ReadTextMore
                enableReadMore={false}
                textStyle={{
                  flexWrap: "wrap",
                  fontFamily: "MEDIUM",
                  fontSize: Typography.FS12,
                }}
                text={item.desc}
              />
            </View>
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
      data={newsList}
      horizontal={true}
      navigateTo={"More"}
      params={{
        list: newsList,
        title: "الاخبار",
      }}
      renderItem={({item, index}) => (
        <_renderNewsItem
          data={newsList}
          item={item}
          isLoading={isLoading}
          index={index}
        />
      )}
    />
  );
};
