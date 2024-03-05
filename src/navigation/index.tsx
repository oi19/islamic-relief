import React, {memo} from "react";
import {NavigationContainer} from "@react-navigation/native";
import MainStack from "./main-stack";
import {Toast, WarningMessageModel} from "../components";
import {BottomSheetModal} from "@gorhom/bottom-sheet";

function NavigationApp() {
  const globalErrorRef = React.useRef<BottomSheetModal>(null);

  return (
    <>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
      <WarningMessageModel forwardRef={globalErrorRef} />

      <Toast message="Hello" />
    </>
  );
}

export default memo(NavigationApp);
