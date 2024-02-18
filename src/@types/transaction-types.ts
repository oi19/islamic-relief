import {translate} from "../helpers/language";
import {PermissionStatus} from ".";
import {ColorsTypes} from "../styles/colors";

export type TransactionTypes = {
  id: number;
  doctor_id: number;
  admin_id: PermissionStatus;
  amount: number;
  status: TransactionStatus;
  is_from_admin: PermissionStatus;
  code: string;
  title: string;

  formatted_created_at: string;
};

export enum TransactionStatus {
  Pending = 0,
  Accepted = 1,
  Rejected = 2,
}

export const TransactionName: Record<TransactionStatus, string | undefined> = {
  [TransactionStatus.Pending]: translate("myAppointment.pending"),
  [TransactionStatus.Accepted]: translate("myAppointment.accepted"),
  [TransactionStatus.Rejected]: translate("myAppointment.rejected"),
};

export const HandleStatusColor: Record<TransactionStatus, keyof ColorsTypes> = {
  [TransactionStatus.Pending]: "PRIMARY2",
  [TransactionStatus.Accepted]: "GREEN",
  [TransactionStatus.Rejected]: "RED",
};
