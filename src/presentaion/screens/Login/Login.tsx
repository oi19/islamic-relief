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
import {UserCredentials} from "react-native-keychain";
import {retreiveCredentials} from "../../../services/keychain";
import AndroidOpenSettings from "react-native-android-open-settings";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {
  checkBiometric,
  checkBiometricType,
  confirmBiometric,
  enableBiometric,
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

  const [biometricType, setBiometricType] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+20");
  const [mobileOrEmailFieldInput, setMobileOrEmailFieldInput] =
    useState<string>();
  const loginLoader = useLoader("login");

  const {
    setValue,
    handleSubmit,
    clearErrors,
    formState: {errors},

    reset,
  } = useForm({
    resolver: yupResolver(AccountLoginSchema),
  });

  const handleLoginPressed = async (data: LoginTypes) => {
    Keyboard.dismiss();
    onLoginSubmit(data);
  };

  const onLoginSubmit = (data: LoginTypes) => {
    // userLogin(data, res => {
    // if (res) {
    console.log(data);
    navigate("TabsBottomStack");
    // }
    // });
  };

  const completionCredentialsHandler = () => {
    retreiveCredentials(
      (credentials: UserCredentials) => {
        console.log("credentials");
        onLoginSubmit(credentials);
      },
      (error: any) => {
        if (error) {
          // setLoadingVisible(false);
          // showError(localizedString(LocalizationKeys.LOGIN_FAIL));
        }
      },
    );
  };

  const onBiometricActivate = () => {
    checkBiometricType(
      async (isSupport: Boolean) => {
        if (isSupport) {
          confirmBiometric(
            (isValidBiometric: Boolean) => {
              if (isValidBiometric) {
                // setIsEnable(true);
                enableBiometric();
                onLoginSubmit({});
                completionCredentialsHandler();
                // updateProfileData(Settings_Type.BIOMETRIC, true)
              } else {
                // setIsEnable(false);
                // updateProfileData(Settings_Type.BIOMETRIC, false)
              }
            },
            (BreakException: Boolean) => {
              console.log(BreakException);
            },
          );
        } else {
          Alert.alert(`${""}`, `يلزم اضافه اذن البيومترية`, [
            {
              text: `الغاء`,
              onPress: () => {},
              style: "cancel",
            },
            {
              text: `الذهاب إلى الاعدادات`,
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

  const onChangeTextHandler = (
    fieldName: "identifier" | "password",
    text: string,
  ) => {
    clearErrors();
    if (fieldName == "identifier") {
      mobileOrEmailInputChecker(fieldName, text);
      return;
    }
    setValue(fieldName, text);
  };

  const mobileOrEmailInputChecker = (
    fieldName: "identifier" | "password",
    fieldInput: any,
  ) => {
    let checkedInput = fieldInput;
    const str = String(fieldInput);
    const containsOnlyNumbers = /^\d+$/.test(str);
    if (containsOnlyNumbers && str !== "") {
      console.log("Input contains only numbers");
      checkedInput = countryCode + fieldInput;
      setIsMobile(true);
    } else {
      setIsMobile(false);
      console.log(
        "Input contains characters or a combination of characters and numbers",
      );
    }
    setValue(fieldName, checkedInput);
    setMobileOrEmailFieldInput(fieldInput);
  };

  const signUpPressed = () => {
    clearErrors();
    reset();
    navigate("SignUp");
  };

  const handlerforgetPasswordPressed = () => {
    navigate("ForgetPassword");
  };

  const onCountryModalSelect = (item: any) => {
    setCountryCode(item?.countryCode);
    setValue("identifier", countryCode);
    onCloseCountryModal();
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
        authHeader={true}
        style={{
          backgroundColor: Colors.WHITE,
          paddingHorizontal: Spacing.S16,
        }}
        onBack={goBack}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styles.content}
        contentContainerStyle={{
          justifyContent: "space-between",
          flexGrow: 1,
        }}>
        <View>
          <Text fontFamily="BOLD" fontSize="FS24">
            {"اهلا بك"}
          </Text>
          <Text fontFamily="MEDIUM" fontSize="H3" color="INPUT_TEXT">
            {"تسجيل الدخول لحسابك"}
          </Text>
          <Input
            key={"login_mobile"}
            placeholder={"ادخل بريدك الالكتروني / رقم التليفون"}
            style={styles.input}
            keyboardType={isMobile ? "phone-pad" : "default"}
            isMobile={isMobile}
            inputContainerStyle={styles.inputContainer}
            onChangeText={text => onChangeTextHandler("identifier", text)}
            error={errors?.identifier?.message?.toString()}
            countryButtonHandler={onOpenCountryModal}
            countryCode={countryCode}
            value={mobileOrEmailFieldInput}
          />
          {isMobile === false ? (
            <>
              <Input
                key={"login_password"}
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
            </>
          ) : null}
          <Button
            onPress={() => onBiometricActivate()}
            iconName="faceID"
            iconStyle={styles.socialIconStyle}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
            }}
          />
          <Button
            text={translate("Form.login")}
            type="standard"
            onPress={handleSubmit(handleLoginPressed)}
            style={styles.button}
            textStyle={{fontSize: "FS16"}}
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
        </View>
        <ViewRow
          style={{
            justifyContent: "center",
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
      </KeyboardAwareScrollView>
      <CountryModal
        forwardRef={countryModalRef}
        onSelect={item => onCountryModalSelect(item)}
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
