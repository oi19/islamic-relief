import {AxiosResponse} from "axios";

import {API} from ".";
import APIs, {ApisTypes} from "./api-types";
import {disableLoader, dispatch, enableLoader} from "../redux/index";
import {ErrorResponseType, ResponseTypes} from "../@types";

type ApiMethodsTypes = "get" | "post" | "put" | "delete" | "patch";

export type RequestParams<T, R = null> = {
  method: ApiMethodsTypes;
  endPoint: keyof ApisTypes;
  body?: R;
  callback?: (res: AxiosResponse<ResponseTypes<T>>) => void;
  params?: string;
};

export async function request<T, R = null>({
  method,
  endPoint,
  callback,
  body,
  params,
}: // headers,
RequestParams<T, R>) {
  dispatch(enableLoader(endPoint));

  const response: AxiosResponse<ResponseTypes<T> & ErrorResponseType> | void =
    await API[method](
      `${APIs[endPoint]}${params ? params : ""}`,
      body ? body : {},
    ).finally(() => {
      dispatch(disableLoader(endPoint));
    });
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
    console.log("response:" + e?.response?.data);
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
