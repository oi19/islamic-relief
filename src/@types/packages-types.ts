import {PermissionStatus} from ".";

export type PackageTypes = {
  id: number;
  is_active: PermissionStatus;
  is_free: PermissionStatus;
  order: number;
  monthly_price: number;
  annual_price: number;
  free_months: number;
  is_doctor_data: PermissionStatus;
  is_online_visit: PermissionStatus;
  online_commission: number;
  is_home_visit: PermissionStatus;
  home_commission: number;
  is_clinic_visit: PermissionStatus;
  clinic_commission: number;
  bio_words: number;
  is_gallery: PermissionStatus;
  is_video: PermissionStatus;
  is_show_first: PermissionStatus;
  is_recommended: PermissionStatus;
  is_in_ads: number;

  name: string;

  features: FeatureTypes[];
};

export type FeatureTypes = {
  id: number;
  package_id: number;
  name: string;
};

export type SubscribeBody = {
  package_id: number;
  payment_method: string;
};

export type SubscriptionTypes = PackageTypes & {
  doctor_id: number;
  expire_at: Date;
  id: number;
  is_current: PermissionStatus;
  package_id: number;
  payment_method: "free";
  price: number;
  start_at: Date;
  status: "active" | "";
};
