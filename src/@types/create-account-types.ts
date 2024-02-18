import {PermissionStatus} from ".";

export type CountryType = {
  id: number;
  is_active: PermissionStatus;
  name: string;
};

export type CityType = {
  id: number;
  is_active: PermissionStatus;
  name: string;
  country_id: number;
};

export type SpecialtiesType = {
  id: number;
  is_active: PermissionStatus;
  image: string;
  parent_id?: number;
  name: string;
  childs?: SpecialtiesType[];
};

export type DoctorTitles = {
  id: number;
  is_active: PermissionStatus;
  name: string;
};

export type AreaType = {
  city_id: number;
  id: number;
  is_active: PermissionStatus;
  name: string;
};

export type BankType = {
  id: number;
  is_active: PermissionStatus;
  name: string;
};
