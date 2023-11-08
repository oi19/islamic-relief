import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {MainAppStackTypes} from "./navigation-types";
import TabButtonsStack from "./tab-buttons-stack";
import {
  CompletePatientDetails,
  Login,
  ManuallyLocation,
  OnBoarding,
  SelectPackage,
  Splash,
} from "../screens";
import AllowLocation from "../screens/AllowLocation";

const MainStack = () => {
  const Stack = createNativeStackNavigator<MainAppStackTypes>();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: "slide_from_right"}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="AllowLocation" component={AllowLocation} />
      <Stack.Screen name="ManuallyLocation" component={ManuallyLocation} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabsBottomStack" component={TabButtonsStack} />
      <Stack.Screen name="SelectPackage" component={SelectPackage} />
      <Stack.Screen
        name="CompletePatientDetails"
        component={CompletePatientDetails}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
