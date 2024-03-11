import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {Doctor, PaginationTypes} from "../../@types";

export const favoriteDoctorsAdapter = createEntityAdapter<Doctor>();

type InitialState = {
  favoritesDoctors: ReturnType<typeof favoriteDoctorsAdapter.getInitialState>;
  lastPage: string | null;
};

const initialState: InitialState = {
  favoritesDoctors: favoriteDoctorsAdapter.getInitialState(),
  lastPage: null,
};

const favDoctorSlice = createSlice({
  name: "favouritesDoctor",
  initialState,
  reducers: {
    setFavourites: (
      state,
      {
        payload: {data, current_page, next_page_url},
      }: PayloadAction<PaginationTypes<Doctor>>,
    ) => {
      if (current_page === 1) {
        favoriteDoctorsAdapter.setAll(state.favoritesDoctors, data);
      } else {
        favoriteDoctorsAdapter.upsertMany(state.favoritesDoctors, data);
      }
      state.lastPage = next_page_url;
    },

    addFavourite: (state, {payload}: PayloadAction<Doctor>) => {
      favoriteDoctorsAdapter.addOne(state.favoritesDoctors, payload);
    },
    removeFavourite: (state, {payload}: PayloadAction<number>) => {
      favoriteDoctorsAdapter.removeOne(state.favoritesDoctors, payload);
    },
  },
});

export const {setFavourites, addFavourite, removeFavourite} =
  favDoctorSlice.actions;

export default favDoctorSlice.reducer;
