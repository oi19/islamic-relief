import {request} from "../../api/request";
import {LoginTypes, User} from "../../@types";
import {ResponseTypes} from "../../@types";
import {AxiosResponse} from "axios";
import {dispatch, logout, setUserProfile, showErrorModel} from "..";
import {combineErrorMessages} from "../../helpers/utils";

// const registerUserForm = async (
//   body: FormData,
//   callback?: (res: AxiosResponse<ResponseTypes<User>>) => void,
// ) => {
//   try {
//     const response = await request<User, FormData>({
//       method: "post",
//       endPoint: "registerUserForm",
//       callback,
//       body,
//     });
//     if (response?.code === 200) {
//       console.log(response);
//       dispatch(setUserProfile(response));
//     }
//   } catch (error: any) {
//     console.log("in registerUserFormError?.response?.data");
//     const validation = error?.response?.data?.validation;
//     if (validation) {
//       const errors = combineErrorMessages(validation);
//       dispatch(showErrorModel(errors));
//     }
//   }
// };

const userLogin = async (
  body: LoginTypes,
  callback?: (res: AxiosResponse<ResponseTypes<LoginTypes>>) => void,
) => {
  try {
    const response = await request<LoginTypes, LoginTypes>({
      method: "post",
      endPoint: "login",
      callback,
      body,
    });
    if (response?.code === 200) {
      console.log("loggedIn");
      dispatch(setUserProfile(response));
    } else {
    }
  } catch (error: any) {
    console.log("in userLogin ", error?.response.data);
    const validation = error?.response?.data?.message;
    if (validation) {
      dispatch(showErrorModel(validation));
    }
  }
};

const userLogout = async (
  callback?: (res: AxiosResponse<ResponseTypes<any>>) => void,
) => {
  try {
    const response = await request<any>({
      method: "get",
      endPoint: "logout",
      callback,
    });
    if (response?.code === 200) {
      dispatch(logout());
    }
  } catch (error: any) {
    console.log("in userLogout ", error?.response?.data.message);
    const validation = error?.response?.data?.message;
    if (validation) {
      dispatch(showErrorModel(validation));
    }
  }
};

const forgetPassword = async (
  body: FormData,
  callback?: (res: AxiosResponse<ResponseTypes<any>>) => void,
) => {
  try {
    const response = await request<any, FormData>({
      method: "post",
      endPoint: "forgetPassword",
      callback,
      body,
    });
    if (response?.code === 200) {
      console.log(response);
      console.log(response.data);
    }
  } catch (error: any) {
    console.log("in forgetPassword ", error?.response?.data);
    const validation = error?.response?.data?.message;
    if (validation) {
      dispatch(showErrorModel(validation));
    }
  }
};

const confirmOtp = async (
  body: any,
  callback?: (res: AxiosResponse<ResponseTypes<any>>) => void,
) => {
  try {
    const response = await request<any, FormData>({
      method: "post",
      endPoint: "confirmOtp",
      callback,
      body,
    });
    if (response?.code === 200) {
      console.log(response);
      console.log(response.data);
      dispatch(setUserProfile(response));
    }
  } catch (error: any) {
    console.log("in confirmOtp ", error?.response?.data);
    const validation = error?.response?.data?.message;
    if (validation) {
      dispatch(showErrorModel(validation));
    }
  }
};

const changePassword = async (
  body: any,
  callback?: (res: AxiosResponse<ResponseTypes<any>>) => void,
) => {
  try {
    const response = await request<any>({
      method: "post",
      endPoint: "changePassword",
      callback,
      body,
    });
    if (response?.code === 200) {
      console.log(response.data);
      dispatch(setUserProfile({token: response.token}));
    }
  } catch (error: any) {
    console.log("in changePassword ", error?.response);
    const validation = error?.response?.data?.message;
    if (validation) {
      dispatch(showErrorModel(validation));
    }
  }
};

const resetPassword = async (
  body: any,
  callback?: (res: AxiosResponse<ResponseTypes<any>>) => void,
) => {
  try {
    const response = await request<any>({
      method: "post",
      endPoint: "resetPassword",
      callback,
      body,
    });
    if (response?.code === 200) {
      console.log(response.data);
      // dispatch();
    }
  } catch (error: any) {
    console.log("in resetPassword ", error?.response?.data);
    const validation = error?.response?.data?.message;
    if (validation) {
      dispatch(showErrorModel(validation));
    }
  }
};

const getUserProfile = async (
  callback?: (res: AxiosResponse<ResponseTypes<User>>) => void,
) => {
  try {
    const response = await request<any>({
      method: "get",
      endPoint: "userProfile",
      callback,
    });
    if (response?.code === 200) {
      console.log("in getUserProfile ", response);
      dispatch(setUserProfile(response));
    }
  } catch (error: any) {
    console.log("in getUserProfile error: ", error?.response?.data);
    const validation = error?.response?.data?.message;
    if (validation) {
      // dispatch(showErrorModel(validation));
    }
  }
};

const updateUserData = async (
  body: FormData,
  callback?: (res: AxiosResponse<ResponseTypes<User>>) => void,
) => {
  try {
    const response = await request<User, FormData>({
      method: "post",
      endPoint: "updateUserProfile",
      callback,
      body,
    });
    if (response?.code === 200) {
      console.log(response.data);
      dispatch(setUserProfile(response));
    }
  } catch (error: any) {
    console.log("in updateUserProfile", error?.response?.data.message);
    const validation = error?.response?.data?.validation;
    if (validation) {
      const errors = combineErrorMessages(validation);
      dispatch(showErrorModel(errors));
    }
  }
};

export {
  // registerUserForm,
  userLogin,
  userLogout,
  getUserProfile,
  updateUserData,
  forgetPassword,
  changePassword,
  confirmOtp,
  resetPassword,
};
