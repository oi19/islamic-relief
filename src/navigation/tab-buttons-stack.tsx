import React, {memo} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TabBottomComponent} from "./TabBottomComponent/TabBottomComponent";
import {TabsBottomStack} from "./navigation-types";
import {translate} from "../helpers";
import HomeStack from "./home-stack";
import {Notifications, Profile} from "../screens";
import MyActivityStack from "./myActivity-stack";
import ChatStack from "./chat-stack";
import MyAppointmentStack from "./myAppointment-stack";

const Tab = createBottomTabNavigator<TabsBottomStack>();

function TabButtonsStack() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        lazy: true,
        tabBarStyle: {
          backgroundColor: "red",
          // Set the background color to transparent
        },
      }}
      tabBar={(props: any) => <TabBottomComponent {...props} />}>
      <Tab.Screen
        initialParams={{icon: "home", text: translate("Home")}}
        name="HomeStack"
        component={HomeStack}
      />
      {/* <Tab.Screen
        initialParams={{icon: "document", text: translate("My Activity")}}
        name="MyActivityStack"
        component={MyAppointmentStack}
      /> */}
      <Tab.Screen
        initialParams={{icon: "chat", text: translate("Chat")}}
        name="ChatStackTypes"
        component={ChatStack}
      />

      {/* <Tab.Screen
        initialParams={{
          icon: "notifications",
          text: translate("Notifications"),
        }}
        name="Notifications"
        component={Notifications}
      /> */}

      <Tab.Screen
        initialParams={{icon: "profile", text: translate("Profile")}}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default memo(TabButtonsStack);
