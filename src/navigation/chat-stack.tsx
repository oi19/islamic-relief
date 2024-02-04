import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ChatStackTypes} from "./navigation-types";
import {Chat} from "../screens";

const ChatStack = () => {
  const Stack = createNativeStackNavigator<ChatStackTypes>();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Chat">
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default ChatStack;
