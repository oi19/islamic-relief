import {combineReducers} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-community/async-storage";
import {persistReducer} from "redux-persist";

import loadingReducer from "./loadingReducer";
import globalReducer from "./globalReducer";
import createAccountReducer from "./createAccountReducer";
import userReducer from "./userReducer";
import homeReducer from "./homeReducer";
import notificationReducer from "./notificationReducer";
import transactionsReducer from "./transactionsReducer";
import chatsReducer from "./chatsReducer";
import doctorsReducer from "./doctorsReducer";
import appointmentsReducer from "./appointmentsReducer";
import favouriteReducer from "./favouriteReducer";

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  keyPrefix: "redux-root",
  whitelist: [],
};

const globalPersistConfig = {
  key: "global",
  storage: AsyncStorage,
  keyPrefix: "redux-global",
  whitelist: ["firstTime", "chooseLanguageFirstTime"],
};

const createAccountPersistConfig = {
  key: "createAccount",
  storage: AsyncStorage,
  keyPrefix: "redux-create-account",
  whitelist: ["userRegister"],
};

const userPersistConfig = {
  key: "user",
  storage: AsyncStorage,
  keyPrefix: "redux-user",
  whitelist: ["profile", "token"],
};

const rootReducers = combineReducers({
  loadingReducer,
  homeReducer,
  notificationReducer,
  transactionsReducer,
  chatsReducer,
  doctorsReducer,
  appointmentsReducer,
  favouriteReducer,
  userReducer: persistReducer(userPersistConfig, userReducer),
  globalReduce: persistReducer(globalPersistConfig, globalReducer),
  createAccountReducer: persistReducer(
    createAccountPersistConfig,
    createAccountReducer,
  ),
});

export {rootPersistConfig, rootReducers};
