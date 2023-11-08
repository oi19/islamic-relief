import {Animated, Easing, View} from "react-native";
import React from "react";
import {Button, Text} from "../../atoms";
import {OnBoardingTypes} from "../../../@types";
import {Svgs} from "../../../assets";
import {styles} from "./styles";
import {getHeight, getWidth} from "../../../styles/dimensions";

type SliderItemProps = {
  item: OnBoardingTypes;
  index: number;
  onBoarding: OnBoardingTypes[];
  handleNext: (index: number) => void;
  startAnimation?: boolean;
};
const SliderItem: React.FC<SliderItemProps> = ({
  item,
  index,
  onBoarding,
  handleNext,
  startAnimation,
}) => {
  const imageSlideAnim = React.useRef(new Animated.Value(500)).current;
  //   console.log(startAnimation);

  React.useEffect(() => {
    imageSlideAnim.setValue(500);
    const animationDuration = 2000;
    Animated.timing(imageSlideAnim, {
      toValue: 0,
      duration: animationDuration,
      easing: Easing.out(Easing.exp),
      useNativeDriver: false, // Adjust to true if needed
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startAnimation]);

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <Animated.View
          style={[
            {
              transform: [{translateX: imageSlideAnim}],
            },
          ]}>
          <Svgs name={item?.photo} />
        </Animated.View>
      </View>
      <View style={styles.textContainer}>
        <Text
          color="FONT_07101A"
          fontSize="H1"
          fontFamily="BOLD"
          style={styles.baseText}>
          {item?.title}
        </Text>
        <Text
          color="FONT_07101A"
          fontFamily="REGULAR"
          fontSize="FS13"
          style={[styles.baseText, styles.subTitle]}>
          {item?.subTitle}
        </Text>
      </View>

      <View style={styles.row}>
        {onBoarding.map((boarding, itemIndex) => (
          <View
            key={`point-${itemIndex}`}
            style={index === itemIndex ? styles.selectedPoint : styles.point}
          />
        ))}
      </View>

      <View style={styles.nextStyle}>
        <Button
          type="standard"
          text="Next"
          onPress={() => handleNext(index)}
          style={styles.nextStyle}
        />
      </View>
    </View>
  );
};

export default SliderItem;
