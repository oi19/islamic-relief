import {legacy_createStore as createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
// import reducer from './reducers'
import Config from "react-native-config";

const middleware = [thunk];
// if (Config.ENV !== "prod") {
//   middleware.push(createLogger())
// }

const store = createStore(
  // reducer,
  applyMiddleware(...middleware),
);

export default store;
