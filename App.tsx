import {StatusBar, StyleSheet, View} from "react-native";
import React from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {Colors} from "./src/styles";
import {persistor, store} from "./src/redux";
import NavigationApp from "./src/navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.rootScreen}>
        <StatusBar
          translucent
          barStyle="dark-content"
          animated
          backgroundColor={"rgba(0,0,0,0)"}
        />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GestureHandlerRootView style={{flex: 1}}>
              <BottomSheetModalProvider>
                <NavigationApp />
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </PersistGate>
        </Provider>
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
  },
});
