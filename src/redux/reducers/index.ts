import {combineReducers} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-community/async-storage";
// import {persistReducer} from "redux-persist";

import loadingReducer from "./loadingReducer";

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  keyPrefix: "redux-root",
  whitelist: [],
};

// const userPersistConfig = {
//   key: "profile",
//   storage: AsyncStorage,
//   keyPrefix: "redux-user",
//   whitelist: ["profile", "token"],
// };

const rootReducers = combineReducers({
  loadingReducer,
  //   userReducer: persistReducer(userPersistConfig, userReducer),
});

export {rootPersistConfig, rootReducers};
