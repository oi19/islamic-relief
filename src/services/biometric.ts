import {
  AsyncStorageKeys,
  BiometricErrors,
  BioMetricType,
  translate,
  // iphoneModelsWithTouchId,
} from "../helpers";
import ReactNativeBiometrics from "react-native-biometrics";
import * as all from "react-native-biometrics";
import AsyncStorage from "@react-native-community/async-storage";
import {Alert, Platform} from "react-native";
// import deviceInfoModule from "react-native-device-info";
import {isIphoneX} from "../styles/dimensions";

console.log(ReactNativeBiometrics["isSensorAvailable"]);
const checkBiometricType = async (
  isBiometricSupport: (arg0: Boolean) => void,
  biometricTypeChanged: (arg0: string) => void,
) => {
  try {
    const {available, biometryType} =
      await ReactNativeBiometrics.isSensorAvailable();
    if (available && biometryType === ReactNativeBiometrics.TouchID) {
      isBiometricSupport(true);
      biometricTypeChanged(BioMetricType.TOUCH_ID);
    } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
      biometricTypeChanged(BioMetricType.FACE_ID);
      isBiometricSupport(true);
    } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
      biometricTypeChanged(BioMetricType.BIOMETRICS);
      isBiometricSupport(true);
    } else {
      isBiometricSupport(false);
      if (
        //   Platform.OS == "ios" &&
        //   iphoneModelsWithTouchId.includes(deviceInfoModule.getModel()) == false
        isIphoneX()
      ) {
        biometricTypeChanged(BioMetricType.FACE_ID);
      } else {
        biometricTypeChanged(BioMetricType.TOUCH_ID);
      }
    }
  } catch (e) {
    console.log(e);
  }
};

const confirmBiometric = (
  isValidBiometric: (arg0: Boolean) => void,
  BreakException: (arg0: Boolean) => void,
) => {
  ReactNativeBiometrics.simplePrompt({
    promptMessage: " ",
    // cancelButtonText: localizedString(LocalizationKeys.CANCEL),
    cancelButtonText: "Cancel",
  })
    .then(resultObject => {
      const {success} = resultObject;

      if (success) {
        isValidBiometric(true);
      } else {
        isValidBiometric(false);
      }
    })
    .catch(err => {
      if (err.message.includes(BiometricErrors.LIMIT_EXCEEDED)) {
        BreakException(false);
      }
    });
};

const enableBiometric = async () => {
  await AsyncStorage.setItem(
    AsyncStorageKeys.BIOMETRIC_KEY,
    BioMetricType.BIOMETRICS,
  );
};

const disableBiometric = async () => {
  await AsyncStorage.removeItem(AsyncStorageKeys.BIOMETRIC_KEY);
};

const checkBiometric = async () => {
  let biometricstatus = await AsyncStorage.getItem(
    AsyncStorageKeys.BIOMETRIC_KEY,
  );
  return biometricstatus;
};

export {
  checkBiometricType,
  confirmBiometric,
  enableBiometric,
  checkBiometric,
  disableBiometric,
};
