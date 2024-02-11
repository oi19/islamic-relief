import {ChatType, Doctor} from "../@types";
import {specialType} from "../@types/special-types";
import {IconsName} from "../assets/svgs";

export type MainNavigationTypes =
  | MainAppStackTypes
  | TabsBottomStack
  | HomeStackTypes
  | MyActivityStackTypes
  | ChatStackTypes;

export type MainAppStackTypes = {
  Splash: undefined;
  TabsBottomStack: undefined;
  OnBoarding: undefined;
  AllowLocation: undefined;
  ManuallyLocation: undefined;
  SelectPackage: undefined;
  CompletePatientDetails: undefined;
  Login: {navigateTo: MainNavigationKeys | undefined};
  PaymentMethods: undefined;
  ReviewSummary: undefined;
  ManageCards: undefined;
  ResetPassword: undefined;
  Favorites: undefined;
  YourPoints: undefined;
  Help: undefined;
  Account: undefined;
  ChatRoom: {chatData?: ChatType};
};

export type HomeStackTypes = {
  Home: undefined;
  Search: undefined;
  SpecialDetails: {item: specialType};
  DoctorProfile: {item: Doctor};
};

export type MyActivityStackTypes = {
  MyActivity: undefined;
};

export type ChatStackTypes = {
  Chat: undefined;
};

export type TabsBottomStack = {
  HomeStack: {icon: IconsName; text: string};
  MyActivityStack: {icon: IconsName; text: string};
  ChatStackTypes: {icon: IconsName; text: string};
  Profile: {icon: IconsName; text: string};
  Notifications: {icon: IconsName; text: string};
};

export type MainNavigationAllScreensTypes = MainAppStackTypes &
  TabsBottomStack &
  ChatStackTypes &
  HomeStackTypes &
  MyActivityStackTypes;

export type MainNavigationKeys = keyof (TabsBottomStack &
  MainAppStackTypes &
  ChatStackTypes &
  HomeStackTypes &
  MyActivityStackTypes);
