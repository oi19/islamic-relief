import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {RootState} from "..";
import {ServiceTypes} from "../../@types";
// import {Doctor} from "../../@types";
import {User} from "../../@types";
import {ResponseTypes} from "../../@types";
// import {packages} from "@screens/MyServices/data";

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
};

const initialState: InitialStateTypes = {
  profile: {} as User,
  token: null,
  services: servicesAdapter.getInitialState(),
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

      // const isService = data?.services && data?.services.length > 0;

      // if (isService) {
      //   const servicesList: any = isService ? data?.services : packages;

      //   servicesAdapter.setAll(state.services, servicesList);
      // }
    },

    // setClinic: (state, action) => {
    //   const {clinics} = state.profile;

    //   if (clinics && clinics.length > 0) {
    //     state.profile.clinics?.push(action?.payload);
    //   } else {
    //     state.profile.clinics = [action?.payload];
    //   }
    // },
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
    // setCurrentSubscription: (state, action) => {
    //   state.profile.current_subscription = action.payload;
    // },
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
  // setClinic,
  // setCurrentSubscription,
} = userSlice.actions;
export default userSlice.reducer;

// Selectors from the services adapter
export const {selectAll: selectAllServices, selectById: selectServiceById} =
  servicesAdapter.getSelectors<RootState>(
    state => state.userReducer.services,
  );
