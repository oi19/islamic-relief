import {createSlice} from "@reduxjs/toolkit";
import {NotificationsTypes} from "../../@types";

type InitialState = {
  notifications: NotificationsTypes[];
};
const initialState: InitialState = {
  notifications: [],
};
const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
  },
});

export const {setNotifications} = notificationSlice.actions;

export default notificationSlice.reducer;
