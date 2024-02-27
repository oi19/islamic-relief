import {ClinicType} from "./clinic-types";
import {SpecialtiesType} from "./create-account-types";

export type Doctor = {
  name?: string;
  location?: string;
  rating?: string;
  reviews?: any[];
  description?: string;
  vezeeta?: number;
  mobile?: string;
  email?: string;
  image?: string;
  password?: string;
  password_confirmation?: string;
  birthday?: string;
  title_id?: number;
  specialty_id: number;
  sub_specialty_id?: number;
  experience?: number;
  medical_card?: string;
  profile_description?: string;
  bio?: string;
  bank_account?: string;
  bank_id?: number;
  desc?: string;
  gender?: number;
  id?: number;
  is_active: 0 | 1;
  is_home?: number;
  is_completed: number;
  social_id?: number;
  social_provider?: string;
  wallet?: number;
  wallet_number?: number;
  current_subscription?: any;
  clinics?: ClinicType[];
  specialty?: SpecialtiesType;
  sub_specialty?: SpecialtiesType;
  bank?: string;
  services?: [];
};

export interface DoctorRegisterTypes {
  mobile?: string;
  email?: string;
  name?: string;
  image?: string;
  password?: string;
  password_confirmation?: string;
  gender_id?: number;
  birthday?: string;

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

// "specialty" | "services" | "rating"
export enum FilterType {
  Specialty = "specialty",
  Services = "services",
  Rating = "rating",
}
