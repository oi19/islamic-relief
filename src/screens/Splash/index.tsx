import React from "react";
import {Animated, Easing, View} from "react-native";

import {
  getAreas,
  getCities,
  getCountries,
  getSpecialties,
  setFcmToken,
} from "../../redux";
import {usePushNotification} from "../../hooks/usePushNotification";
import {Svgs} from "../../assets";
import {Button, ViewRow} from "../../components";
import {useNavigationHooks} from "../../hooks";
import {isRTL} from "../../locals/i18n-config";
import {MainNavigationAllScreensTypes} from "../../navigation/navigation-types";
import {styles} from "./styles";
import {changeLanguage} from "../../helpers";

const Splash: React.FC = () => {
  const imageSlideAnim = React.useRef(new Animated.Value(500)).current;
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();
  const {
    getFCMToken,
    listenToBackgroundNotifications,
    listenToForegroundNotifications,
    onNotificationOpenedAppFromBackground,
    onNotificationOpenedAppFromQuit,
  } = usePushNotification();

  React.useEffect(() => {
    const animationDuration = 1500; // Animation duration in milliseconds
    // Slide the image to the right with "smart animate" and "ease out" curve
    Animated.timing(imageSlideAnim, {
      toValue: 0,
      duration: animationDuration,
      easing: Easing.out(Easing.exp),
      useNativeDriver: false, // Adjust to true if needed
    }).start();
  }, []);

  const chooseLanguageFirstTime = (language: "ar" | "en") => {
    changeLanguage(language);
    navigate("OnBoarding");
  };

  const listenToNotifications = React.useCallback(async () => {
    try {
      await onNotificationOpenedAppFromQuit();
      await listenToBackgroundNotifications();
      await listenToForegroundNotifications();
      await onNotificationOpenedAppFromBackground();
    } catch (error) {
      console.log(error);
    }
  }, [
    listenToBackgroundNotifications,
    listenToForegroundNotifications,
    onNotificationOpenedAppFromBackground,
    onNotificationOpenedAppFromQuit,
  ]);

  const getFcmToken = React.useCallback(async () => {
    const fcmToken = await getFCMToken();
    if (fcmToken) {
      setFcmToken({
        device_token: fcmToken,
      });
    }
  }, [getFCMToken]);

  React.useEffect(() => {
    Promise.all([listenToNotifications(), getFcmToken()]);
  }, [getFcmToken, listenToNotifications]);

  React.useEffect(() => {
    Promise.all([getCities(), getCountries(), getAreas(1), getSpecialties()]);
  }, []);

  return (
    <View style={styles.rootScreen}>
      <Animated.View
        style={[
          styles.imageContainer,
          {
            transform: [{translateY: imageSlideAnim}],
          },
        ]}>
        <Svgs name="slug" />
      </Animated.View>
      <ViewRow style={styles.buttonGroup}>
        <Button
          type={isRTL() ? "standard" : "border"}
          iconName={isRTL() ? undefined : "checked"}
          text="English"
          style={styles.button}
          onPress={() => {
            chooseLanguageFirstTime("en");
          }}
        />
        <Button
          type={isRTL() ? "border" : "standard"}
          iconName={isRTL() ? "checked" : undefined}
          text="عربي"
          style={styles.button}
          onPress={() => {
            chooseLanguageFirstTime("ar");
          }}
        />
      </ViewRow>
    </View>
  );
};

export default Splash;
