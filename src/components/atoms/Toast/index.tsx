import React, {useEffect, useState} from "react";
import {Animated} from "react-native";
import {Text} from "..";
import {styles} from "./styles";
import {closeToast, dispatch, useAppSelector} from "../../../redux";

interface ToastProps {
  message: string;
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  duration = 3000, // default duration is 3 seconds
}) => {
  const {showToast, toastMessage} = useAppSelector(state => state.globalReduce);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(({finished}) => {
        if (finished) {
          dispatch(closeToast());
        }
      });
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, fadeAnim, showToast]);

  if (showToast) {
    return (
      <Animated.View style={[styles.toastContainer, {opacity: fadeAnim}]}>
        <Text fontFamily="NORMAL" fontSize="FS14" style={styles.toastText}>
          {toastMessage}
        </Text>
      </Animated.View>
    );
  }
};

export default Toast;
