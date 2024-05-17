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

const _renderCampainSectionCard: React.FC<CampainItemProps> = ({
  item,
  isLoading,
  index,
}) => {
  return (
    <Card
      style={[
        styles.CampainSectionCard,
        {marginStart: index === 0 ? Spacing.S16 : 0},
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
    <>
      {/* <>
        <Card
          onPress={() => {
            console.warn(index);
          }}
          style={styles.importantFundsItemContainer}>
          {isLoading ? (
            <CardSkeletonPlaceholder width={"100%"} height={"100%"} />
          ) : (
            <>
              <Image
                resizeMode="contain"
                source={require("../../../../assets/images/logo.png")}
              />
              <Text
                style={{marginTop: Spacing.S16}}
                fontSize="FS12"
                fontFamily="MEDIUM"
                color="BLACK">
                {"omarsahdjkas"}
              </Text>
            </>
          )}
        </Card>
        {nextItem && (
          <Card
            onPress={() => {
              console.warn(nextItem);
            }}
            style={styles.importantFundsItemContainer}>
            {isLoading ? (
              <CardSkeletonPlaceholder width={"100%"} height={"100%"} />
            ) : (
              <>
                <Image
                  resizeMode="contain"
                  source={require("../../../../assets/images/logo.png")}
                />
                <Text
                  style={{marginTop: Spacing.S16}}
                  fontSize="FS12"
                  fontFamily="MEDIUM"
                  color="BLACK">
                  {"omarsahdjkas"}
                </Text>
              </>
            )}
          </Card>
        )}
      </> */}
      <View
        key={`key+${index}+${index + 1}`}
        style={{
          width: getWidth(106),
          height: 254,
          justifyContent: "space-between",
          marginStart: index == 0 ? Spacing.S16 : 0,
        }}>
        {[item, nextItem].map((item, i) => {
          if (!item) {
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
          }
          return (
            <>
              <Card
                key={`importantFundsItem_${index}`}
                onPress={() => {
                  console.warn(index + i);
                }}
                style={[styles.importantFundsItemContainer]}>
                {false ? (
                  <CardSkeletonPlaceholder width={"100%"} height={"100%"} />
                ) : (
                  <>
                    <ImageBackground
                      style={{width: "100%", height: "100%"}}
                      source={require("../../../../assets/images/logo.png")}
                    />
                  </>
                )}
              </Card>
              <Text
                style={{marginTop: Spacing.S4, textAlign: "center"}}
                fontSize="FS14"
                fontFamily="MEDIUM"
                color="BLACK">
                {"omarsahdjkas"}
              </Text>
            </>
          );
        })}
      </View>
    </>
  );
};

export const ImportantFundsSections: React.FC<CampainListProps> = ({
  data,
  isLoading,
}) => {
  return (
    <Section
      textStyle={{
        fontFamily: "BOLD",
        fontSize: "FS18",
      }}
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
      // scrollEnabled={fals}
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
        {isLoading ? null : (
          <>
            <View style={{width: "100%", height: 87, borderRadius: 12}}>
              <Image
                resizeMode="cover"
                source={require("../../../../assets/images/logo.png")}
                style={styles.newsImageStyle}
              />
            </View>

            <ReadTextMore
              textStyle={{
                flexWrap: "wrap",
                fontFamily: "MEDIUM",
              }}
              text="hdfjksfalfkasdklfmasdklfmaslFDJKSFNDSJKFSdsfjksdfdsDFKJSDKFJ"
            />
          </>
        )}
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

const _renderSadakatItem: React.FC<PairRowsItemsProps> = ({
  data,
  index,
  isLoading,
}) => {
  if (index % 2 == 0) {
    return null;
  }
  const lastItem = index === data.length - 1;
  const item = data[index];
  const nextItem = data[index + 1];

  return (
    <View
      key={`key+${index}+${index + 1}`}
      style={{
        height: 130,
        justifyContent: "space-between",
        marginStart: index == 1 ? Spacing.S8 : 0,
        marginEnd: nextItem ? scale(56) : 0,
      }}>
      {[item, nextItem].map((item, i) => {
        if (!item) {
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
        }
        return (
          <>
            <Card
              key={`importantFundsItem_${index}`}
              onPress={() => {
                console.warn(index + i);
              }}
              style={[styles.sadakatCardStyle]}>
              {false ? (
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
  function getHieght(
    arg0: number,
  ): import("react-native").DimensionValue | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <View
      style={{
        height: 375,
        backgroundColor: "#A59852",
        paddingTop: scale(24),
      }}>
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
      <ViewRow
        style={{
          paddingTop: 0,
          backgroundColor: "#736930",
          height: 40,
          position: "absolute",
          bottom: 0,
          justifyContent: "flex-end",
          alignItems: "center",
        }}>
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
