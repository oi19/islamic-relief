import {SetStateAction, useEffect, useState} from "react";
import {Platform, Alert} from "react-native";
import ReactNativeBiometrics from "react-native-biometrics";
import {
  AsyncStorageKeys,
  BioMetricType,
  BiometricErrors,
  translate,
} from "../helpers";
import {isIphoneX} from "../styles/dimensions";
import AsyncStorage from "@react-native-community/async-storage";

const useBiometricAuth = () => {
  const [isBiometricSupport, setBiometricSupport] = useState<boolean>();
  const [isBiometricEnabled, setBiometricEnabled] = useState<boolean>();
  const [biometricType, setBiometricType] = useState("");

  useEffect(() => {
    checkBiometricSupport();
  }, []);

  const checkBiometricType = async (
    isBiometricSupport: (isBiometricSupport: boolean) => void,
    biometricTypeChanged: (biometricType: BioMetricType) => void,
  ) => {
    await ReactNativeBiometrics.isSensorAvailable().then(biometricObject => {
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
          // Platform.OS == "ios" &&
          // iphoneModelsWithTouchId.includes(deviceInfoModule.getModel()) == false
          isIphoneX()
        ) {
          biometricTypeChanged(BioMetricType.FACE_ID);
        } else {
          biometricTypeChanged(BioMetricType.TOUCH_ID);
        }
      }
    });
  };

  const checkBiometricSupport = async () => {
    const biometric = await checkBiometric();
    checkBiometricType(
      (isSupport: boolean) => {
        if (biometric && isSupport) {
          setBiometricEnabled(true);
          setBiometricSupport(isSupport);
        } else {
          setBiometricEnabled(false);
        }
      },
      (biometricTypeText: SetStateAction<string>) => {
        setBiometricType(biometricTypeText);
      },
    );
  };

  const checkBiometric = async () => {
    let biometricstatus = await AsyncStorage.getItem(
      AsyncStorageKeys.BIOMETRIC_KEY,
    );
    return biometricstatus;
  };

  const confirmBiometric = (completionHandler: () => void) => {
    // ReactNativeBiometrics.simplePrompt({
    //   promptMessage: " ",
    //   cancelButtonText: translate("Common.cancel"),
    // })
    //   .then((resultObject: {success: any}) => {
    //     const {success} = resultObject;
    //     if (success) {
    //       completionHandler();
    //     }
    //   })
    //   .catch((err: {message: string | BiometricErrors[]}) => {
    //     if (err.message.includes(BiometricErrors.LIMIT_EXCEEDED)) {
    //       if (Platform.OS === "ios") {
    //         Alert.alert(
    //           translate("Common.error")!,
    //           // translate(LocalizationKeys.BIOMETRIC_ERROR),
    //         );
    //       }
    //     }
    //   });
  };

  const onBiometricActivate = () => {
    checkBiometricType(
      async (isSupport: boolean) => {
        if (isSupport) {
          confirmBiometric(
            (isValidBiometric: boolean) => {
              if (isValidBiometric) {
                setIsEnable(true);
                enableBiometric();
                updateProfileData(Settings_Type.BIOMETRIC, true);
              } else {
                setIsEnable(false);
                updateProfileData(Settings_Type.BIOMETRIC, false);
              }
            },
            (BreakException: boolean) => {},
          );
        } else {
          Alert.alert(
            `${""}`,
            `${localizedString(LocalizationKeys.BIOMETRIC_PERMISSION_DENIED)}`,
            [
              {
                text: `${localizedString(LocalizationKeys.CANCEL)}`,
                onPress: () => {
                  setIsEnable(false);
                },
                style: "cancel",
              },
              {
                text: `${localizedString(LocalizationKeys.GO_TO_SETTING)}`,
                onPress: () => {
                  if (Platform.OS === "ios") {
                    Linking.openURL("App-Prefs:setting");
                  } else {
                    AndroidOpenSettings.generalSettings();
                  }
                },
              },
            ],
          );
        }
      },
      (biometricTypeText: string) => {},
    );
  };

  return {
    isBiometricSupport,
    isBiometricEnabled,
    biometricType,
    confirmBiometric,
  };
};

export default useBiometricAuth;
