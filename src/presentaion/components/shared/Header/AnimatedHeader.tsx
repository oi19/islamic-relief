/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {StyleSheet, View} from "react-native";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import {useNavigationHooks} from "../../../../hooks";
import {MainAppStackTypes} from "../../../../navigation/navigation-types";
import {getHeight} from "../../../../styles/dimensions";
import Button from "../Button/Button";
import Text from "../Text/Text";
import styles from "./styles";
import SearchBar from "../SearchBar";
import {Colors} from "../../../../styles";
import {isRTL} from "../../../../locals/i18n-config";
import {translate} from "../../../../helpers";

type AnimatedHeaderProps = {
  title?: string;
  y?: SharedValue<number>;
  placeholder?: string;
  onReset?: () => void;
  onFilter?: () => void;
  onSearch?: (text: string) => void;
  onFocus?: () => void;
  autoFocus?: boolean;
};

const AnimatedHeader = ({
  onFilter,
  onReset,
  placeholder,
  title,
  y = {value: 0},
  onSearch,
  autoFocus,
  onFocus,
}: AnimatedHeaderProps) => {
  const {goBack} = useNavigationHooks<MainAppStackTypes>();

  const TRANSLATE_Y = getHeight(80);
  const TRANSLATE_ARROW_Y = getHeight(85);

  const containerStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      y.value,
      [0, 250],
      [0, -TRANSLATE_Y],
      Extrapolate.CLAMP,
    );
    return {};
  });
  const arrowStyle1 = useAnimatedStyle(() => {
    interpolate(y.value, [0, 250], [0, TRANSLATE_ARROW_Y], Extrapolate.CLAMP);
    interpolate(y.value, [0, 150], [0, 1], Extrapolate.CLAMP);
    return {};
  });
  const arrowStyle2 = useAnimatedStyle(() => {
    interpolate(y.value, [0, 250], [0, TRANSLATE_ARROW_Y], Extrapolate.CLAMP);
    interpolate(y.value, [0, 150], [1, 0], Extrapolate.CLAMP);
    return {};
  });

  const searchBar = useAnimatedStyle(() => {
    interpolate(y.value, [0, 250], [0, 35], Extrapolate.CLAMP);
    return {};
  });
  const headerOpacity = useAnimatedStyle(() => {
    interpolate(y.value, [0, 100], [1, 0], Extrapolate.CLAMP);
    return {};
  });
  return (
    <Animated.View style={[styles.animatedHeaderContainer, containerStyle]}>
      <View style={StyleSheet.flatten([styles.headerContainer])}>
        {/* animated svg header */}
        {/* <Animated.View style={[styles.animatedHeaderSvg, headerOpacity]}> */}
        {/* <Image
            source={Images.header}
            style={{
              width: "100%",
              height: "100%",
              transform: [{scaleX: isRTL() ? -1 : 1}],
            }}
            resizeMode="stretch"
          /> */}
        {/* <Svgs style={styles.header} name="header" /> */}
        {/* </Animated.View> */}

        <View style={styles.titleAndArrowBack}>
          {/* arrow back button container  */}
          <View style={styles.arrowBackContainer}>
            <Button
              iconStyle={{
                rotate: isRTL() ? "right" : "left",
                color: Colors.WHITE,
              }}
              containerStyle={arrowStyle2}
              onPress={goBack}
              textStyle={{color: "WHITE"}}
              iconName="arrow"
            />
          </View>

          {/* title  */}
          <Text color="WHITE" fontSize="H1" fontFamily="MEDIUM">
            {title}
          </Text>
        </View>
      </View>

      {/* saerch bar */}
      {onSearch && (
        <View style={styles.searchBarAndBackIcon}>
          <Animated.View style={[{width: 1}, searchBar]} />
          <SearchBar
            onFocus={onFocus}
            autoFocus={autoFocus}
            onSearch={onSearch}
            style={styles.searchBar}
            placeholder={placeholder || translate("Common.search")}
            onFilter={onFilter}
            onReset={onReset}
          />
        </View>
      )}
    </Animated.View>
  );
};
export {AnimatedHeader};
