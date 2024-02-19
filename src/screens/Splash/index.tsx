import React from "react";
import {Animated, Easing, View} from "react-native";
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
