import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {AppointmentsTypes, PaginationTypes} from "../../@types";
import {handlePagination} from "../../helpers";

type InitialState = {
  appointments: AppointmentsTypes[];
  lastPage: string | null;
};
const initialState: InitialState = {
  appointments: [],
  lastPage: "on",
};
const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    setAppointments: (
      state,
      {payload}: PayloadAction<PaginationTypes<AppointmentsTypes>>,
    ) => {
      state.appointments = handlePagination<AppointmentsTypes>(
        state.appointments,
        payload?.data,
        payload.current_page,
      );
      state.lastPage = payload?.next_page_url;
    },
    updateAppointment: (state, action) => {
      const {index, status} = action.payload;
      let newItem = state.appointments[index];
      newItem.status = status;
      state.appointments[index] = newItem;
    },
    clearAppointments: state => {
      state.lastPage = "on";
    },
  },
});

export const {setAppointments, clearAppointments, updateAppointment} =
  appointmentsSlice.actions;

export default appointmentsSlice.reducer;
