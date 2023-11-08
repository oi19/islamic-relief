import {CityTypes, Doctor, GenderTypes, Review, ServiceType} from "../@types";
import {specialType} from "../@types/special-types";
import {Images} from "../assets/images";

const dummyCities: CityTypes[] = [
  {
    id: 1,
    name: "New York",
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
    name: "Visit Doctor",
  },
  {
    photo: "makeAppointment",
    name: "Home Visit",
  },
  {
    photo: "onlineDoctor",
    name: "Online consultation",
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
  },
  {
    name: "Dr. Johnson",
    specialty: "Dermatologist",
    licenseNumber: "67890",
    location: "Los Angeles",
    isAvailable: false,
    rating: "4.5",
    distance: 10,
    duration: 45,
    photo: "doctor_johnson.jpg",
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

export {dummyCities, serviceList, doctors, genders, specialties, Reviews};
