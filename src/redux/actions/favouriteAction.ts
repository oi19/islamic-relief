import {AxiosResponse} from "axios";
import {Doctor, ResponseTypes} from "../../@types";
import {request} from "../../api/request";
import {dispatch} from "../store/configureStore";
import {showErrorModel} from "../reducers/globalReducer";
import {
  addFavourite,
  removeFavourite,
  setFavourites,
} from "../reducers/favouriteReducer";

export const addToFavourite = async (
  doctorId: number,
  callback?: (res: AxiosResponse<ResponseTypes<any>>) => void,
) => {
  try {
    const response = await request<any>({
      method: "post",
      endPoint: "doctorFavourite",
      params: `/${doctorId}/add-to-favourites`,
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
      dispatch(addFavourite(response?.data));
    }
  } catch (error: any) {
    console.log("in addToFavourite ", error?.response?.data);
    const validation = error?.response?.data?.messge;
    if (validation) {
      dispatch(showErrorModel(validation));
    }
  }
};

export const removeFromFavourite = async (
  doctorId: number,
  callback?: (res: AxiosResponse<ResponseTypes<any>>) => void,
) => {
  try {
    const response = await request<any>({
      method: "post",
      endPoint: "doctorFavourite",
      params: `/${doctorId}/delete-from-favourites`,
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
      dispatch(removeFavourite(doctorId));
    }
  } catch (error: any) {
    console.log("in removeFromFavourite ", error?.response?.data?.message);
    const validation = error?.response?.data?.messge;
    if (validation) {
      dispatch(showErrorModel(validation));
    }
  }
};

export const getFavouriteDoctor = async (
  doctorId: number,
  callback?: (res: AxiosResponse<ResponseTypes<Doctor[]>>) => void,
) => {
  try {
    const response = await request<any>({
      method: "get",
      endPoint: "doctors",
      params: `/${doctorId}?is_favourite=1`,
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
      dispatch(setFavourites(response?.data));
    }
  } catch (error: any) {
    console.log("in getFavouriteDoctor");
    const validation = error?.response?.data?.messge;
    if (validation) {
      dispatch(showErrorModel(validation));
    }
  }
};
