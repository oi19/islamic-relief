import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import React from "react";
import {Svgs} from "../../assets";
import {ViewRow} from "../../components/atoms";
// import {useToken} from "../../hooks";
import {Colors} from "../../styles";
import {getHeight, getWidth, scale} from "../../styles/dimensions";
import styles from "./styles";
import Svg, {Path} from "react-native-svg";
import {TouchableOpacity, View} from "react-native";
import {isRTL} from "../../locals/i18n-config";
import LinearGradient from "react-native-linear-gradient";
import DropShadow from "react-native-drop-shadow";
import Text from "../../presentaion/components/shared/Text/Text";

function TabBottomComponent({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <DropShadow
      style={[
        styles.tabsContainer,
        // { transform: [{ scaleX: isRTL() ? -1 : 1 }] }
      ]}>
      <ViewRow style={styles.routesContainer}>
        {state.routes.map((route: any, index: number) => {
          const newPosition: number | null =
            index === 1 ? 15 : index === 3 ? -15 : null;

          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : "route.name";
          const isFocused = state.index === index;
          const onPress = () => {
            if (route.state) {
              if (route.state.routes.length) {
                navigation.navigate(route.state.routes[0].name);
              }
            } else {
              navigation.navigate(route.name);
            }
          };

          return (
            <Item
              key={index.toString() + "sds"}
              route={route}
              isFocused={isFocused}
              label={label}
              onPress={onPress}
              index={index}
              newPosition={newPosition}
            />
          );
        })}
      </ViewRow>
    </DropShadow>
  );
}

const bottomNavigationScreenNameHandler = (screenName: string) => {
  switch (screenName) {
    case "HomeStack":
      return "الرئيسية";
    case "Profile":
      return "الملف الشخصي";
    case "CharityBoX":
      return "صندوق التبرع";
    case "ZakatCalculator":
      return "حاسبة الزكاة";
    case "Sectors":
      return "قطاعتنا";
  }
};

function Item({route, isFocused, onPress}: any) {
  let _onPress = () => {
    onPress();
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      key={route.key}
      onPress={_onPress}
      style={[styles.buttonItem]}>
      <Svgs
        name={route.params.icon}
        strokeWidth={2}
        color={isFocused ? Colors.PRIMARY : Colors.GRAY_C2C2C2}
        width={scale(27)}
        height={scale(27)}
      />
      <Text
        fontFamily="MEDIUM"
        fontSize="FS10"
        // color={isFocused ? Colors.PRIMARY : Colors.GRAY_C2C2C2}
        style={{
          color: isFocused ? Colors.PRIMARY : Colors.GRAY_C2C2C2,
        }}>
        {bottomNavigationScreenNameHandler(route.name)}{" "}
      </Text>
    </TouchableOpacity>
  );
}

export {TabBottomComponent};
