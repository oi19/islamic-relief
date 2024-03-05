import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {
  CreateAppointmentTypes,
  Doctor,
  PaginationTypes,
  Review,
  ServiceTypes,
} from "../../@types";
import {handlePagination} from "../../helpers";

type InitialState = {
  topRated: Doctor[];
  doctors: Doctor[];
  lastPage: string | null;
  doctorProfile: Doctor;
  appointment: {
    time: string;
    date: string;
    service?: ServiceTypes;
  };
  patientsDetails: CreateAppointmentTypes | null;
};
const initialState: InitialState = {
  topRated: [],
  doctors: [],
  lastPage: null,
  doctorProfile: {} as Doctor,
  appointment: {
    time: "",
    date: "",
  },
  patientsDetails: null,
};

const doctorSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    setDoctors: (
      state,
      {
        payload: {data, current_page, next_page_url},
      }: PayloadAction<PaginationTypes<Doctor>>,
    ) => {
      state.doctors = handlePagination<Doctor>(
        state.doctors,
        data,
        current_page,
      );
      state.lastPage = next_page_url;
    },
    setDoctorProfile: (state, {payload}: PayloadAction<Doctor>) => {
      state.doctorProfile = payload;
    },

    setTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    setServiceTypeWithAppointment: (
      state,
      {
        payload,
      }: PayloadAction<{
        time: string;
        date: string;
        service?: ServiceTypes;
      }>,
    ) => {
      state.appointment = payload;
    },

    setPatientDetailsForm: (state, {payload}) => {
      state.patientsDetails = payload;
    },
    setReview: (state, {payload}: PayloadAction<Review>) => {
      state.doctorProfile.reviews?.push(payload);
    },
  },
});

export const {
  setTopRated,
  setDoctors,
  setDoctorProfile,
  setServiceTypeWithAppointment,
  setPatientDetailsForm,
  setReview,
} = doctorSlice.actions;

export default doctorSlice.reducer;
