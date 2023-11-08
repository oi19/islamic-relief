import React, {memo} from "react";
import {NavigationContainer} from "@react-navigation/native";
import MainStack from "./main-stack";

function NavigationApp() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default memo(NavigationApp);
