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
import {TouchableOpacity} from "react-native-gesture-handler";
import {Svgs} from "../../../../assets";
import {getWidth} from "../../../../styles/dimensions";
import navigation from "../../../../navigation";

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
                onPress(item);
              }}
              style={[styles.importantFundsItemContainer]}>
              {isLoading ? (
                <CardSkeletonPlaceholder width={"100%"} height={"100%"} />
              ) : (
                <TouchableOpacity
                  style={{
                    padding: Spacing.S16,
                    width: getWidth(162),
                    height: 96,
                    justifyContent: "center",
                    backgroundColor: "#EBFFFD",
                  }}
                  // source={require("../../../../assets/images/logo.png")}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <View>
                      <Svgs name={item.iconName} />
                      <Text
                        style={{marginTop: Spacing.S16}}
                        fontFamily="MEDIUM"
                        fontSize="FS12">
                        {item.title}
                      </Text>
                    </View>
                    <Svgs name="sideArrow" circleBackground="black" />
                  </View>
                </TouchableOpacity>
              )}
            </Card>
          </>
        );
      })}
    </View>
  );
};

export const RegularSection: React.FC<CampainListProps> = ({isLoading}) => {
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();
  const onPress = (item: any) => {
    navigate("Payment", {
      title: item?.title,
      isFixed: false,
      regularType: "direct",
      iconName: item?.iconName,
    });
  };
  return (
    <Section
      scrollEnabled={false}
      title="التبرعات الدورية"
      key={`campain_section_key`}
      data={fundsList}
      horizontal={true}
      // navigateTo={"More"}
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
