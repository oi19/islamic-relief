import {createSlice} from "@reduxjs/toolkit";
import {HomePageTypes} from "../../@types";

// Define the state type
type InitialStateTypes = {
  homePageData: HomePageTypes;
};

const initialState: InitialStateTypes = {
  homePageData: {
    service_images: {
      home_image: "",
      clinic_image: "",
      online_image: "",
    },
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
