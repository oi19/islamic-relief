import {isRTL} from "../locals/i18n-config";
import {logout} from "../redux/index";
import {store} from "../redux/store/configureStore";
import axios from "axios";

export const API = axios.create({
  baseURL: "https://doctors.fmceg.com/api",
});

API.interceptors.request.use(request => {
  const token = store.getState().userReducer?.token;

  console.log("token ", token);

  const lang = isRTL() ? "ar" : "en";

  request.headers.local = lang;
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  // Check for a special case when FormData object is present in the request data
  if (request.data instanceof FormData) {
    // Add 'Content-Type' header for FormData requests
    console.log("formData");

    request.headers["Content-Type"] = "multipart/form-data";
  }
  console.log("\n");
  console.log(
    request["baseURL"]! +
      request["url"] +
      `${request["data"] == undefined ? " " : request?.data}`,
  );
  console.log(request);
  return request;
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
    console.log("\n");
    console.log("error: " + error?.response);
    return Promise.reject(error);
  },
);
