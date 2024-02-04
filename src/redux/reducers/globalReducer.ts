import {createSlice} from "@reduxjs/toolkit";

type InitialStateTypes = {
  firstTime: boolean;
  chooseLanguageFirstTime: boolean;
};

const initialState: InitialStateTypes = {
  firstTime: true,
  chooseLanguageFirstTime: true,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setFirst: state => {
      state.firstTime = false;
    },
    setChooseLanguageFirstTime: state => {
      state.chooseLanguageFirstTime = false;
    },
  },
});

export const {setChooseLanguageFirstTime, setFirst} = globalSlice.actions;
export default globalSlice.reducer;
