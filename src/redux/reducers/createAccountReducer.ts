import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  UserRegisterTypes,
  AreaType,
  BankType,
  CityType,
  CountryType,
  DoctorTitles,
  SpecialtiesType,
} from "../../@types";

// Define entity adapters for each type
export const countryAdapter = createEntityAdapter<CountryType>();
export const cityAdapter = createEntityAdapter<CityType>();
export const specialtiesAdapter = createEntityAdapter<SpecialtiesType>();
export const titlesAdapter = createEntityAdapter<DoctorTitles>();
export const areasAdapter = createEntityAdapter<AreaType>();
export const banksAdapter = createEntityAdapter<BankType>();

// Define the state type
type InitialStateTypes = {
  countries: ReturnType<typeof countryAdapter.getInitialState>;
  cities: ReturnType<typeof cityAdapter.getInitialState>;
  specialties: ReturnType<typeof specialtiesAdapter.getInitialState>;
  titles: ReturnType<typeof titlesAdapter.getInitialState>;
  areas: ReturnType<typeof areasAdapter.getInitialState>;
  banks: ReturnType<typeof banksAdapter.getInitialState>;
  userRegister: UserRegisterTypes | null;
  paymentMethodData: UserRegisterTypes | null;
};

// Initial state
export const initialState: InitialStateTypes = {
  countries: countryAdapter.getInitialState(),
  cities: cityAdapter.getInitialState(),
  specialties: specialtiesAdapter.getInitialState({
    ids: [],
  }),
  titles: titlesAdapter.getInitialState(),
  areas: areasAdapter.getInitialState(),
  banks: banksAdapter.getInitialState(),
  userRegister: null,
  paymentMethodData: null,
};

const createAccountSlice = createSlice({
  name: "createAccount",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      countryAdapter.setAll(state.countries, action.payload);
    },
    setCities: (state, action) => {
      cityAdapter.setAll(state.cities, action.payload);
    },
    setSpecialties: (state, action) => {
      specialtiesAdapter.setAll(state.specialties, action.payload);
    },
    setTitles: (state, action) => {
      titlesAdapter.setAll(state.titles, action?.payload);
    },
    setAreas: (state, action) => {
      areasAdapter.setAll(state.areas, action.payload);
    },
    setBanks: (state, action) => {
      banksAdapter.setAll(state.banks, action.payload);
    },
    setUserFormRegister: (state, action) => {
      state.userRegister = {...action.payload};
    },
    handlePaymentInput: (
      state,
      {
        payload: {inputName, value},
      }: PayloadAction<{
        inputName: string;
        value: string | number;
      }>,
    ) => {
      state.paymentMethodData = {
        ...state.paymentMethodData,
        [inputName]: value,
      };
    },
    clearPaymentMethod: state => {
      state.paymentMethodData = null;
    },
    clearDoctorFormRegister: state => {
      state.userRegister = null;
    },
  },
});

export const {
  setCountries,
  setCities,
  setSpecialties,
  setTitles,
  setAreas,
  setBanks,
  setUserFormRegister,
  handlePaymentInput,
  clearDoctorFormRegister,
  clearPaymentMethod,
} = createAccountSlice.actions;
export default createAccountSlice.reducer;
