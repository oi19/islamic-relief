import React, {useEffect} from "react";
import {FlatList, ListRenderItem, View, ImageBackground} from "react-native";
import Card from "../../shared/Card/Card";
import Section from "../../shared/Section/Section";
import CardSkeletonPlaceholder from "../../shared/CardSkeletonPlaceholder/CardSkeletonPlaceholder";
import Text from "../../shared/Text/Text";
import {styles} from "./styles";
import {Spacing, Typography} from "../../../../styles";
import {useNavigationHooks} from "../../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../../navigation/navigation-types";
import {fundsList} from "./data";

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
  onPress: Function;
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

const _renderRegularItem: React.FC<PairRowsItemsProps> = ({
  data,
  index,
  isLoading,
  onPress,
}) => {
  if (index % 2 !== 0) {
    return null;
  }

  const item = data[index];
  const nextItem = data[index + 1];
  // console.warn(data);

  return (
    <View
      key={`key+${index}+${index + 1}`}
      style={[
        styles.fundsItemContainer,
        {
          // marginStart: index == 0 ? Spacing.S8 : 0,
        },
      ]}>
      {[item, nextItem].map((item, i) => {
        if (!item) return _renderEmptyCard();
        return (
          <>
            <Card
              key={`importantFundsItem_${index}`}
              onPress={() => {
                onPress(item?.title);
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
                  {item?.title}
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
  const {navigate, goBack} =
    useNavigationHooks<MainNavigationAllScreensTypes>();
  const onPress = (title: string) => {
    navigate("ItemDetail", {
      title,
      isCard: true,
      isFixed: true,
      fixedValue: "100",
      hasProgress: false,
    });
  };
  return (
    <Section
      scrollEnabled={false}
      title="تبرعات تهمك"
      key={`campain_section_key`}
      data={fundsList}
      horizontal={true}
      navigateTo={"More"}
      params={{
        list: fundsList,
        title: "تبرعات تهمك",
      }}
      textStyle={{
        fontFamily: "BOLD",
        fontSize: "FS18",
      }}
      renderItem={({item, index}) => (
        <_renderRegularItem
          data={fundsList}
          item={item}
          isLoading={isLoading}
          index={index}
          onPress={onPress}
        />
      )}
    />
  );
};
