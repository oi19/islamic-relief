import {createSelector} from "@reduxjs/toolkit";
import {
  countryAdapter,
  cityAdapter,
  specialtiesAdapter,
  titlesAdapter,
  areasAdapter,
  banksAdapter,
} from "../reducers/createAccountReducer"; // Replace with your actual Redux slice file
import {RootState, store} from "..";

// Selectors for each entity
const selectCountriesState = (state: RootState) =>
  state.createAccountReducer.countries;
const selectCitiesState = (state: RootState) =>
  state.createAccountReducer.cities;
const selectSpecialtiesState = (state: RootState) =>
  state.createAccountReducer.specialties;
const selectTitlesState = (state: RootState) =>
  state.createAccountReducer.titles;
const selectAreasState = (state: RootState) => state.createAccountReducer.areas;
const selectBanksState = (state: RootState) => state.createAccountReducer.banks;

export const {
  selectById: selectCountryById,
  selectIds: selectCountryIds,
  selectEntities: selectCountryEntities,
  selectAll: selectAllCountries,
  selectTotal: selectTotalCountries,
} = countryAdapter.getSelectors(selectCountriesState);

export const {
  selectById: selectCityById,
  selectIds: selectCityIds,
  selectEntities: selectCityEntities,
  selectAll: selectAllCities,
  selectTotal: selectTotalCities,
} = cityAdapter.getSelectors(selectCitiesState);

export const {
  selectById: selectSpecialtyById,
  selectIds: selectSpecialtyIds,
  selectEntities: selectSpecialtyEntities,
  selectAll: selectAllSpecialties,
  selectTotal: selectTotalSpecialties,
} = specialtiesAdapter.getSelectors(selectSpecialtiesState);

export const {
  selectById: selectTitleById,
  selectIds: selectTitleIds,
  selectEntities: selectTitleEntities,
  selectAll: selectAllTitles,
  selectTotal: selectTotalTitles,
} = titlesAdapter.getSelectors(selectTitlesState);

export const {
  selectById: selectAreaById,
  selectIds: selectAreaIds,
  selectEntities: selectAreaEntities,
  selectAll: selectAllAreas,
  selectTotal: selectTotalAreas,
} = areasAdapter.getSelectors(selectAreasState);

export const {
  selectById: selectBankById,
  selectIds: selectBankIds,
  selectEntities: selectBankEntities,
  selectAll: selectAllBanks,
  selectTotal: selectTotalBanks,
} = banksAdapter.getSelectors(selectBanksState);

export const selectCombinedAccountData = createSelector(
  selectAllCountries,
  selectAllCities,
  selectAllSpecialties,
  selectAllTitles,
  selectAllAreas,
  selectAllBanks,
  (countries, cities, specialties, titles, areas, banks) => ({
    countries,
    cities,
    specialties,
    titles,
    areas,
    banks,
  }),
);

export const getValueFromICreatedObj = (
  id: string | number,
  nameOfObj:
    | "countries"
    | "cities"
    | "specialties"
    | "titles"
    | "areas"
    | "banks",
) => {
  const name =
    store?.getState()?.createAccountReducer[nameOfObj].entities[id]?.name;

  return name || "";
};
