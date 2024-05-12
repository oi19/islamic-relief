import {RouteProp, useRoute} from "@react-navigation/native";
import React from "react";
import {Alert, BackHandler, View} from "react-native";
import WebView from "react-native-webview";
import {styles} from "./styles";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {useNavigationHooks} from "../../hooks";
import {Lottie} from "../../assets";

const ZoomRoom = () => {
  const {
    params: {zoomUrl},
  } = useRoute<RouteProp<MainAppStackTypes, "ZoomRoom">>();
  const {goBack} = useNavigationHooks();

  const [isLoading, setLoading] = React.useState(true);

  // Handle Back Of Default user
  React.useEffect(() => {
    const backAction = () => {
      goBack();
      return true; // Prevent default behavior (i.e., don't exit the app)
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, [goBack]);

  return (
    <View style={styles.rootScreen}>
      {isLoading && (
        <View style={styles.center}>
          <Lottie name="loading" />
        </View>
      )}
      <WebView
        onLoadEnd={() => setLoading(false)}
        onLoadStart={() => setLoading(true)}
        onMessage={event => {
          if (event.nativeEvent.data === "200") {
            Alert.alert("Zoom Success!");
            // dispatch(showSuccussModel("Payment Success "));
          } else {
            Alert.alert("Uri Failed!");
          }
        }}
        onNavigationStateChange={event => {
          if (event?.canGoBack && event?.title.includes("statusCode=200")) {
            Alert.alert("Zoom Success!");

            // dispatch(showSuccussModel("Payment Success "));
          } else if (event?.canGoBack && event?.title.includes("statusCode=")) {
            // dispatch(showErrorModel("Payment Failed !"));
          }
        }}
        onError={event => {
          console.log("onError", event);
        }}
        onHttpError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.log(
            "WebView received error status code: ",
            nativeEvent.statusCode,
          );
        }}
        style={styles.webViewContainer}
        source={{uri: zoomUrl}}
      />
    </View>
  );
};

export default ZoomRoom;
