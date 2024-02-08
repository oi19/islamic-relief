import React, {useState, useRef} from "react";
import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import {styles} from "./styles";
import { Tab } from "../../../@types";
import {Button} from "../../../components/atoms";
import {isRTL} from "../../../locals/i18n-config";
import {SCREEN_WIDTH, getWidth} from "../../../styles/dimensions";
import {Colors} from "../../../styles/index";

interface CustomTabBarProps {
  tabs?: Tab[];
}

const TabBar: React.FC<CustomTabBarProps> = ({tabs}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(
    isRTL() ? tabs!.length - 1 : 0,
  );
  const flatListRef = useRef<FlatList | null>(null);

  // Calculate Current Index Of Page
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );

    setCurrentIndex(index);
  };

  const renderItem = ({item}: {item: Tab}) => (
    <View style={styles.itemContainer}>{item?.content}</View>
  );

  // Render Header
  const renderHeaderTabBar = () => {
    return (
      <View style={styles.buttonsContainer}>
        {tabs?.map((item, index) => {
          const adjustedIndex = isRTL() ? tabs!.length - index - 1 : index;

          return (
            <Button
              onPress={() => {
                setCurrentIndex(adjustedIndex);
                flatListRef.current?.scrollToIndex({index: adjustedIndex});
              }}
              style={[
                styles.tabButton,
                {
                  width: getWidth() / tabs!.length,
                  backgroundColor:
                    adjustedIndex === currentIndex ? Colors.PRIMARY : undefined,
                },
              ]}
              key={`tab-button${adjustedIndex.toString()}`}>
              <Text
                style={[
                  styles.tabButtonText,
                  {
                    color:
                      adjustedIndex === currentIndex
                        ? Colors.WHITE
                        : Colors.GRAY_A7A7A7,
                  },
                ]}>
                {item?.title}
              </Text>
            </Button>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderHeaderTabBar()}
      <FlatList
        ref={flatListRef}
        data={tabs}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabBarContainer}
        pagingEnabled
        // scrollEnabled={false}
        onMomentumScrollEnd={handleScroll}
        getItemLayout={(data, index) => {
          const isRtl = isRTL() ? data!.length - index - 1 : index;
          return {
            length: SCREEN_WIDTH,
            offset: SCREEN_WIDTH * isRtl, // Adjust offset for RTL
            index,
          };
        }}
      />
    </View>
  );
};

export default TabBar;
