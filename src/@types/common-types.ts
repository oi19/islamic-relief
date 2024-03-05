import {ReactNode} from "react";
import {IconsName} from "../assets/svgs";
import {MainNavigationKeys} from "../navigation/navigation-types";
import {User} from "./user";
import {AppointmentStatus} from "./appointment-types";
import {TransactionStatus} from "./transaction-types";
import {translate} from "../helpers";
import {Doctor} from "./doctor";

export type TabOptionType = {
  id?: number;
  name?: string;
  content?: any;
  status?: AppointmentStatus | TransactionStatus;
  groupBy?: "price" | "duration";
  orderType?: "asc" | "desc";
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
  created_at: Date;
  doctor_id: number;
  id: number;
  rate: number;
  review: string;
  user_id: string;
  user_image: string;
  user_name: string;
};

export type profileRowType = {
  name?: string;
  icon?: IconsName;
  arrowWithHint?: boolean | string;
  renderRightElement?: boolean;
  onPress?: string;
  navigateTo?: MainNavigationKeys;
};

export type FilterCondition<T> = (item: T, baseItem?: T) => boolean;

export type HomePageTypes = {
  service_images: {
    home_image: string;
    clinic_image: string;
    online_image: string;
  };
  doctors: Doctor[];
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
  clinic_visit: "clinic_visit",
  home_visit: "home_visit",
  video_call: "video_call",
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
