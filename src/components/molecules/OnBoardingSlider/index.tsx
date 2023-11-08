import React from "react";
import {FlatList, ListRenderItem, View} from "react-native";
import {OnBoardingTypes} from "../../../@types/onboarding-types";
import {useNavigationHooks} from "../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";
import {SliderItem} from "../../organisms";
import {onBoarding} from "./data";

const OnBoardingSlider: React.FC = () => {
  const flatListRef = React.useRef<FlatList<OnBoardingTypes>>(null);
  const [currentBoard, setCurrentBoard] = React.useState<number>(0);
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();

  const handleScroll = (event: any) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    console.log("ggggggggg", index);

    setCurrentBoard(index);
  };

  const handleNext = (sliderNumber: number) => {
    // Move to the next question
    if (sliderNumber < onBoarding.length - 1) {
      // Automatically scroll to the next question
      const nextIndex = sliderNumber + 1;

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setCurrentBoard(nextIndex);
    } else {
      navigate("AllowLocation");
    }
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
        handleNext={handleNext}
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
        pagingEnabled
        scrollEnabled={false}
      />
    </View>
  );
};

export default OnBoardingSlider;
