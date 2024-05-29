import {
  AppointmentsTypes,
  ChatType,
  FilterType,
  ServicesTypesEnums,
} from "../@types";
import {ApisTypes} from "../api/api-types";
import {IconsName} from "../assets/svgs";

export type MainNavigationTypes =
  | MainAppStackTypes
  | TabsBottomStack
  | HomeStackTypes
  | MyActivityStackTypes
  | ChatStackTypes
  | MyAppointmentStackTypes;

export type MainAppStackTypes = {
  Splash: undefined;
  TabsBottomStack: {screen?: string};
  OnBoarding: undefined;
  AllowLocation: undefined;
  ManuallyLocation: undefined;
  SelectPackage: {
    appointment: {
      time: string;
      date: string;
    };
  };
  CompletePatientDetails: undefined;
  Login: {navigateTo?: MainNavigationKeys};
  SignUp: undefined;
  PaymentMethods: undefined;
  ReviewSummary: undefined;
  ManageCards: undefined;
  // Settings: undefined;
  ResetPassword: {
    passwordActionIndicator: keyof ApisTypes<
      "resetPassword" | "changePassword"
    >;
  };
  ZoomRoom: {zoomUrl?: any};
  Favorites: undefined;
  Points: undefined;
  Help: undefined;
  Account: undefined;
  // OTP: {
  //   onCompletionCallback: (data: any) => void;
  //   onResendCallback: () => void;
  //   loadingApi: keyof ApisTypes;
  //   resendLoadingApi: keyof ApisTypes;
  // };
  OTP: {
    navigateTo: MainNavigationAllScreensTypes;
  };

  ChangePassword: {
    type?: "reset" | "update";
  };
  MyReciepts: undefined;
  Support: undefined;
  Language: undefined;
  About: undefined;
  RecieptDetail: {id: number};
  ChangeMobileNumber: undefined;
  ChangeEmail: undefined;
  ChangeLang: undefined;
  ConfirmOtp: undefined;
  AddPaymentCard: undefined;
  ForgetPassword: undefined;
  Payment: {
    title: string;
    isFixed: boolean;
    regularType?: "direct" | "inDirect" | "none";
    regularTypeName?: "once" | "daily" | "weekly" | "monthly";
  };
  CardList: {
    title: string;
  };
  ItemDetail: {
    title: string;
    itemID: number | string;
    isCard?: boolean;
    isFixed?: boolean;
    hasPorgress?: boolean;
    buttonTitle?: string;
    isNews?: boolean;
    fixedValue?: string;
  };
  CongratsScreen: {
    isShowSuccessSign: boolean;
    title: string;
    subTitle: string;
    isDestructiveButton: boolean;
    buttonTitle: string;
    onCompletionHandler: () => void;
  };
  Settings: undefined;
  PersonalInfo: undefined;
  ChatRoom: {chatData?: ChatType};
};

export type MyAppointmentStackTypes = {
  MyAppointment: undefined;
  AppointmentDetails: {appointmentId?: number};
  RescheduleAppointment: {appointment?: AppointmentsTypes};
};

export type HomeStackTypes = {
  Home: undefined;
  Search: undefined;
  SpecialDetails: {
    name: string;
    id?: number;
    filterType: FilterType;
    servicesType?: ServicesTypesEnums;
  };
  DoctorProfile: {id: number};
  Profile: undefined;
  Settings: undefined;
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
  MyActivityStackTypes &
  MyAppointmentStackTypes;

export type MainNavigationKeys = keyof (TabsBottomStack &
  MainAppStackTypes &
  ChatStackTypes &
  HomeStackTypes &
  MyActivityStackTypes &
  MyAppointmentStackTypes);
