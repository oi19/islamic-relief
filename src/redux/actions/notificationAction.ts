import {AxiosResponse} from "axios";
import {request} from "../../api/request";
import {dispatch, setNotifications} from "..";
import {PaginationTypes, ResponseTypes, NotificationsTypes} from "../../@types";

const getNotifications = async (
  callback?: (
    res: AxiosResponse<ResponseTypes<PaginationTypes<NotificationsTypes>>>,
  ) => void,
) => {
  try {
    const response = await request<PaginationTypes<NotificationsTypes>>({
      method: "get",
      endPoint: "notifications",
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
      dispatch(setNotifications(response?.data?.data));
    }
  } catch (error: any) {
    console.log("in getNotifications ", error);
  }
};

export {getNotifications};
