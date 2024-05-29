import React, {useEffect} from "react";
import {FlatList, ListRenderItem, View, ImageBackground} from "react-native";
import Card from "../../shared/Card/Card";
import ViewRow from "../../shared/ViewRow/ViewRow";
import Section from "../../shared/Section/Section";
import Button from "../../shared/Button/Button";
import Image from "../../shared/Image";
import CardSkeletonPlaceholder from "../../shared/CardSkeletonPlaceholder/CardSkeletonPlaceholder";
import Text from "../../shared/Text/Text";
import {styles} from "./styles";
import ProgressBar from "../../shared/ProgressBar/ProgressBar";
import {Spacing, Typography} from "../../../../styles";
import {getWidth, scale} from "../../../../styles/dimensions";
import ReadTextMore from "../../shared/ReadTextMore";
import {sadakatList} from "./data";
import {useNavigationHooks} from "../../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../../navigation/navigation-types";

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
  const {goBack, navigate, push} =
    useNavigationHooks<MainNavigationAllScreensTypes>();
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
                navigate("Payment", {
                  title: item.title,
                  regularType: "inDirect",
                  isFixed: false,
                });
                // console.warn(index + i);
              }}
              style={[styles.sadakatCardStyle]}>
              {isLoading ? (
                <CardSkeletonPlaceholder width={"100%"} height={"100%"} />
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 0,
                    width: "100%",
                  }}>
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
                      textAlign: "center",
                    }}
                    fontSize="FS14"
                    fontFamily="BOLD"
                    color="WHITE">
                    {item?.title}
                  </Text>
                </View>
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
        data={sadakatList}
        horizontal={true}
        style={{marginTop: Spacing.S16}}
        renderItem={({item, index}) => (
          <_renderSadakatItem
            data={sadakatList}
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
