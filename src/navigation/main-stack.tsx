import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {MainAppStackTypes} from "./navigation-types";
import TabButtonsStack from "./tab-buttons-stack";
import {
  Account,
  ChatRoom,
  CompletePatientDetails,
  Favorites,
  Help,
  Login,
  ManageCards,
  ManuallyLocation,
  OnBoarding,
  PaymentMethods,
  Points,
  ResetPassword,
  ReviewSummary,
  SelectPackage,
  Splash,
} from "../screens";
import AllowLocation from "../screens/AllowLocation";
import OTP from "../screens/OTP";

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
      <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
      <Stack.Screen name="ReviewSummary" component={ReviewSummary} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ManageCards" component={ManageCards} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="ChatRoom" component={ChatRoom} />
      <Stack.Screen name="Points" component={Points} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="OTP" component={OTP} />
    </Stack.Navigator>
  );
};

export default MainStack;
