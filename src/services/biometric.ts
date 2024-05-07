import {
  AsyncStorageKeys,
  BiometricErrors,
  BioMetricType,
  translate,
  // iphoneModelsWithTouchId,
} from "../helpers";
import ReactNativeBiometrics from "react-native-biometrics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert, Platform} from "react-native";
import deviceInfoModule from "react-native-device-info";
import {isIphoneX} from "../styles/dimensions";

const checkBiometricType = async (
  isBiometricSupport: (Boolean) => void,
  biometricTypeChanged: (string) => void,
) => {
  await ReactNativeBiometrics.isSensorAvailable().then(
    (biometricObject: {available: any; biometryType: any}) => {
      const {available, biometryType} = biometricObject;
      if (available && biometryType === ReactNativeBiometrics.TouchID) {
        isBiometricSupport(true);
        biometricTypeChanged(BioMetricType.TOUCH_ID);
      } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
        biometricTypeChanged(BioMetricType.FACE_ID);
        isBiometricSupport(true);
      } else if (
        available &&
        biometryType === ReactNativeBiometrics.Biometrics
      ) {
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
    },
  );
};

const confirmBiometric = (
  isValidBiometric: (Boolean) => void,
  BreakException: (Boolean) => void,
) => {
  ReactNativeBiometrics.simplePrompt({
    promptMessage: " ",
    cancelButtonText: localizedString(LocalizationKeys.CANCEL),
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
