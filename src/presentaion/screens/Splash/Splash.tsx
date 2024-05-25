import React, {useEffect} from "react";
import {Animated, Easing, ImageBackground, View} from "react-native";

import {
  getAreas,
  getCities,
  getCountries,
  getSpecialties,
  setChooseLanguageFirstTime,
  useAppSelector,
  useDispatch,
} from "../../../redux";
// import {usePushNotification} from "../../hooks/usePushNotification";
import {Svgs} from "../../../assets";
import Button from "../../components/shared/Button/Button";
import {useNavigationHooks, useToken} from "../../../hooks";
import I18n, {isRTL} from "../../../locals/i18n-config";
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";
import {styles} from "./styles";
import {changeLanguage} from "../../../helpers";

const Splash: React.FC = () => {
  const imageSlideAnim = React.useRef(new Animated.Value(500)).current;
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();
  const dispatch = useDispatch();
  const {chooseLanguageFirstTime, firstTime} = useAppSelector(
    state => state.globalReduce,
  );

  React.useEffect(() => {
    // const animationDuration = 1500; // Animation duration in milliseconds
    // Slide the image to the right with "smart animate" and "ease out" curve
    // Animated.timing(imageSlideAnim, {
    //   toValue: 0,
    //   duration: animationDuration,
    //   easing: Easing.out(Easing.exp),
    //   useNativeDriver: false, // Adjust to true if needed
    // }).start(({finished}) => {
    //   if (finished) {
    //     // && is_active === PermissionStatus.TRUE
    //     // if (!firstTime) {
    //     navigate("TabsBottomStack");
    //     // } else {
    //     //   navigate("OnBoarding");
    //     // }
    //   }
    // });
    if (true) {
      console.log("lang");
      setLanguageFirstTime("ar");
    }
    setTimeout(() => {
      navigate("Login", {
        navigateTo: undefined,
      });
    }, 1000);
  }, []);

  const setLanguageFirstTime = (language: "ar" | "en") => {
    dispatch(setChooseLanguageFirstTime());

    if (I18n.language !== language) {
      changeLanguage(language);
    } else {
      navigate("Login", {navigateTo: undefined});
    }
  };

  React.useEffect(() => {
    Promise.all([getSpecialties(), getCountries(), getCities(), getAreas(1)]);
  }, []);

  return (
    <ImageBackground
      style={styles.imageContainer}
      source={require("../../../assets/images/splash_screen.png")}
    />
    // <View style={styles.rootScreen}>

    //    <Animated.View
    //     style={[
    //       styles.imageContainer,
    //       {
    //         transform: [{translateY: imageSlideAnim}],
    //       },
    //     ]}>
    //     <Svgs name="slug" />
    //   </Animated.View>
    // </View>
  );
};

export default Splash;
