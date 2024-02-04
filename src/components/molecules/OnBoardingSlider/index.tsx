import React from "react";
import {FlatList, ListRenderItem, Platform, View} from "react-native";
import {OnBoardingTypes} from "../../../@types/onboarding-types";
import {useNavigationHooks} from "../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";
import {SliderItem} from "../../organisms";
import {onBoarding} from "./data";
import {SCREEN_WIDTH} from "../../../styles/dimensions";
import {isRTL} from "../../../locals/i18n-config";

const OnBoardingSlider: React.FC = () => {
  const flatListRef = React.useRef<FlatList<OnBoardingTypes>>(null);
  const [currentBoard, setCurrentBoard] = React.useState<number>(0);
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();

  const handleScroll = (event: any) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    console.log(" handleScroll => index", index);

    setCurrentBoard(index);
  };

  const handleNext = (sliderNumber: number) => {
    // Move to the next question

    if (sliderNumber === onBoarding.length - 1) {
      navigate("AllowLocation");
      return;
    }
    const nextIndex = sliderNumber + 1;
    flatListRef.current?.scrollToIndex({
      index: nextIndex,
      animated: true,
    });
    setCurrentBoard(nextIndex);
  };

  const _renderSliderItem: ListRenderItem<OnBoardingTypes> = ({
    item,
    index,
  }) => {
    return (
      <SliderItem
        item={item}
        startAnimation={currentBoard === index}
        index={index}
        onBoarding={onBoarding}
        handleNext={() => handleNext(index)}
      />
    );
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={onBoarding}
        keyExtractor={(item, index) => `slider-item-${index}`}
        renderItem={_renderSliderItem}
        horizontal
        onMomentumScrollEnd={handleScroll}
        // snapToAlignment="center"
        decelerationRate="fast"
        pagingEnabled
        scrollEnabled={false}
        getItemLayout={(data, index) => {
          const isRtlAndAndroid =
            isRTL() && Platform.OS === "android"
              ? data!.length - index - 1
              : index;
          return {
            length: SCREEN_WIDTH,
            offset: SCREEN_WIDTH * isRtlAndAndroid, // Adjust offset for RTL
            index,
          };
        }}
      />
    </View>
  );
};

export default OnBoardingSlider;
