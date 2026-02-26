export type Login = {
  email?: string;
  password: string;
  workEmail?: string;
};

export type ForgotPassword = {
  email?: string;
};

export type ResetPassword = {
  newPassword: string;
  confirmNewPassword: string;
};
