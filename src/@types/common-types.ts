import {IconsName} from "../assets/svgs";
import {MainNavigationKeys} from "../navigation/navigation-types";
import {User} from "./user";

export type TabOptionType = {
  id?: number;
  name?: string;
  content?: any;
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
