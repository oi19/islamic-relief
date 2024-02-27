export type ClinicType = {
  id?: number;
  doctor_id?: number;
  image?: string;
  name?: string;
  price?: number;
  duration?: number;
  certificates: CertificatesTypes[];
  images?: [];
  schedule?: [];
  address?: string;
  video?: string;
  district_id?: number;
  city_id?: number;
  city_name?: string;
  country_id: number;
  country_name?: string;
  district_name?: string;
};

export type ClinicRegisterTypes = {
  clinicName: string;
  address: string;
  // images: Array<string>;
  certificates: Array<string>;
  video: string;
  district_id: number;
};

export type CertificatesTypes = {
  id?: number;
  is_certificate?: number;
  name?: string;
  extension?: string;
  size?: string;
  path?: string;
  clinic_id?: number;
};

export type ScheduleTypes = {
  id?: number;
  day: string;
  name: string;
  from?: string;
  to?: string;
  isSelected?: boolean;
  day_index: number;
};

export type ScheduleRegisterTypes = {
  day: string;
  id?: number;
  from?: string;
  to?: string;
};

export type TimeCreateOrUpdateScheduleTypes = {
  clinic_id?: number;
  times: ScheduleRegisterTypes[];
};
