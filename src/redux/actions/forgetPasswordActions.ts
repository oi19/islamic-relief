import {AxiosResponse} from "axios";
import {ConfirmOtpResponse, ResponseTypes} from "../../@types";
import {request} from "../../api/request";
import {combineErrorMessages} from "../../helpers";
import {showErrorModel} from "../reducers/globalReducer";
import {dispatch} from "../store/configureStore";
import {
  clearOtpToken,
  setOtpToken,
  setUserProfile,
} from "../reducers/userReducer";

const forgetDoctorPassword = async (
  body: {
    email: string;
  },
  callback?: (res: AxiosResponse<ResponseTypes<any>>) => void,
) => {
  try {
    const response = await request<
      any,
      {
        email: string;
      }
    >({
      method: "post",
      endPoint: "forgetPassword",
      callback,
      body,
    });
    if (response?.code === 200) {
      console.log(response);

      // logout();
    }
  } catch (error: any) {
    console.log("in forgetDoctorPassword ", error?.response);
    const validation = error?.response?.data?.validation;
    if (validation) {
      const errors = combineErrorMessages(validation);
      dispatch(showErrorModel(errors));
    }
  }
};

const confirmDoctorOTP = async (
  body: {
    otp: string;
  },
  callback?: (res: AxiosResponse<ResponseTypes<ConfirmOtpResponse>>) => void,
) => {
  try {
    const response = await request<
      ConfirmOtpResponse,
      {
        otp: string;
      }
    >({
      method: "post",
      endPoint: "confirmOtp",
      callback,
      body,
    });
    if (response?.code === 200) {
      console.log(response);
      dispatch(setOtpToken(response));
    }
  } catch (error: any) {
    console.log("in confirmDoctorOTP ", error?.response);
    const validation = error?.response?.data?.message;
    if (validation) {
      dispatch(showErrorModel(validation));
    }
  }
};

const changeDoctorPassword = async (
  body: {
    password: string;
    otp_token?: string;
  },
  callback?: (res: AxiosResponse<ResponseTypes<any>>) => void,
) => {
  try {
    const response = await request<
      any,
      {
        password: string;
        otp_token?: string;
      }
    >({
      method: "post",
      endPoint: "changePassword",
      callback,
      body,
    });
    if (response?.code === 200) {
      console.log(response);
      await Promise.all([
        dispatch(clearOtpToken()),
        dispatch(setUserProfile(response)),
      ]);
    }
  } catch (error: any) {
    console.log("in changeDoctorPassword ", error?.response);
    const validation = error?.response?.data?.message;
    if (validation) {
      dispatch(showErrorModel(validation));
    }
  }
};

export {forgetDoctorPassword, confirmDoctorOTP, changeDoctorPassword};
