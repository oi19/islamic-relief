import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {RootState} from "..";
import {
  ConfirmOtpResponse,
  ServiceTypes,
  User,
  UserAccountType,
} from "../../@types";
import {ResponseTypes} from "../../@types";

// Define the entity adapter
const servicesAdapter = createEntityAdapter<ServiceTypes>({
  selectId: service => service.id,
  // Other adapter configurations as needed
});

// Define the state type
type InitialStateTypes = {
  profile: User;
  token: string | null;
  services: ReturnType<typeof servicesAdapter.getInitialState>;
  otpData: ConfirmOtpResponse;
};

const initialState: InitialStateTypes = {
  profile: {} as User,
  token: null,
  services: servicesAdapter.getInitialState(),
  otpData: {} as ConfirmOtpResponse,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile: (
      state,
      {payload: {data, token}}: PayloadAction<ResponseTypes<User>>,
    ) => {
      console.log("action.payload", data, token);

      if (token) {
        state.token = token;
      }

      state.profile = data || ({} as User);
    },

    setServices: (state, action: PayloadAction<ServiceTypes[]>) => {
      servicesAdapter.setAll(state.services, action.payload);
    },
    updateService: (
      state,
      action: PayloadAction<{updatedService: ServiceTypes}>,
    ) => {
      const {updatedService} = action.payload;
      servicesAdapter.updateOne(state.services, {
        id: updatedService.id,
        changes: updatedService,
      });
    },

    setOtpToken: (
      state,
      {
        payload: {token, data},
      }: PayloadAction<ResponseTypes<ConfirmOtpResponse>>,
    ) => {
      if (token) {
        state.token = token;
      }
      if (data) {
        state.otpData = data;
      }
    },

    clearOtpToken: state => {
      state.otpData = {} as ConfirmOtpResponse;
    },
    logout: state => {
      state.token = null;
    },
  },
});

export const {
  setUserProfile,
  logout,
  setServices,
  updateService,
  setOtpToken,
  clearOtpToken,
  // setClinic,
  // setCurrentSubscription,
} = userSlice.actions;
export default userSlice.reducer;

// Selectors from the services adapter
export const {selectAll: selectAllServices, selectById: selectServiceById} =
  servicesAdapter.getSelectors<RootState>(state => state.userReducer.services);
