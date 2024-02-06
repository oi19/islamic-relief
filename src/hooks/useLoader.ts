import {useSelector} from "react-redux";
import {RootState} from "../redux/store/configureStore";
import {ApisTypes} from "../api/api-types";

export const useLoader = (type: keyof ApisTypes) => {
  const isLoading: boolean = useSelector<RootState, boolean>(
    state => state.loadingReducer[type] || false,
  );

  return isLoading;
};
