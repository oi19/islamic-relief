import React, {useEffect} from "react";
import {FlatList, ListRenderItem, View, ImageBackground} from "react-native";
import Card from "../../shared/Card/Card";
import ViewRow from "../../shared/ViewRow/ViewRow";
import Section from "../../shared/Section/Section";
import Video from "react-native-video";
import Image from "../../shared/Image";
import CardSkeletonPlaceholder from "../../shared/CardSkeletonPlaceholder/CardSkeletonPlaceholder";
import Text from "../../shared/Text/Text";
import {styles} from "./styles";
import ProgressBar from "../../shared/ProgressBar/ProgressBar";
import {Spacing, Typography} from "../../../../styles";
import {useNavigationHooks} from "../../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../../navigation/navigation-types";
import {campaginList} from "./data";

interface CampainItemProps {
  item: any;
  isLoading: boolean;
  index: number;
}

interface CampainListProps {
  data: any[];
  isLoading: boolean;
}

const _renderCampainSectionCard: React.FC<CampainItemProps> = ({
  item,
  isLoading,
  index,
}) => {
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();
  return (
    <Card
      onPress={() => {
        navigate("ItemDetail", {
          hasProgress: item?.hasProgress,
          itemID: index,
          title: item?.title,
          isFixed: true,
        });
      }}
      style={[
        styles.CampainSectionCard,
        {
          marginStart: index == 0 ? Spacing.S16 : 0,
        },
      ]}>
      {isLoading ? (
        <CardSkeletonPlaceholder width={"100%"} height={"100%"} />
      ) : (
        <>
          {item?.backgroundType === "image" || true ? (
            <ImageBackground
              source={require("../../../../assets/images/logo.png")}
              style={styles.CampainSectionCardBackgroundStyle}
              resizeMode="cover"
            />
          ) : (
            <Video
              source={{uri: item?.backgroundVideoUrl}} // Assuming data.backgroundVideoUrl is the video URL
              style={styles.CampainSectionCardBackgroundStyle}
              repeat
              muted
            />
          )}
          <View style={styles.textSectionContainer}>
            {true ? (
              <Text fontSize="FS18" fontFamily="BOLD" color="WHITE">
                {item.title}
              </Text>
            ) : null}
            {/* {item?.type === "target" || true ? ( */}
            {item?.hasProgress ? (
              <View>
                <ViewRow style={styles.textSectionSubContainer}>
                  <Text fontSize="FS12" fontFamily="MEDIUM" color="WHITE">
                    2,043,684$
                  </Text>
                  <Text fontSize="FS12" fontFamily="MEDIUM" color="WHITE">
                    30% تم التبرع بهم
                  </Text>
                </ViewRow>
                <View style={styles.progressBarContainer}>
                  <ProgressBar
                    key={`Campain_${index}`}
                    type="appLoading"
                    progressPercentage={70}
                    onCompletion={() => {}}
                    totalSteps={0}
                    currentStep={0}
                  />
                </View>

                <Text fontSize="FS12" fontFamily="MEDIUM" color="WHITE">
                  {/* {`الهدف الإجمالي` + `   $ ${item?.totalAmount}`} */}
                  {`الهدف الإجمالي $5,000,000`}
                </Text>
              </View>
            ) : (
              <Text
                style={{marginTop: Spacing.S16}}
                fontSize="FS12"
                fontFamily="MEDIUM"
                color="WHITE">
                {"هناك قلوب تنتظر النور والأمل شارك في سعادتهم"}
              </Text>
            )}
          </View>
        </>
      )}
    </Card>
  );
};

export const CampainSection: React.FC<CampainListProps> = ({
  data,
  isLoading,
}) => {
  return (
    <Section
      key={`campain_section_key`}
      data={campaginList}
      horizontal={true}
      renderItem={({item, index}) => (
        <_renderCampainSectionCard
          item={item}
          isLoading={isLoading}
          index={index}
        />
      )}
    />
  );
};
