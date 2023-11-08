import {Animated, Easing, StyleSheet, View} from "react-native";
import React from "react";
import {Colors} from "../../styles";
import {Svgs} from "../../assets";
import {useNavigationHooks} from "../../hooks";
import {MainNavigationAllScreensTypes} from "../../navigation/navigation-types";

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
    }).start(({finished}) => {
      if (finished) {
        navigate("OnBoarding");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignSelf: "center",
    width: "95%",
  },
});
