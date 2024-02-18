import {handlePagination} from "../../helpers/utils";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {PaginationTypes, ChatType, MessageType} from "../../@types";

type InitialState = {
  oldChats?: ChatType[];
  sentMessages: MessageType[];
  lastSentMessagePage: string | null;
};
const initialState: InitialState = {
  oldChats: [],
  sentMessages: [],
  lastSentMessagePage: "on",
};
const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setOldChats: (state, {payload}: PayloadAction<ChatType[]>) => {
      state.oldChats = payload;
    },
    setSentMessage: (
      state,
      {
        payload: {data, current_page, next_page_url},
      }: PayloadAction<PaginationTypes<MessageType>>,
    ) => {
      state.sentMessages = handlePagination(
        state.sentMessages,
        data,
        current_page,
      );
      state.lastSentMessagePage = next_page_url;
    },
    sendMessage: (
      state,
      {payload: {data}}: PayloadAction<{data: MessageType}>,
    ) => {
      console.log("Message sent from redux", data);

      state.sentMessages = [data, ...state.sentMessages];
    },
    clearLastSentMessagePage: state => {
      state.lastSentMessagePage = "on";
    },
  },
});

export const {
  setOldChats,
  setSentMessage,
  sendMessage,
  clearLastSentMessagePage,
} = chatsSlice.actions;
export default chatsSlice.reducer;
