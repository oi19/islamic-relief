import {IconsName} from "../assets/svgs";

export type User = {
  photo?: string;
  name?: string;
};
export interface CityTypes {
  id: number;
  name: string;
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
}
