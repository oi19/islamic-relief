import {createSlice} from "@reduxjs/toolkit";
import {HomePageTypes} from "../../@types";

// Define the state type
type InitialStateTypes = {
  homePageData: HomePageTypes;
};

const initialState: InitialStateTypes = {
  homePageData: {
    today_appointments: [],
    count_appointments: [],
    doctors: [],
  },
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHomeData: (state, action) => {
      state.homePageData = action.payload;
    },
  },
});

export const {setHomeData} = homeSlice.actions;

export default homeSlice.reducer;
