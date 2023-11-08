import {Doctor} from "../@types";
import {specialType} from "../@types/special-types";
import {IconsName} from "../assets/svgs";

export type MainNavigationTypes =
  //   | HomeStackTypes
  MainAppStackTypes | TabsBottomStack | HomeStackTypes;
//   | TabButtonStackTypes
//   | MoreStackTypes
//   | AdvisingStackTypes
//   | CoursesStackTypes;

export type MainAppStackTypes = {
  Splash: undefined;
  TabsBottomStack: undefined;
  OnBoarding: undefined;
  AllowLocation: undefined;
  ManuallyLocation: undefined;
  SelectPackage: undefined;
  CompletePatientDetails: undefined;
  Login: {navigateTo: MainNavigationAllScreensTypes | undefined};
};

export type HomeStackTypes = {
  Home: undefined;
  Search: undefined;
  SpecialDetails: {item: specialType};
  DoctorProfile: {item: Doctor};
};

export type TabsBottomStack = {
  HomeStack: {icon: IconsName; text: string};
  Prescription: {icon: IconsName; text: string};
  Chat: {icon: IconsName; text: string};
  Profile: {icon: IconsName; text: string};
};

export type MainNavigationAllScreensTypes = MainAppStackTypes &
  TabsBottomStack &
  HomeStackTypes;

export type MainNavigationKeys = keyof (TabsBottomStack & MainAppStackTypes);
