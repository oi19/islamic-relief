import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {MainAppStackTypes} from "./navigation-types";
import TabButtonsStack from "./tab-buttons-stack";
import {
  Account,
  ChangePassword,
  ChatRoom,
  CompletePatientDetails,
  ConfirmOtp,
  Favorites,
  ForgetPassword,
  Help,
  ManageCards,
  ManuallyLocation,
  OnBoarding,
  PaymentMethods,
  Points,
  ResetPassword,
  ReviewSummary,
  SelectPackage,
  ZoomRoom,
} from "../screens";
import Splash from "../presentaion/screens/Splash/Splash";
import Login from "../presentaion/screens/Login/Login";
import AllowLocation from "../screens/AllowLocation";
import SignUp from "../presentaion/screens/SignUp/SignUp";
import OTP from "../screens/OTP";
import {useToken} from "../hooks";
import {useAppSelector} from "../redux";

const MainStack = () => {
  const Stack = createNativeStackNavigator<MainAppStackTypes>();

  const {email, mobile} = useAppSelector(state => state.userReducer.profile);

  const isLoggin = useToken();

  const isValid = isLoggin && email && mobile;

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: "slide_from_right"}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="AllowLocation" component={AllowLocation} />
      <Stack.Screen name="ManuallyLocation" component={ManuallyLocation} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />

      <Stack.Screen name="TabsBottomStack" component={TabButtonsStack} />
      <Stack.Screen name="Account" component={Account} />

      {/* {isValid ? (
        <Stack.Screen name="TabsBottomStack" component={TabButtonsStack} />
      ) : (
        <Stack.Screen name="Account" component={Account} />
      )} */}
      <Stack.Screen name="SelectPackage" component={SelectPackage} />
      <Stack.Screen
        name="CompletePatientDetails"
        component={CompletePatientDetails}
      />
      <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
      <Stack.Screen name="ReviewSummary" component={ReviewSummary} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ManageCards" component={ManageCards} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="ChatRoom" component={ChatRoom} />
      <Stack.Screen name="Points" component={Points} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="OTP" component={OTP} />

      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
      <Stack.Screen name="ZoomRoom" component={ZoomRoom} />
    </Stack.Navigator>
  );
};

export default MainStack;
