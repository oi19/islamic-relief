export interface ApisTypes<T = string> {
  // Auth APIS
  login: T;
  logout: T;
  registerUserForm: T;
  userProfile: T;
  updateUserProfile: T;

  //Password
  forgetPassword: T;
  confirmOtp: T;
  changePassword: T;
  resetPassword: T;

  // Global APIS
  countries: T;
  cities: T;
  specialties: T;
  titles: T;
  areas: T;
  banks: T;
  change_fcm_token: T;

  // createClinic: T;
  // createScheduleTimes: T;
  createOrUpdateServices: T;
  // updateClinic: T;

  // Appointments
  createAppointment: T;
  getAppointments: T;
  changeAppointmentStatus: T;
  rescheduleAppointment: T;
  cancelAppointment: T;

  // Home Page
  homePage: T;

  // Notifications
  notifications: T;

  //  Transactions
  getTransactions: T;
  createTransaction: T;

  // Chats
  oldChats: T;
  sendMessage: T;
  sentMessage: T;

  // Doctors
  doctors: T;
  addToFav: T;
  deleteFromFav: T;
  review: T;
}

const APIs: ApisTypes = {
  // Global APIS
  countries: "/countries",
  cities: "/cities",
  specialties: "/specialties",
  titles: "/titles",
  areas: "/districts",
  banks: "/banks",
  change_fcm_token: "/users/change-device-token",

  // Auth APIS
  login: "/users/login",
  registerUserForm: "/users/register",
  logout: "/users/logout",
  userProfile: "/users/profile",
  updateUserProfile: "/users/profile/update",

  //Password
  forgetPassword: "/users/password/forgot",
  confirmOtp: "/users/password/confirm-otp",
  changePassword: "/users/password/change",
  resetPassword: "/users/password/reset",

  // create Clinic
  // createClinic: "/users/clinics/create",
  // createScheduleTimes: "/users/clinics/available-times/update",
  createOrUpdateServices: "/users/services/update",

  // Appointments
  createAppointment: "/users/appointments/create",
  getAppointments: "/users/appointments",
  changeAppointmentStatus: "/users/appointments",
  rescheduleAppointment: "/users/appointments-update",
  cancelAppointment: "cancel",

  // Home Page
  homePage: "/users/home",

  // Notifications
  notifications: "/users/notifications",

  //  Transactions
  getTransactions: "/users/transactions",
  createTransaction: "/users/transactions/create",

  // Chats
  oldChats: "/users/old-chats",
  sendMessage: "/users/send-message",
  sentMessage: "/users/sent-message",

  // Doctors
  doctors: "/users/filter",
  addToFav: "add-to-favourites",
  deleteFromFav: "delete-from-favourites",
  review: "review",
};

export default APIs;
