import {AxiosResponse} from "axios";
import {
  dispatch,
  setAreas,
  setBanks,
  setCities,
  setCountries,
  setSpecialties,
  setTitles,
  showErrorModel,
} from "..";
import {
  AreaType,
  BankType,
  CityType,
  CountryType,
  DoctorTitles,
  SpecialtiesType,
  ResponseTypes,
  CreateServicesApi,
  ServiceTypes,
} from "../../@types";
import {request} from "../../api/request";

type SpecialistParams = {
  city_id?: number;
  q?: string;
};

const createFilterObject = (
  params: SpecialistParams,
): Partial<SpecialistParams> => {
  const filter: Partial<SpecialistParams> = {};
  if (params.city_id) {
    filter.city_id = params.city_id;
  }
  if (params.q) {
    filter.q = params.q;
  }
  return filter;
};

const getCountries = async (
  callback?: (res: AxiosResponse<ResponseTypes<CountryType>>) => void,
) => {
  try {
    const response = await request<CountryType>({
      method: "get",
      endPoint: "countries",
      callback,
    });
    if (response?.code === 200) {
      dispatch(setCountries(response.data));
    }
  } catch (error: any) {
    console.log("in getCountries ", error?.response?.data);
  }
};

const getCities = async (
  countryId: number = 1,
  callback?: (res: AxiosResponse<ResponseTypes<CityType>>) => void,
) => {
  try {
    const response = await request<CityType>({
      method: "get",
      endPoint: "cities",
      callback,
      params: `?country_id=${countryId}`,
    });
    if (response?.code === 200) {
      dispatch(setCities(response.data));
    }
  } catch (error: any) {
    console.log("in getCities ", error?.response?.data);
  }
};

const getSpecialties = async (
  filter?: SpecialistParams,
  callback?: (res: AxiosResponse<ResponseTypes<SpecialtiesType>>) => void,
) => {
  let paramUrl;

  if (filter) {
    const filterObj = createFilterObject(filter);
    const queryString = new URLSearchParams(
      filterObj as Record<string, string>,
    ).toString();

    paramUrl = `?${queryString}`;
  }
  console.log("queryString in get specialties =>", paramUrl);
  try {
    const response = await request<SpecialtiesType>({
      method: "get",
      endPoint: "specialties",
      params: paramUrl,
      callback,
    });
    if (response?.code === 200) {
      dispatch(setSpecialties(response.data));
    }
  } catch (error: any) {
    console.log("in getSpecialties ", error);
  }
};

const getTitles = async (
  callback?: (res: AxiosResponse<ResponseTypes<DoctorTitles>>) => void,
) => {
  try {
    const response = await request<DoctorTitles>({
      method: "get",
      endPoint: "titles",
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
      dispatch(setTitles(response.data));
    }
  } catch (error: any) {
    console.log("in getTitles ", error);
  }
};

const getAreas = async (
  cityId: number,
  callback?: (res: AxiosResponse<ResponseTypes<AreaType>>) => void,
) => {
  try {
    const response = await request<AreaType>({
      method: "get",
      endPoint: "areas",
      callback,
      params: `?city_id=${cityId}`,
    });
    if (response?.code === 200) {
      console.log(response);
      dispatch(setAreas(response.data));
    }
  } catch (error: any) {
    console.log("in getAreas ", error?.response?.data);
  }
};

const getBanks = async (
  callback?: (res: AxiosResponse<ResponseTypes<BankType>>) => void,
) => {
  try {
    const response = await request<BankType>({
      method: "get",
      endPoint: "banks",
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
      dispatch(setBanks(response.data));
    }
  } catch (error: any) {
    console.log("in getBanks ", error?.response?.data);
  }
};

const createOrUpdateServices = async (
  body: CreateServicesApi,
  callback?: (res: AxiosResponse<ResponseTypes<ServiceTypes>>) => void,
) => {
  try {
    const response = await request<ServiceTypes, CreateServicesApi>({
      method: "post",
      endPoint: "createOrUpdateServices",
      callback,
      body,
    });
    if (response?.code === 200) {
      console.log(response);
      // dispatch(setDoctorProfile(response));
    }
  } catch (error: any) {
    console.log("in createOrUpdateServices ", error?.response?.data);
    const validation = error?.response?.data?.message;
    if (validation) {
      dispatch(showErrorModel(validation));
    }
  }
};

export {
  createOrUpdateServices,
  getAreas,
  getBanks,
  getCities,
  getCountries,
  getSpecialties,
  getTitles,
};
