import React, {useEffect} from "react";
import {FlatList, ListRenderItem, View, ImageBackground} from "react-native";
import {Card, Section, ViewRow} from "../../../../components";
import Video from "react-native-video";
import Image from "../../shared/Image";
import CardSkeletonPlaceholder from "../../shared/CardSkeletonPlaceholder/CardSkeletonPlaceholder";
import Text from "../../shared/Text/Text";
import {styles} from "./styles";
import ProgressBar from "../../shared/ProgressBar/ProgressBar";

interface CampainItemProps {
  data: any;
  isLoading: boolean;
  index: number;
  type: "target" | "open";
  backgroundType: "video" | "image";
}

export const CampainSectionCard: React.FC<CampainItemProps> = ({
  data,
  isLoading,
  index,
  type,
  backgroundType,
  ...props
}) => {
  return (
    <>
      {isLoading ? null : (
        // <CardSkeletonPlaceholder/>
        <>
          <Card style={styles.CampainSectionCard}>
            {backgroundType === "image" ? (
              <ImageBackground
                source={require("../../../../assets/images/logo.png")}
                style={styles.CampainSectionCardBackgroundStyle}
                resizeMode="cover"
              />
            ) : (
              <Video
                source={{uri: data.backgroundVideoUrl}} // Assuming data.backgroundVideoUrl is the video URL
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
              {type === "target" ? (
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
                      progressPercentage={50}
                      onCompletion={() => {}}
                      totalSteps={0}
                      currentStep={0}
                    />
                  </View>

                  <Text fontSize="FS12" fontFamily="MEDIUM" color="WHITE">
                    OMar
                  </Text>
                </View>
              ) : (
                <Text>{data?.description}</Text>
              )}
            </View>
          </Card>
        </>
      )}
    </>
  );
};
