import {AxiosResponse} from "axios";
import {
  Doctor,
  PaginationTypes,
  ResponseTypes,
  ServicesTypesEnums,
} from "../../@types";
import {request} from "../../api/request";
import {dispatch} from "../store/configureStore";
import {
  setDoctorProfile,
  setDoctors,
  setReview,
} from "../reducers/doctorsReducer";
import {showErrorModel} from "../reducers/globalReducer";

type Params = {
  service?: ServicesTypesEnums;
  specialty_id?: number;
  group_by?: "price" | "duration";
  order_type?: "asc" | "desc";
};

const createFilterObject = (params: Params): Partial<Params> => {
  const filter: Partial<Params> = {};
  if (params.service) {
    filter.service = params.service;
  }
  if (params.specialty_id) {
    filter.specialty_id = params.specialty_id;
  }
  if (params.group_by) {
    filter.group_by = params.group_by;
  }
  if (params.order_type) {
    filter.order_type = params.order_type;
  }
  return filter;
};

const getDoctors = async (
  page: number,
  filter?: Params,
  callback?: (
    res: AxiosResponse<ResponseTypes<PaginationTypes<Doctor>>>,
  ) => void,
) => {
  let paramUrl;

  if (filter) {
    const filterObj = createFilterObject(filter);
    const queryString = new URLSearchParams(
      filterObj as Record<string, string>,
    ).toString();

    console.log("queryString in get Doctors =>", queryString);

    paramUrl = `?per_page=7&page=${page}&${queryString}`;
  }

  try {
    const response = await request<any>({
      method: "post",
      endPoint: "doctors",
      params: paramUrl,
      callback,
    });
    if (response?.code === 200) {
      dispatch(setDoctors({...response.data, current_page: page}));
    }
  } catch (error: any) {
    console.log("in getDoctors ", error?.response?.data);
  }
};

const getDoctorProfile = async (
  doctorId: number,
  callback?: (res: AxiosResponse<ResponseTypes<Doctor>>) => void,
) => {
  try {
    const response = await request<any>({
      method: "get",
      endPoint: "doctorProfile",
      params: `/${doctorId}`,
      callback,
    });

    if (response?.code === 200) {
      console.log(response);
      dispatch(setDoctorProfile(response.data));
    }
  } catch (error: any) {
    console.log("in getDoctorProfile ", error);
  }
};

const addReview = async (
  body: {
    rate: number;
    review: string;
  },
  doctorId: number,
  callback?: (res: AxiosResponse<ResponseTypes<any>>) => void,
) => {
  try {
    const response = await request<
      any,
      {
        rate: number;
        review: string;
      }
    >({
      method: "post",
      endPoint: "addReview",
      params: `/${doctorId}/review`,
      callback,
      body,
    });
    if (response?.code === 200) {
      console.log(response);
      dispatch(setReview(response?.data));
    }
  } catch (error: any) {
    console.log("in addReview ");
    const validation = error?.response?.data?.messge;
    if (validation) {
      dispatch(showErrorModel(validation));
    }
  }
};
export {getDoctors, getDoctorProfile, addReview};
