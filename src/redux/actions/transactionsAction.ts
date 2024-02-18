import {AxiosResponse} from "axios";
import {request} from "../../api/request";
import {dispatch} from "..";
import {setRequests, setTransactions} from "../reducers/transactionsReducer";
import {
  PaginationTypes,
  ResponseTypes,
  TransactionStatus,
  TransactionTypes,
} from "../../@types";

export const getTransactions = async (
  status: TransactionStatus,
  page?: number,

  callback?: (
    res: AxiosResponse<ResponseTypes<PaginationTypes<TransactionTypes>>>,
  ) => void,
) => {
  // page,per_page
  let uriParams = `?per_page=5&page=${page}`;

  if (Boolean(status) || status === 0) {
    uriParams += `&status=${status}`;
  }

  try {
    const response = await request<any>({
      method: "get",
      endPoint: "getTransactions",
      params: uriParams,
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
      if (TransactionStatus.Pending) {
        dispatch(setRequests(response?.data));
      } else {
        dispatch(setTransactions(response?.data));
      }
    }
  } catch (error: any) {
    console.log("in getTransactions ", error);
  }
};
