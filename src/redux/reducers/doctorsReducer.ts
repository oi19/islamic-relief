import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {Doctor, PaginationTypes} from "../../@types";
import {handlePagination} from "../../helpers";

type InitialState = {
  topRated: Doctor[];
  doctors: Doctor[];
  lastPage: string | null;
};
const initialState: InitialState = {
  topRated: [],
  doctors: [],
  lastPage: null,
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
    setTopRated: (state, action) => {
      state.topRated = action.payload;
    },
  },
});

export const {setTopRated, setDoctors} = doctorSlice.actions;

export default doctorSlice.reducer;
