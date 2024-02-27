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

function TabBottomComponent({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  //   const token = useToken();

  return (
    // <View style={styles.tabsContainer}>
    <DropShadow
      style={[styles.tabsContainer, {transform: [{scaleX: isRTL() ? -1 : 1}]}]}>
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

          if (index === 2) {
            const isFocusedColors = isFocused
              ? ["#FFAC5F", "#FF4D3C"]
              : ["#C2C2C2", "#C2C2C2"];
            return (
              <View
                style={[
                  styles.middleBtnContainer,
                  {
                    transform: [{scaleX: isRTL() ? -1 : 1}],
                  },
                ]}
                key={`${index}--${route.key}`}>
                {/* <Svg
                  width={getWidth(126)}
                  height={getHeight(91)}
                  // preserveAspectRatio="xMinYMin slice"
                  viewBox="0 0 126 95"
                  fill={Colors.WHITE}>
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M125 0.531893C116.974 -1.14676 101.947 0.532008 99.3852 14.6326C99.3852 14.6326 92.7254 36.3013 60.9631 36.3013C29.2008 36.3013 23.5656 14.6326 23.5656 14.6326C18.9549 5.07851 13.5246 -1.88539 0 0.531893V95H125V0.531893Z"
                  />
                </Svg> */}
                <Svg
                  width={getWidth(126)}
                  height={getHeight(91)}
                  viewBox="0 0 126 95"
                  fill={Colors.WHITE}>
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill={Colors.WHITE}
                    d="M63 55C87.8528 55 108 34.8528 108 10C108 6.56306 107.615 3.21611 115.885 0H126V95H0V0H10.1151C18.3853 3.21611 18 6.56306 18 10C18 34.8528 38.1472 55 63 55Z"
                  />
                </Svg>
                <TouchableOpacity
                  activeOpacity={1}
                  accessibilityState={isFocused ? {selected: true} : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  key={index.toString() + "sds"}
                  onPress={onPress}
                  style={[styles.middleIconContainer]}>
                  <LinearGradient
                    style={styles.middleIconStyle}
                    colors={isFocusedColors}
                    start={{x: 1, y: 0}}
                    end={{x: 0, y: 1}}>
                    <Svgs
                      name={route.params.icon}
                      width={36}
                      height={36}
                      color={isFocused ? Colors.WHITE : Colors.WHITE}
                    />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            );
          }

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

    // </View>
  );
}

function Item({route, isFocused, index, onPress, newPosition}: any) {
  let _onPress = () => {
    onPress();
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      key={route.key}
      onPress={_onPress}
      style={[
        styles.buttonItem,
        {
          right: newPosition,
          borderTopRightRadius: index === 4 ? scale(25) : 0,
          borderTopLeftRadius: index === 0 ? scale(25) : 0,
        },
      ]}>
      <Svgs
        name={route.params.icon}
        color={isFocused ? Colors.PRIMARY : Colors.GRAY_C2C2C2}
        width={scale(27)}
        height={scale(27)}
      />
    </TouchableOpacity>
  );
}

export {TabBottomComponent};
