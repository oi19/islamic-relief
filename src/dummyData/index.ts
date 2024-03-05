import {
  BookingTypes,
  GenderTypes,
  Payment_Card_Type,
  ServiceType,
  ServicesTypesEnums,
} from "../@types";
import {translate} from "../helpers";

const serviceList: ServiceType[] = [
  {
    photo: "findDoctors",
    name: translate("Home.homeVisit"),
    service: ServicesTypesEnums.HomeVisit,
  },
  {
    photo: "makeAppointment",
    name: translate("Home.clinicVisit"),
    service: ServicesTypesEnums.ClinicVisit,
  },
  {
    photo: "onlineDoctor",
    name: translate("OnBoarding.onlineConsultation"),
    service: ServicesTypesEnums.VideoCall,
  },
];

const genders: GenderTypes[] = [
  {
    id: 0,
    name: translate("Genders.male")!,
  },
  {
    id: 1,
    name: translate("Genders.female")!,
  },
];

export const bookings: BookingTypes[] = [
  {
    id: 1,
    name: translate("Booking.itself")!,
  },
  {
    id: 0,
    name: translate("Booking.other")!,
  },
];

const paymentCards: Payment_Card_Type[] = [
  {
    id: 1,
    // selected: true,
    type: "MASTERCARD",
    name: "MasterCard",
    image: "",
    expiryDate: "",
    lastDigits: "1234",
  },
  {
    id: 2,
    // selected: false,
    type: "VISA",
    name: "Visa",
    image: "",
    expiryDate: "",
    lastDigits: "1234",
  },
  {
    id: 3,
    // selected: false,
    type: "MasterCard",
    name: "MasterCard",
    image: "",
    expiryDate: "",
    lastDigits: "1234",
  },
  {
    id: 4,
    // selected: false,
    type: "VISA",
    name: "Visa",
    image: "",
    expiryDate: "",
    lastDigits: "1234",
  },
];

export {genders, paymentCards, serviceList};
