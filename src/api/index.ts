import {isRTL} from "../locals/i18n-config";
import {logout} from "../redux/index";
import {store} from "../redux/store/configureStore";
import axios from "axios";

export const API = axios.create({
  // baseURL: "https://doctors.fmceg.com/api",
  baseURL: "",
});

API.interceptors.request.use(config => {
  const token = store.getState().userReducer?.token;

  console.log("token ", token);

  const lang = isRTL() ? "ar" : "en";

  config.headers.local = lang;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Check for a special case when FormData object is present in the request data
  if (config.data instanceof FormData) {
    // Add 'Content-Type' header for FormData requests
    console.log("formData");

    config.headers["Content-Type"] = "multipart/form-data";
  }

  return config;
});

API.interceptors.response.use(
  response => {
    // Modify response data before returning
    // For example, handling errors or transforming data
    // console.log("response : " + response?.data);
    return response;
  },
  error => {
    // Handle response error
    if (error?.response?.status === 401) {
      store.dispatch(logout());
    }
    console.log("error: " + error?.response);
    return Promise.reject(error);
  },
);
