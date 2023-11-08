import {User} from "./user";

export type TabOptionType = {
  id?: number;
  name: string;
  content?: any;
};

export type Review = {
  rating?: number;
  comment?: string;
  time: string | number;
  user?: User;
};
