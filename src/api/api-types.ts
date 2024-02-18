export interface ApisTypes<T = string> {
  // Auth APIS
  login: T;
  logout: T;
  registerUserForm: T;
  userProfile: T;
  updateUserProfile: T;

  // Global APIS
  countries: T;
  cities: T;
  specialties: T;
  titles: T;
  areas: T;
  banks: T;
  packages: T;
  subscribePackages: T;
  change_fcm_token: T;

  // // create Clinic
  // createClinic: T;
  // createScheduleTimes: T;
  createOrUpdateServices: T;
  // updateClinic: T;

  // Appointments
  getAppointments: T;
  changeAppointmentStatus: T;
  rescheduleAppointment: T;

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
}

const APIs: ApisTypes = {
  // Global APIS
  countries: "/countries",
  cities: "/cities",
  specialties: "/specialties",
  titles: "/titles",
  areas: "/districts",
  banks: "/banks",
  packages: "/users/packages",
  subscribePackages: "/users/subscribe",
  change_fcm_token: "/users/change-device-token",

  // Auth APIS
  login: "/users/login",
  registerUserForm: "/users/register",
  logout: "/users/logout",
  userProfile: "/users/profile",
  updateUserProfile: "/users/profile/update",

  // create Clinic
  // createClinic: "/users/clinics/create",
  // createScheduleTimes: "/users/clinics/available-times/update",
  createOrUpdateServices: "/users/services/update",
  // updateClinic: "/users/clinics",

  // Appointments
  getAppointments: "/users/appointments",
  changeAppointmentStatus: "/users/appointments",
  rescheduleAppointment: "/users/appointments-update",

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
};

export default APIs;
