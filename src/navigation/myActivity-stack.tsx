import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MyActivityStackTypes} from "./navigation-types";
import {MyActivity} from "../screens";

const MyActivityStack = () => {
  const Stack = createNativeStackNavigator<MyActivityStackTypes>();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MyActivity">
      <Stack.Screen name="MyActivity" component={MyActivity} />
    </Stack.Navigator>
  );
};

export default MyActivityStack;
