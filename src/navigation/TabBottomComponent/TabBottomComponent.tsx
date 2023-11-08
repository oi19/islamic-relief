import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import React from "react";
import {View, TouchableOpacity} from "react-native";
import {Svgs} from "../../assets";
import {Text} from "../../components/atoms";
// import {useToken} from "../../hooks";
import {Colors} from "../../styles";
import {getHeight, scale} from "../../styles/dimensions";
import styles from "./styles";

function TabBottomComponent({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  //   const token = useToken();

  return (
    <View style={styles.tabsContainer}>
      {state.routes.map((route: any, index: number) => {
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
          />
        );
      })}
    </View>
  );
}

function Item({route, isFocused, onPress}: any) {
  let _onPress = () => {
    onPress();
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      key={route.key}
      onPress={_onPress}
      style={styles.buttonItem}>
      <Svgs
        name={route.params.icon}
        color={isFocused ? Colors.PRIMARY : Colors.GRAY_A7A7A7}
        width={scale(27)}
        height={scale(27)}
      />
      {isFocused && (
        <Text
          fontSize="FS11"
          color={isFocused ? "PRIMARY" : "GRAY_A7A7A7"}
          style={{marginTop: getHeight(5)}}>
          {route.params.text}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export {TabBottomComponent};
