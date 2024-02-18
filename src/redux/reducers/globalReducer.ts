import {createSlice} from "@reduxjs/toolkit";

type InitialStateTypes = {
  firstTime: boolean;
  chooseLanguageFirstTime: boolean;

  visibleErrorModel: boolean;
  message?: string;
  globalLoading?: boolean;

  showToast: boolean;
  toastMessage: string;
};

const initialState: InitialStateTypes = {
  firstTime: true,
  chooseLanguageFirstTime: true,
  visibleErrorModel: false,
  message: undefined,
  globalLoading: false,
  showToast: false,
  toastMessage: "",
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

    showErrorModel: (state, action) => {
      state.visibleErrorModel = true;
      state.message = action.payload;
    },
    hideErrorModel: state => {
      state.visibleErrorModel = false;
      state.message = undefined;
    },
    enableGlobalLoading: state => {
      state.globalLoading = true;
    },
    disableGlobalLoading: state => {
      state.globalLoading = false;
    },
    showToast: (state, action) => {
      state.showToast = true;
      state.toastMessage = action.payload;
    },
    closeToast: state => {
      state.toastMessage = "";
      state.showToast = false;
    },
  },
});

export const {
  setChooseLanguageFirstTime,
  setFirst,
  showErrorModel,
  hideErrorModel,
  enableGlobalLoading,
  disableGlobalLoading,
  showToast,
  closeToast,
} = globalSlice.actions;
export default globalSlice.reducer;
