import {IconsName} from "../assets/svgs";
import {PermissionStatus, ServicesTypesEnums} from "./common-types";

export type User = {
  name?: string;
  id?: number;
  email?: string;
  mobile?: string;
  email_verified_at?: boolean;

  bio?: string;
  birthday?: string;
  age?: number;
  image: string;
  gender?: GenderTypes | number;

  is_active?: PermissionStatus;
  country_id?: number;
  city_id?: number;
  district_id?: number;
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

export interface BookingTypes {
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

  token?: string;
}

export type LoginTypes = {
  mobile?: string;
  password?: string;
};
