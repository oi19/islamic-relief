import {combineReducers} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-community/async-storage";
import {persistReducer} from "redux-persist";

import loadingReducer from "./loadingReducer";
import globalReducer from "./globalReducer";

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

// const userPersistConfig = {
//   key: "profile",
//   storage: AsyncStorage,
//   keyPrefix: "redux-user",
//   whitelist: ["profile", "token"],
// };

const rootReducers = combineReducers({
  loadingReducer,
  globalReduce: persistReducer(globalPersistConfig, globalReducer),

  //   userReducer: persistReducer(userPersistConfig, userReducer),
});

export {rootPersistConfig, rootReducers};
