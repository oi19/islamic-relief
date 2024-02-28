import {
  ChatType,
  CityTypes,
  Doctor,
  GenderTypes,
  MessageType,
  NotificationsTypes,
  Payment_Card_Type,
  Review,
  ServiceType,
  ServicesTypesEnums,
} from "../@types";
import {specialType} from "../@types/special-types";
import {Images} from "../assets/images";
import {translate} from "../helpers";

const dummyCities: CityTypes[] = [
  {
    id: 1,
    name: "New York",
    countryName: "USA",
    code: "NYC",
    longitude: "40.7128",
    latitude: "-74.0060",
    country_id: 1,
    created_by: "John Doe",
    updated_by: "Alice Smith",
    created_at: "2023-11-01T12:00:00Z",
    updated_at: "2023-11-01T15:30:00Z",
  },
  {
    id: 2,
    name: "Los Angeles",
    countryName: "USA",
    code: "LA",
    longitude: "34.0522",
    latitude: "-118.2437",
    country_id: 1,
    created_by: "Jane Brown",
    updated_by: "Bob Johnson",
    created_at: "2023-11-01T10:45:00Z",
    updated_at: "2023-11-01T14:15:00Z",
  },
  {
    id: 3,
    name: "London",
    countryName: "UK",
    code: "LDN",
    longitude: "51.5074",
    latitude: "-0.1278",
    country_id: 2,
    created_by: "David Wilson",
    updated_by: "Sophia Lee",
    created_at: "2023-11-01T09:30:00Z",
    updated_at: "2023-11-01T13:20:00Z",
  },
  {
    id: 4,
    name: "Maadi",
    countryName: "Egypt",
    code: "LDN",
    longitude: "51.5074",
    latitude: "-0.1278",
    country_id: 2,
    created_by: "David Wilson",
    updated_by: "Sophia Lee",
    created_at: "2023-11-01T09:30:00Z",
    updated_at: "2023-11-01T13:20:00Z",
  },
  // Add more dummy city data here as needed
];

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

const doctors: Doctor[] = [
  {
    name: "Dr. Smith",
    specialty: "Cardiologist",
    licenseNumber: "12345",
    location: "New York",
    isAvailable: true,
    rating: "4.8",
    distance: 5,
    duration: 30,
    photo: "doctor_smith.jpg",
    isFavourite: true,
  },

  // Add more doctor objects as needed
];
const specialties: specialType[] = [
  {
    name: "Dermatology",
    photo: Images.spe1,
  },
  {
    name: "Psychiatry",
    photo: Images.spe2,
  },
  {
    name: "Pediatrics and New Born",
    photo: Images.spe3,
  },
  {
    name: "Neurology",
    photo: Images.spe5,
  },
  {
    name: "Gynecology and Infertility",
    photo: Images.spe5,
  },
];

const Reviews: Review[] = [
  {
    rating: 4,
    comment: "Great product!",
    time: Date.now(),
    user: {
      name: "John Doe",
    },
  },
  {
    rating: 5,
    comment: "I love it!",
    time: Date.now() - 3600000,
    user: {
      name: "Jane Smith",
    },
  },
  {
    rating: 3,
    comment: "It's okay, but could be better.",
    time: Date.now() - 7200000,
    user: {
      name: "Bob Johnson",
    },
  },
];

const genders: GenderTypes[] = [
  {
    id: 1,
    name: "Male",
  },
  {
    id: 2,
    name: "Female",
  },
];

