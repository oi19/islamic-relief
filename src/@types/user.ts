import {IconsName} from "../assets/svgs";
import {ServicesTypesEnums} from "./common-types";

export type User = {
  photo?: string;
  name?: string;
};
export interface CityTypes {
  id: number;
  name: string;
  countryName?: string;
  code: string;
  longitude: string;
  latitude: string;
  country_id: number;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
}
export interface GenderTypes {
  id: number;
  name: string;
}

export interface ServiceType {
  photo: IconsName;
  name?: string;
  service?: ServicesTypesEnums;
}

export interface UserAccountType {
  mobile?: string;
  email?: string;
  name?: string;
  image?: string;
  password?: string;
  password_confirmation?: string;
  gender?: number;
  birthday?: string;
  city_id?: string;

  title_id?: number;
  specialty_id?: number;
  sub_specialty_id?: number;
  experience?: number;
  medical_card?: string | {name: string; type: string; uri: string};

  profile_description?: string;
  bio?: string;
  bank_account?: number;
  bank_id?: number;
  wallet_number?: number;
}

export type LoginTypes = {
  mobile?: string;
  password?: string;
};
