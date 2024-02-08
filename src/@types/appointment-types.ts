import {PermissionStatus, ServicesTypesEnums, User} from ".";

export type AppointmentsTypes = {
  id: number;
  user_id: number;
  clinic_id: number;
  doctor_id: number;
  service: ServicesTypesEnums;
  from?: Date;
  to?: Date;
  date?: Date;
  price: number;
  notes: string;
  status: AppointmentStatus;
  is_paid: PermissionStatus;
  payment_method: string;
  cancellation_reason: string;
  is_myself: number;
  gender: number;
  age: number;
  zoom_url: string;
  zoom_password: string;
  app_commission: number;
  user_name: string;
  user_image: number;
  user?: User;
  files?: Array<string>;
};

export enum AppointmentStatus {
  Pending = 0,
  Confirmed = 1,
  Done = 2,
  Cancelled = 3,
  Rejected = 4,
}
