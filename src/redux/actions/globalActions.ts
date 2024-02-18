import {AxiosResponse} from "axios";
import {
  HomePageTypes,
  PackageTypes,
  ResponseTypes,
  SubscribeBody,
  SubscriptionTypes,
} from "../../@types";
import {request} from "../../api/request";
import {dispatch, setCurrentSubscription, setHomeData} from "..";

const getPackages = async (
  callback?: (res: AxiosResponse<ResponseTypes<PackageTypes>>) => void,
) => {
  try {
    const response = await request<PackageTypes>({
      method: "get",
      endPoint: "packages",
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
      // dispatch(setTitles(response.data));
    }
  } catch (error: any) {
    console.log("in getPackages ", error);
  }
};

const subscribePackages = async (
  body: SubscribeBody,
  callback?: (res: AxiosResponse<ResponseTypes<SubscriptionTypes>>) => void,
) => {
  try {
    const response = await request<SubscriptionTypes, SubscribeBody>({
      method: "post",
      endPoint: "subscribePackages",
      body,
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
      dispatch(setCurrentSubscription(response?.data));
    }
  } catch (error: any) {
    console.log("in subscribePackages ", error?.response?.data);
  }
};

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
export {getHomePageData, getPackages, setFcmToken, subscribePackages};
