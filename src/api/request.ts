import {AxiosResponse} from "axios";

import {API} from ".";
import APIs, {ApisTypes} from "./api-types";
import {disableLoader, enableLoader} from "../redux/reducers/loadingReducer";
import {ErrorResponseType} from "../@types/response-types";
import {dispatch} from "../redux";

type ApiMethodsTypes = "get" | "post" | "put" | "delete" | "patch";

type RequestParams<T, R = null> = {
  method: ApiMethodsTypes;
  endPoint: keyof ApisTypes;
  body?: R;
  callback?: (res: AxiosResponse<T>) => void;
  params?: string;
};

export async function request<T, R = null>({
  method,
  endPoint,
  callback,
  body,
  params,
}: RequestParams<T, R>) {
  dispatch(enableLoader(endPoint));
  const response: AxiosResponse<T & ErrorResponseType> = await API[method](
    `${APIs[endPoint]}${params ? params : ""}`,
    body ? body : {},
  );
  dispatch(disableLoader(endPoint));
  try {
    if (callback) {
      callback(response);
    }
    if (response.status === 200) {
      return response.data;
    } else {
      handleErrors(response.data);
    }
  } catch (e) {
    console.log("Network error", e);
  }
}

const handleErrors = (data: any) => {
  let message = "";
  if (data.status.validation_errors && data.status.validation_errors.length) {
    message = data.status.validation_errors[0].message[0];
  } else {
    message = data.status.error_details;
  }
  console.log(message, "error");

  //   CustomToast(message, "error");
};