const notifications: NotificationsTypes[] = [
  {
    id: 1,
    sender_id: 2,
    name: "Dennis Nedry",
    image: "",
    body: "",
    title: "added review",
    date: Date.now(),
  },
  {
    id: 2,
    sender_id: 2,
    name: "Dennis Nedry",
    image: "",
    body: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    title: "added review",
    date: Date.now(),
  },
  {
    id: 3,
    sender_id: 2,
    name: "Dennis Nedry",
    image: "",
    body: "",
    title: "send Message",
    date: Date.now(),
  },
  {
    id: 4,
    sender_id: 4,
    name: "Dennis Nedry",
    image: "",
    body: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    title: "send message",
    date: Date.now(),
  },
  {
    id: 5,
    sender_id: 2,
    name: "Dennis Nedry",
    image: "",
    body: "",
    title: "send Message",
    date: Date.now(),
  },
  {
    id: 6,
    sender_id: 4,
    name: "Dennis Nedry",
    image: "",
    body: "",
    title: "send message",
    date: Date.now(),
  },
  {
    id: 7,
    sender_id: 2,
    name: "Dennis Nedry",
    image: "",
    body: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    title: "send Message",
    date: Date.now(),
  },
  {
    id: 8,
    sender_id: 4,
    name: "Dennis Nedry",
    image: "",
    body: "",
    title: "send message",
    date: Date.now(),
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

const dummyChatList: ChatType[] = [
  {
    id: 1,
    name: "Omar",
    email: "omar@gmail.com",
    created_at: new Date().toString(),
  },
  {
    id: 1,
    name: "Abdallah",
    email: "abdallah@gmail.com",
    created_at: new Date().toString(),
  },
  {
    id: 1,
    name: "Mustafa",
    email: "mustafa@gmail.com",
    created_at: new Date().toString(),
  },
  {
    id: 1,
    name: "Amr",
    email: "amr@gmail.com",
    created_at: new Date().toString(),
  },
  {
    id: 1,
    name: "Aya",
    email: "aya@gmail.com",
    created_at: new Date().toString(),
  },
];

const dummyChatMessages: MessageType[] = [
  {
    id: 1,
    content: "Thank you doctor for this wonderful session",
    sender_id: 1,
    receiver_id: 2,
    sender_type: "User",
    receiver_type: "Doctor",
    created_at: new Date().toString(),
    image: "",
    senderUserName: "Mohamed",
  },
  {
    id: 1,
    content: "Glad to hear that ",
    sender_id: 2,
    receiver_id: 1,
    sender_type: "Doctor",
    receiver_type: "User",
    created_at: new Date().toString(),
    image: "",
    senderUserName: "Dr.yousef",
  },
  {
    id: 1,
    content: "Thank you doctor for this wonderful session",
    sender_id: 1,
    receiver_id: 2,
    sender_type: "User",
    receiver_type: "Doctor",
    created_at: new Date().toString(),
    image: "",
    senderUserName: "Mohamed",
  },
  {
    id: 1,
    content: "Glad to hear that ",
    sender_id: 2,
    receiver_id: 1,
    sender_type: "Doctor",
    receiver_type: "User",
    created_at: new Date().toString(),
    image: "",
    senderUserName: "Dr.yousef",
  },
  {
    id: 1,
    content: "Thank you doctor for this wonderful session",
    sender_id: 1,
    receiver_id: 2,
    sender_type: "User",
    receiver_type: "Doctor",
    created_at: new Date().toString(),
    image: "",
    senderUserName: "Mohamed",
  },
  {
    id: 1,
    content: "Glad to hear that ",
    sender_id: 2,
    receiver_id: 1,
    sender_type: "Doctor",
    receiver_type: "User",
    created_at: new Date().toString(),
    image: "",
    senderUserName: "Dr.yousef",
  },
  {
    id: 1,
    content: "Thank you doctor for this wonderful session",
    sender_id: 1,
    receiver_id: 2,
    sender_type: "User",
    receiver_type: "Doctor",
    created_at: new Date().toString(),
    image: "",
    senderUserName: "Mohamed",
  },
  {
    id: 1,
    content: "Glad to hear that ",
    sender_id: 2,
    receiver_id: 1,
    sender_type: "Doctor",
    receiver_type: "User",
    created_at: new Date().toString(),
    image: "",
    senderUserName: "Dr.yousef",
  },
];

export {
  dummyCities,
  serviceList,
  doctors,
  genders,
  specialties,
  Reviews,
  notifications,
  dummyChatMessages,
  dummyChatList,
  paymentCards,
};
