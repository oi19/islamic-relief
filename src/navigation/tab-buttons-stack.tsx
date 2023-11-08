import React, {memo} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TabBottomComponent} from "./TabBottomComponent/TabBottomComponent";
import {TabsBottomStack} from "./navigation-types";
import {translate} from "../helpers";
import HomeStack from "./home-stack";
import {Chat, Prescriptions, Profile} from "../screens";

const Tab = createBottomTabNavigator<TabsBottomStack>();

function TabButtonsStack() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, lazy: true}}
      tabBar={(props: any) => <TabBottomComponent {...props} />}>
      <Tab.Screen
        initialParams={{icon: "home", text: translate("home")}}
        name="HomeStack"
        component={HomeStack}
      />

      <Tab.Screen
        initialParams={{icon: "document", text: translate("Prescription")}}
        name="Prescription"
        component={Prescriptions}
      />
      <Tab.Screen
        initialParams={{icon: "chat", text: translate("Chat")}}
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        initialParams={{icon: "profile", text: translate("Profile")}}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default memo(TabButtonsStack);
