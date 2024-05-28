import React, {useEffect} from "react";
import {FlatList, ListRenderItem, View, ImageBackground} from "react-native";
import Card from "../../shared/Card/Card";
import Section from "../../shared/Section/Section";
import Image from "../../shared/Image";
import CardSkeletonPlaceholder from "../../shared/CardSkeletonPlaceholder/CardSkeletonPlaceholder";
import {styles} from "./styles";
import {useNavigationHooks} from "../../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../../navigation/navigation-types";
import {projects} from "./data";
import {Spacing} from "../../../../styles";

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

const _renderProjectSectionItem: React.FC<PairRowsItemsProps> = ({
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
          navigate("CardList", {
            title: item?.title,
          });
        }}
        style={[
          styles.projectCard,
          {
            marginStart: index == 0 ? Spacing.S16 : 0,
          },
        ]}>
        <View style={{width: "100%", height: "100%", borderRadius: 12}}>
          {isLoading ? (
            <CardSkeletonPlaceholder width={"100%"} height={"100%"} />
          ) : (
            <Image
              resizeMode="cover"
              source={item.imageSource}
              style={styles.newsImageStyle}
            />
          )}
        </View>
      </Card>
    </>
  );
};

export const ProjectSection: React.FC<CampainListProps> = ({
  data,
  isLoading,
}) => {
  return (
    <Section
      textStyle={{
        fontFamily: "BOLD",
        fontSize: "FS18",
      }}
      title="المشاريع"
      key={`news_section_key`}
      data={projects}
      horizontal={true}
      navigateTo={"SpecialDetails"}
      params={{
        name: "Home.topRatedDoctors",
        filterType: "rating",
      }}
      renderItem={({item, index}) => (
        <_renderProjectSectionItem
          data={projects}
          item={item}
          isLoading={isLoading}
          index={index}
        />
      )}
    />
  );
};
