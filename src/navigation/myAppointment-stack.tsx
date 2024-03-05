import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MyAppointmentStackTypes} from "./navigation-types";
import {
  AppointmentDetails,
  MyAppointment,
  RescheduleAppointment,
} from "../screens";

const MyAppointmentStack = () => {
  const Stack = createNativeStackNavigator<MyAppointmentStackTypes>();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MyAppointment">
      <Stack.Screen name="MyAppointment" component={MyAppointment} />
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Stack.Screen
        name="RescheduleAppointment"
        component={RescheduleAppointment}
      />
    </Stack.Navigator>
  );
};

export default MyAppointmentStack;
