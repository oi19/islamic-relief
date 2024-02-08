import { ReactNode } from "react";
import {IconsName} from "../assets/svgs";
import {MainNavigationKeys} from "../navigation/navigation-types";
import {User} from "./user";

export type TabOptionType = {
  id?: number;
  name?: string;
  content?: any;
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
  lastDigits?:string
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
