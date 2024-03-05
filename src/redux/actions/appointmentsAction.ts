import {AxiosResponse} from "axios";

import {combineErrorMessages} from "../../helpers";
import {
  AppointmentStatus,
  AppointmentsTypes,
  CreateAppointmentTypes,
  PaginationTypes,
  ResponseTypes,
  Slots,
} from "../../@types";
import {request} from "../../api/request";
import {dispatch} from "../store/configureStore";
import {setAppointments} from "../reducers/appointmentsReducer";
import {showErrorModel} from "../reducers/globalReducer";

const getAppointments = async (
  status?: AppointmentStatus | null,
  page?: number,
  callback?: (
    res: AxiosResponse<ResponseTypes<PaginationTypes<AppointmentsTypes>>>,
  ) => void,
) => {
  // page,per_page
  let uriParams = `?per_page=5&page=${page}`;

  if (status && page) {
    uriParams = `?per_page=5&status=${status}&page=${page}`;
  }

  try {
    const response = await request<any>({
      method: "get",
      endPoint: "getAppointments",
      params: uriParams,
      callback,
    });
    if (response?.code === 200) {
      dispatch(setAppointments(response?.data));
    }
  } catch (error: any) {
    console.log("in getAppointments ", error);
  }
};

const getAppointmentDetails = async (
  id?: number,
  callback?: (res: AxiosResponse<ResponseTypes<AppointmentsTypes>>) => void,
) => {
  try {
    const response = await request<AppointmentsTypes>({
      method: "get",
      endPoint: "getAppointments",
      params: `/${id}`,
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
    }
  } catch (error: any) {
    console.log("in getAppointmentDetails ", error);
  }
};

const changeAppointmentStatus = async (
  id: number,
  body: {
    status: AppointmentStatus;
  },
  callback?: (res: AxiosResponse<ResponseTypes<AppointmentsTypes>>) => void,
) => {
  try {
    const response = await request<
      AppointmentsTypes,
      {
        status: AppointmentStatus;
      }
    >({
      method: "post",
      endPoint: "changeAppointmentStatus",
      params: `/${id}/change-status`,
      body,
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
      // dispatch(setTitles(response.data));
    }
  } catch (error: any) {
    console.log("in changeAppointmentStatus ", error);
  }
};

const startAppointment = async (
  id?: number,
  callback?: (res: AxiosResponse<ResponseTypes<AppointmentsTypes>>) => void,
) => {
  try {
    const response = await request<AppointmentsTypes>({
      method: "get",
      endPoint: "getAppointments",
      params: `/${id}/start`,
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
    }
  } catch (error: any) {
    console.log("in startAppointment ", error);
  }
};

const rescheduleAppointment = async (
  body: {
    time: string;
    date: string;
    appointment_id?: number;
  },
  id?: number,
  callback?: (res: AxiosResponse<ResponseTypes<AppointmentsTypes>>) => void,
) => {
  try {
    const response = await request<
      AppointmentsTypes,
      {
        time: string;
        date: string;
        appointment_id?: number;
      }
    >({
      method: "post",
      endPoint: "rescheduleAppointment",
      body: {
        ...body,
        appointment_id: id,
      },
      callback,
    });

    if (response?.code === 200) {
      console.log(response);
    }
  } catch (error: any) {
    console.log("in updateAppointment ", error);
    const validation = error?.response?.data?.validation;
    if (validation) {
      const errors = combineErrorMessages(validation);
      dispatch(showErrorModel(errors));
    }
  }
};

const getClinicSlots = async (
  body: {
    date: string;
    clinic_id?: number;
  },
  callback?: (res: AxiosResponse<ResponseTypes<any>>) => void,
) => {
  try {
    const response = await request<
      any,
      {
        date: string;
        clinic_id?: number;
      }
    >({
      method: "post",
      endPoint: "clinicSlots",
      body,
      callback,
    });
    if (response?.code === 200) {
      console.log(response);
    }
  } catch (error: any) {
    console.log("in getClinicSlots ", error);
  }
};

const createAppointment = async (
  body: FormData,
  callback?: (res: AxiosResponse<ResponseTypes<AppointmentsTypes>>) => void,
) => {
  try {
    const response = await request<AppointmentsTypes, FormData>({
      method: "post",
      endPoint: "createAppointment",
      body,
      callback,
    });

    if (response?.code === 200) {
      console.log(response);
    }
  } catch (error: any) {
    console.log("in createAppointment ", error?.response?.data);
    const validation = error?.response?.data?.validation;
    if (validation) {
      const errors = combineErrorMessages(validation);

      dispatch(showErrorModel(errors));
    }
  }
};

export {
  getAppointments,
  changeAppointmentStatus,
  getAppointmentDetails,
  startAppointment,
  rescheduleAppointment,
  getClinicSlots,
  createAppointment,
};
