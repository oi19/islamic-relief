import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {yupResolver} from "@hookform/resolvers/yup";
import {RouteProp, useRoute} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {
  Alert,
  Keyboard,
  Linking,
  Platform,
  ScrollView,
  View,
} from "react-native";
import {LoginTypes} from "../../../@types";

import Button from "../../components/shared/Button/Button";
import Input from "../../components/shared/Input/Input";
import Text from "../../components/shared/Text/Text";
import Line from "../../components/shared/Line";
import ViewRow from "../../components/shared/ViewRow/ViewRow";
import Header from "../../components/shared/Header";
import ErrorMessageModal from "../../../components/models/ErrorMessageModal";
import {translate} from "../../../helpers";
import {AccountLoginSchema} from "../../../helpers/validationSchema";
import {useLoader, useNavigationHooks} from "../../../hooks";
import {
  MainAppStackTypes,
  MainNavigationAllScreensTypes,
} from "../../../navigation/navigation-types";
import {userLogin} from "../../../redux";
import {Colors, Spacing} from "../../../styles";
import {styles} from "./styles";
import CountryModal from "../../components/shared/CountryModal/CountryModal";
import useBiometricAuth from "../../../hooks/useBiometricAuth";
import useKeychain from "../../../hooks/useKeychain";
import {UserCredentials} from "react-native-keychain";
import {retreiveCredentials} from "../../../services/keychain";
import AndroidOpenSettings from "react-native-android-open-settings";
import {
  checkBiometric,
  checkBiometricType,
  confirmBiometric,
} from "../../../services/biometric";
import {IconsName} from "../../../assets/svgs";

const socialMediaList: IconsName[] = ["apple", "google", "facebook"];

