import axios from "axios";
import {store} from "../redux";

export const API = axios.create({
  baseURL: "https://appox.xyz/system/appox_endpoints/public/api",
});

axios.interceptors.request.use(config => {
  const token = store.getState().account.user?.token;
  console.log("token", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  response => {
    // Modify response data before returning
    // For example, handling errors or transforming data
    return response;
  },
  error => {
    // Handle response error
    if (error?.response?.status === 401) {
      // store.dispatch(signOut());
    }
    return Promise.reject(error);
  },
);
