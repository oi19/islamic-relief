import {AxiosResponse} from "axios";
import {
  ChatType,
  MessageType,
  PaginationTypes,
  ResponseTypes,
} from "../../@types";
import {request} from "../../api/request";
import {dispatch, setOldChats, setSentMessage} from "..";

const getOldChats = async (
  callback?: (res: AxiosResponse<ResponseTypes<ChatType>>) => void,
) => {
  try {
    const response = await request<any>({
      method: "get",
      endPoint: "oldChats",
      callback,
    });

    if (response?.code === 200) {
      dispatch(setOldChats(response.data));
    }
  } catch (error: any) {
    console.log("in getOldChats ", error);
  }
};

const getRoomMessages = async (
  page: number,
  receiverId?: number,
  callback?: (
    res: AxiosResponse<ResponseTypes<PaginationTypes<MessageType>>>,
  ) => void,
) => {
  try {
    const response = await request<
      PaginationTypes<MessageType>,
      {receiverId: number}
    >({
      method: "get",
      endPoint: "sentMessage",
      params: `/${receiverId}?page=${page}`,
      callback,
    });

    if (response?.code === 200 && response?.data) {
      dispatch(setSentMessage({...response.data, current_page: page}));
    }
  } catch (error: any) {
    console.log("in getOldChats ", error);
  }
};

const sendChatMessage = async (
  body: FormData,
  callback?: (res: AxiosResponse<ResponseTypes<MessageType>>) => void,
) => {
  try {
    await request<MessageType, FormData>({
      method: "post",
      endPoint: "sendMessage",
      body,
      callback,
    });
  } catch (error: any) {
    console.log("in sendChatMessage ", error);
  }
};

export {getOldChats, getRoomMessages, sendChatMessage};
