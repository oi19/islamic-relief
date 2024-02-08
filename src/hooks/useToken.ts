import {useAppSelector} from "../redux";

export const useToken = () =>
  useAppSelector(state => state.doctorReducer?.token);
