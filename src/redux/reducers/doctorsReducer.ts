import {createSlice} from "@reduxjs/toolkit";
import {Doctor} from "../../@types";

type InitialState = {
  topRated: Doctor[];
};
const initialState: InitialState = {
  topRated: [],
};

const doctorSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    setTopRated: (state, action) => {
      state.topRated = action.payload;
    },
  },
});

export const {setTopRated} = doctorSlice.actions;

export default doctorSlice.reducer;
