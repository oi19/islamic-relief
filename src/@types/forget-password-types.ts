export type ConfirmOtpResponse = {
  id: number;
  otp: string;
  token: string;
  guard_id: number;
  guard: string;
};

export type ResetPasswordTypes = {
  old_password?: string;
  password: string;
  password_confirmation?: string;
  otp_token?: string;
};
