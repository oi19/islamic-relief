import {AppointmentsTypes} from "./appointment-types";
import {PermissionStatus} from "./common-types";

export type NotificationsTypes = {
  id?: number;
  is_fom_admin?: PermissionStatus;
  is_seen?: PermissionStatus;
  is_push_notification?: PermissionStatus;
  action?: any;
  image?: string;
  title?: string;
  route?: string;
  body?: string;
  bulk_id?: number;
  user_id?: number;
  doctor_id?: number;
  appointment_id?: number;
  appointment?: AppointmentsTypes;
  index?: number;
  date?: string;

  created_at: Date | string;
};
