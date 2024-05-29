import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {MainAppStackTypes} from "./navigation-types";
import TabButtonsStack from "./tab-buttons-stack";
import {
  Account,
  ChatRoom,
  CompletePatientDetails,
  ConfirmOtp,
  Favorites,
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
import ForgetPassword from "../presentaion/screens/ForgetPassword/ForgetPassword";
import ChangePassword from "../presentaion/screens/ChangePassword/ChangePassword";
import CongratsScreen from "../presentaion/screens/CongratsScreen/CongratsScreen";
import AllowLocation from "../screens/AllowLocation";
import SignUp from "../presentaion/screens/SignUp/SignUp";
import OTP from "../presentaion/screens/OTP/OTP";
import {useToken} from "../hooks";
import {useAppSelector} from "../redux";
import Settings from "../presentaion/screens/Settings";
import PersonalInfo from "../presentaion/screens/PersonalInfo/PersonalInfo";
import ChangeMobileNumber from "../presentaion/screens/ChangeMobileNumber/ChangeMobileNumber";
import ChangeEmail from "../presentaion/screens/ChangeEmail/ChangeEmail";
import MyReciepts from "../presentaion/screens/MyReciepts/MyReciepts";
import RecieptDetail from "../presentaion/screens/RecieptDetail/RecieptDetail";
import Support from "../presentaion/screens/Support/Support";
import About from "../presentaion/screens/About/About";
import Language from "../presentaion/screens/Language/Language";
import ItemDetail from "../presentaion/screens/ItemDetails/ItemDetails";
import CardList from "../presentaion/screens/CardList/CardList";
import Payment from "../presentaion/screens/Payment/Payment";
import More from "../presentaion/screens/More/More";

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
      <Stack.Screen name="CongratsScreen" component={CongratsScreen} />

      <Stack.Screen name="TabsBottomStack" component={TabButtonsStack} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="MyReciepts" component={MyReciepts} />
      <Stack.Screen name="RecieptDetail" component={RecieptDetail} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
      <Stack.Screen name="CardList" component={CardList} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="More" component={More} />

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
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
      {/* <Stack.Screen name="AddPaymentCard" component={AddPaymentCard} /> */}
      <Stack.Screen name="ChangeMobileNumber" component={ChangeMobileNumber} />
      <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
      <Stack.Screen name="ZoomRoom" component={ZoomRoom} />
    </Stack.Navigator>
  );
};

export default MainStack;
