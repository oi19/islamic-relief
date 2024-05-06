import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {yupResolver} from "@hookform/resolvers/yup";
import {RouteProp, useRoute} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {Keyboard, ScrollView, View} from "react-native";
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

const Login = () => {
  const {
    params: {navigateTo},
  } = useRoute<RouteProp<MainAppStackTypes, "Login">>();
  const {goBack, navigate} =
    useNavigationHooks<MainNavigationAllScreensTypes>();
  const [isMobile, setIsMobile] = useState<boolean>(true);

  const errorModalRef = React.useRef<BottomSheetModal>(null);
  const countryModalRef = React.useRef<BottomSheetModal>(null);
  const loginLoader = useLoader("login");

  const {
    setValue,
    handleSubmit,
    getValues,
    clearErrors,
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

  // useEffect(() => {

  //   if(getValues)
  // }, [getValues("mobile")]);

  const handlerforgetPasswordPressed = () => {
    navigate("ForgetPassword");
  };

  const onChangeTextHandler = (fieldName: any, text: string) => {
    clearErrors(fieldName);
    setValue(fieldName, text);
    mobileOrEmailInputChecker(text);
  };

  const mobileOrEmailInputChecker = (fieldInput: string | number) => {
    const str = String(fieldInput);

    // Use a regular expression to test if the string contains only numbers
    const containsOnlyNumbers = /^\d+$/.test(str);

    if (containsOnlyNumbers && str == "") {
      console.log("Input contains only numbers");
      setIsMobile(true);
    } else {
      setIsMobile(false);
      console.log(
        "Input contains characters or a combination of characters and numbers",
      );
    }
  };

  const goToSignUp = () => {
    navigate("SignUp");
  };

  const onCloseCountryModal = () => {
    countryModalRef.current?.close();
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
          keyboardType="phone-pad"
          maxLength={11}
          isMobile={isMobile}
          inputContainerStyle={styles.inputContainer}
          onChangeText={text => onChangeTextHandler("mobile", text)}
          error={errors?.mobile?.message?.toString()}
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
        <Button iconName="faceID" iconStyle={styles.socialIconStyle} />
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
          <Button
            iconName="apple"
            style={styles.socialButton}
            iconStyle={styles.socialIconStyle}
          />
          <Button
            iconName="google"
            style={styles.socialButton}
            iconStyle={styles.socialIconStyle}
          />
          <Button
            iconName="facebook"
            style={styles.socialButton}
            iconStyle={styles.socialIconStyle}
          />
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
            onPress={goToSignUp}
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
      {loginLoader && <View style={styles.disableClicks} />}
    </View>
  );
};

export default Login;
