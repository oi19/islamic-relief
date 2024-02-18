import {handlePagination} from "../../helpers/utils";
import {PayloadAction, createSlice} from "@reduxjs/toolkit";

import {PaginationTypes, TransactionTypes} from "../../@types";

type InitialState = {
  transactions: TransactionTypes[];
  requests: TransactionTypes[];
  lastPage: string | null;
};
const initialState: InitialState = {
  transactions: [],
  requests: [],
  lastPage: "on",
};

const transactionSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    setTransactions: (
      state,
      {payload}: PayloadAction<PaginationTypes<TransactionTypes>>,
    ) => {
      state.transactions = handlePagination<TransactionTypes>(
        state.transactions,
        payload?.data,
        payload.current_page,
      );

      state.lastPage = payload?.next_page_url;
    },
    setRequests: (
      state,
      {payload}: PayloadAction<PaginationTypes<TransactionTypes>>,
    ) => {
      state.requests = handlePagination<TransactionTypes>(
        state.requests,
        payload?.data,
        payload.current_page,
      );

      state.lastPage = payload?.next_page_url;
    },
    clearTransactions: state => {
      state.lastPage = "on";
    },
  },
});

export const {setTransactions, clearTransactions, setRequests} =
  transactionSlice.actions;

export default transactionSlice.reducer;