const Login = () => {
  const {
    params: {navigateTo},
  } = useRoute<RouteProp<MainAppStackTypes, "Login">>();
  const {goBack, navigate} =
    useNavigationHooks<MainNavigationAllScreensTypes>();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const errorModalRef = React.useRef<BottomSheetModal>(null);
  const countryModalRef = React.useRef<BottomSheetModal>(null);
  const [isBiometricSupport, setBiometricSupport] = useState<Boolean | null>(
    null,
  );
  const [isBiometricEnabled, setBiometricEnabled] = useState<Boolean | null>(
    null,
  );
  const [biometricType, setBiometricType] = useState<string>("");
  const [credentials, setCredentials] = useState<any>();
  const [error, setError] = useState<any>(null);

  const loginLoader = useLoader("login");

  const {
    setValue,
    handleSubmit,
    clearErrors,
    getValues,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(AccountLoginSchema),
  });

  const handleLoginPressed = async (data: LoginTypes) => {
    Keyboard.dismiss();
    userLogin(data, res => {
      if (res) {
        navigate("TabsBottomStack");
      }
    });
  };

  const onFocuseHandler = () => {
    // setLoadingVisible(false);

    completionCredentialsHandler(credentials => {
      return setCredentials(credentials);
    });
  };

  const completionCredentialsHandler = (
    completionFunction: (credentials: UserCredentials) => void,
  ) => {
    retreiveCredentials(
      (credentials: UserCredentials) => {
        completionFunction(credentials);
      },
      (error: any) => {
        if (error) {
          // setLoadingVisible(false);
          // showError(localizedString(LocalizationKeys.LOGIN_FAIL));
        }
      },
    );
  };

  useEffect(() => {
    checkBiometricSupport();
  }, []);

  useEffect(() => {
    if (error) {
      // setLoadingVisible(false);
    }
  }, [error]);

  const checkBiometricSupport = async () => {
    const biometric = await checkBiometric();
    checkBiometricType(
      (isSupport: Boolean) => {
        if (biometric && isSupport) {
          setBiometricEnabled(true);
          setBiometricSupport(isSupport);
        } else {
          setBiometricEnabled(false);
        }
      },
      (biometricTypeText: string) => {
        setBiometricType(biometricTypeText);
      },
    );
  };

  useEffect(() => {
    openBiometric();
  }, [isBiometricSupport, isBiometricEnabled]);

  const openBiometric = async () => {
    if (isBiometricSupport && isBiometricEnabled) {
      onBiometricSubmitPress();
    }
  };

  const onBiometricSubmitPress = () => {
    confirmBiometric(
      (isValidBiometric: Boolean) => {
        if (isValidBiometric) {
          // completionHandler(
          //   credentials["password"],
          //   navigation,
          //   credentials["username"],
          // );
          // setLoadingVisible(false);
        }
      },
      (BreakException: Boolean) => {
        setBiometricSupport(false);
        if (Platform.OS === "ios") {
          Alert.alert("Biometric Error");
        }
      },
    );
  };

  const onBiometricActivate = () => {
    console.warn("3ed");

    checkBiometricType(
      async (isSupport: Boolean) => {
        console.warn("3omda");

        if (isSupport) {
          console.warn("emad");
          confirmBiometric(
            (isValidBiometric: Boolean) => {
              if (isValidBiometric) {
                console.log("omar");
                // setIsEnable(true);
                // enableBiometric();
                // // updateProfileData(Settings_Type.BIOMETRIC, true)
              } else {
                console.log("omarr");

                // setIsEnable(false);
                // updateProfileData(Settings_Type.BIOMETRIC, false)
              }
            },
            (BreakException: Boolean) => {
              console.log(BreakException);
            },
          );
        } else {
          Alert.alert(`${""}`, `BIOMETRIC_PERMISSION_DENIED`, [
            {
              text: `Cancel`,
              onPress: () => {
                // setIsEnable(false);
              },
              style: "cancel",
            },
            {
              text: `Go To Settings`,
              onPress: () => {
                if (Platform.OS === "ios") {
                  Linking.openURL("App-Prefs:setting");
                } else {
                  AndroidOpenSettings.generalSettings();
                }
              },
            },
          ]);
        }
      },
      (biometricTypeText: string) => {},
    );
  };

  const onChangeTextHandler = (fieldName: any, text: string) => {
    clearErrors(fieldName);
    setValue(fieldName, text);
    // mobileOrEmailInputChecker(text);
  };

  useEffect(() => {
    const mobileOrEmailInput: string = getValues("mobile");
    if (
      mobileOrEmailInput != null ||
      mobileOrEmailInput !== "" ||
      String(mobileOrEmailInput).length > 1
    ) {
      mobileOrEmailInputChecker(mobileOrEmailInput);
    }
  }, [getValues("mobile")]);

  const mobileOrEmailInputChecker = (fieldInput: string | number) => {
    const str = String(fieldInput);

    // Use a regular expression to test if the string contains only numbers
    const containsOnlyNumbers = /^\d+$/.test(str);

    if (containsOnlyNumbers && str !== "") {
      console.log("Input contains only numbers");

      setIsMobile(true);
    } else {
      setIsMobile(false);
      console.log(
        "Input contains characters or a combination of characters and numbers",
      );
    }
  };

  const signUpPressed = () => {
    navigate("SignUp");
  };

  const handlerforgetPasswordPressed = () => {
    navigate("ForgetPassword");
  };

  const onCloseCountryModal = () => {
    countryModalRef.current?.close();
  };
  const onOpenCountryModal = () => {
    countryModalRef.current?.present();
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={" "}
        style={{
          backgroundColor: Colors.WHITE,
          paddingHorizontal: Spacing.S16,
        }}
        onBack={goBack}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.content}
        contentContainerStyle={{justifyContent: "center"}}>
        <Text fontFamily="BOLD" fontSize="FS24">
          {"اهلا بك"}
        </Text>
        <Text fontFamily="MEDIUM" fontSize="H3" color="INPUT_TEXT">
          {"تسجيل الدخول لحسابك"}
        </Text>
        <Input
          placeholder={"ادخل بريدك الالكتروني / رقم التليفون"}
          style={styles.input}
          keyboardType={isMobile ? "phone-pad" : "default"}
          maxLength={isMobile ? 11 : 100}
          isMobile={isMobile}
          inputContainerStyle={styles.inputContainer}
          onChangeText={text => onChangeTextHandler("mobile", text)}
          error={errors?.mobile?.message?.toString()}
          countryButtonHandler={onOpenCountryModal}
        />
        <Input
          password
          placeholder={"كلمة المرور "}
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          onChangeText={text => onChangeTextHandler("password", text)}
          error={errors?.password?.message?.toString()}
        />

        <ViewRow style={styles.row}>
          <Button
            text={translate("Form.forgotPassword") + "؟"}
            textStyle={{
              fontFamily: "BOLD",
              fontSize: "FS11",
              color: "PRIMARY",
            }}
            onPress={handlerforgetPasswordPressed}
          />
        </ViewRow>
        <Button
          onPress={() => onBiometricActivate()}
          iconName="faceID"
          iconStyle={styles.socialIconStyle}
        />
        <Button
          text={translate("Form.login")}
          type="standard"
          onPress={handleSubmit(handleLoginPressed)}
          style={styles.button}
        />
        <ViewRow style={styles.row}>
          <Line style={styles.line} />
          <Text fontSize="FS14">{"أو"}</Text>
          <Line style={styles.line} />
        </ViewRow>

        <ViewRow style={styles.soicalContainer}>
          {socialMediaList.map(iconName => {
            return (
              <Button
                iconName={iconName}
                style={styles.socialButton}
                iconStyle={styles.socialIconStyle}
              />
            );
          })}
        </ViewRow>
        <ViewRow
          style={{
            justifyContent: "center",
            // position: "absolute",
            bottom: 0,
          }}>
          <Text fontSize="FS14" style={styles.hintText}>
            {"ليس لديك حساب؟"}
          </Text>
          <Button
            text={"سجل الان"}
            textStyle={{
              color: "PRIMARY",
            }}
            onPress={signUpPressed}
          />
          <Text fontSize="FS14" color="PRIMARY">
            {" "}
          </Text>
        </ViewRow>
      </ScrollView>
      <CountryModal
        forwardRef={countryModalRef}
        onSelect={onCloseCountryModal}
        selectedId={0}
      />

      <ErrorMessageModal
        forwardRef={errorModalRef}
        message={translate("Modal.Error")}
      />
      {/* {<BlurProgressView loadingDisabled={true} />} */}
    </View>
  );
};

export default Login;
