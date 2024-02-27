import {AxiosResponse} from "axios";
import {HomePageTypes, ResponseTypes} from "../../@types";
import {request} from "../../api/request";
import {dispatch, setHomeData} from "..";

const getHomePageData = async (
  callback?: (res: AxiosResponse<ResponseTypes<HomePageTypes>>) => void,
) => {
  try {
    const response = await request<HomePageTypes>({
      method: "get",
      endPoint: "homePage",
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
      dispatch(setHomeData(response.data));
    }
  } catch (error: any) {
    console.log("in getHomePageData ", error);
  }
};

const setFcmToken = async (
  body: {device_token: string},
  callback?: (res: AxiosResponse<ResponseTypes<any>>) => void,
) => {
  try {
    const response = await request<any, {device_token: string}>({
      method: "post",
      endPoint: "change_fcm_token",
      body,
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
    }
  } catch (error: any) {
    console.log("in setFcmToken ", error);
  }
};
export {getHomePageData, setFcmToken};
