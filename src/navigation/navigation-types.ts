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
  Signup: undefined;
  PaymentMethods: undefined;
  ReviewSummary: undefined;
  ManageCards: undefined;
  ResetPassword: {
    passwordActionIndicator: keyof ApisTypes<
      "resetPassword" | "changePassword"
    >;
  };

  Favorites: undefined;
  Points: undefined;
  Help: undefined;
  Account: undefined;
  OTP: {
    onCompletionCallback: (data: any) => void;
    onResendCallback: () => void;
    loadingApi: keyof ApisTypes;
    resendLoadingApi: keyof ApisTypes;
  };

  ChangePassword: undefined;
  ConfirmOtp: undefined;
  ForgetPassword: undefined;

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
