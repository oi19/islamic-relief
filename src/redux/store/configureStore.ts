import {configureStore} from "@reduxjs/toolkit";
import {rootReducers, rootPersistConfig} from "../reducers";
import {persistStore, persistReducer} from "redux-persist";
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducers),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables the serializable check for non-serializable actions
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
const useDispatch = () => useReduxDispatch<AppDispatch>();
const {dispatch} = store;

export {store, persistor, dispatch, useAppSelector, useDispatch};
