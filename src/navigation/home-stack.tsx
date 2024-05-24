import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeStackTypes} from "./navigation-types";
import {DoctorProfile, Search, SpecialDetails} from "../screens";
import Profile from "../presentaion/screens/Profile";
import Home from "../presentaion/screens/Home";
import Settings from "../presentaion/screens/Settings";

const HomeStack = () => {
  const Stack = createNativeStackNavigator<HomeStackTypes>();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SpecialDetails" component={SpecialDetails} />
      <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default HomeStack;
