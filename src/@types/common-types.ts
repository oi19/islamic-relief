import {ReactNode} from "react";
import {IconsName} from "../assets/svgs";
import {MainNavigationKeys} from "../navigation/navigation-types";
import {User} from "./user";
import {AppointmentStatus, AppointmentsTypes} from "./appointment-types";
import {TransactionStatus} from "./transaction-types";
import {translate} from "../helpers";

export type TabOptionType = {
  id?: number;
  name?: string;
  content?: any;
  status?: AppointmentStatus | TransactionStatus;
};

export type Tab = {
  title?: string;
  content: ReactNode;
};

export type SelectedCheckItemType = {
  id?: number;
  title?: string;
  icon: IconsName;
  name?: string;
  desc?: string;
  cost?: number;
  duration?: number;
};

export type SelectedCheckPaymentCardType = {
  id?: number;
  name?: string;
  image?: string;
  expiryDate?: string | number;
  type?: string;
  selected?: boolean | null;
  lastDigits?: string;
};

export type Review = {
  rating?: number;
  comment?: string;
  time: string | number;
  user?: User;
};

export type profileRowType = {
  name?: string;
  icon?: IconsName;
  arrowWithHint?: boolean | string;
  renderRightElement?: boolean;
  onPress?: string;
  navigateTo?: MainNavigationKeys;
};

export type FilterCondition<T> = (item: T) => boolean;

// import {ReactNode} from "react";
// import {AppointmentStatus, AppointmentsTypes} from "./appointment-types";
// import {IconsName} from "@assets/svgs";
// import {TransactionStatus} from "./transaction-types";
// import {User} from "./user";
// import {MainNavigationKeys} from "@navigation/navigation-types";
// import {translate} from "@helpers/language";

type CountAppointments = {
  service: ServicesTypesEnums;
  appointment_count: number;
};

export type HomePageTypes = {
  today_appointments: AppointmentsTypes[];
  count_appointments: CountAppointments[];
  total_month_revenue: number;
  percentage_revenue: number;
};

export type ServiceTypes = {
  is_available?: 1 | 0;
  service?: ServicesTypesEnums;
  price: number;
  duration: number;
  id: number;
  title?: string;
  name?: string;
  desc?: string;
  icon?: IconsName;
};
export type CreateServicesApi = {
  services: ServiceTypes[];
};

export type indicatorType = {
  key: number;
  scene: React.JSX.Element;
};
export type ChooseType = {
  name: string;
  id: number;
  isSelected?: boolean;
};

export enum ServicesTypesEnums {
  HomeVisit = "home_visit",
  VideoCall = "video_call",
  ClinicVisit = "clinic_visit",
}

export const ServicesName: Record<ServicesTypesEnums, string | undefined> = {
  clinic_visit: translate("Home.clinicVisit"),
  home_visit: translate("Home.homeVisit"),
  video_call: translate("Common.videoCall"),
};

export const ServicesIcon: Record<ServicesTypesEnums, IconsName> = {
  clinic_visit: "prescription",
  home_visit: "home",
  video_call: "video",
};

export enum PermissionStatus {
  TRUE = 1,
  FALSE = 0,
}
