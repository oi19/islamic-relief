import {AxiosResponse} from "axios";
import {Doctor, ResponseTypes} from "../../@types";
import {request} from "../../api/request";

const getDoctors = async (
  filter?: {
    orderBy: string;
    orderType: "asc" | "desc";
  },
  param?: string,
  callback?: (res: AxiosResponse<ResponseTypes<Doctor>>) => void,
) => {
  let paramUrl;

  if (param) {
    paramUrl = `?${param}`;
  } else if (filter) {
    // ?order_by=clinics.price&order_type=asc
    paramUrl = `?order_by=${filter.orderBy}&order_type=${filter.orderType}`;
  }

  try {
    const response = await request<Doctor>({
      method: "get",
      endPoint: "doctors",
      params: paramUrl,
      callback,
    });
    if (response?.code === 200) {
    }
  } catch (error: any) {
    console.log("in getDoctors ", error?.response?.data);
  }
};
export {getDoctors};
