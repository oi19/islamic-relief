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
  return (
    <Card
      style={[
        styles.CampainSectionCard,
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
                {"omar"}
              </Text>
            ) : null}
            {item?.type === "target" || true ? (
              <View>
                <ViewRow style={styles.textSectionSubContainer}>
                  <Text fontSize="FS12" fontFamily="MEDIUM" color="WHITE">
                    omar
                  </Text>
                  <Text fontSize="FS12" fontFamily="MEDIUM" color="WHITE">
                    omar
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
                  {`الهدف الإجمالي` + `   $ ${item?.totalAmount}`}
                </Text>
              </View>
            ) : (
              <Text
                style={{marginTop: Spacing.S16}}
                fontSize="FS12"
                fontFamily="MEDIUM"
                color="WHITE">
                {
                  "omarsahdjkasdaskjdnasdklasd,adjfs,kdsfldskfdslkfdsfjskfdsjkfdsfkdnksjn"
                }
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
      data={data}
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