import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useState} from "react";
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
import {AccountSignUpSchema} from "../../../helpers/validationSchema";
import {useLoader, useNavigationHooks} from "../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {userLogin} from "../../../redux";
import {Colors, Spacing} from "../../../styles";
import {styles} from "./styles";
import CountryModal from "../../components/shared/CountryModal/CountryModal";

import {IconsName} from "../../../assets/svgs";

const socialMediaList: IconsName[] = ["apple", "google", "facebook"];

const SignUp = () => {
  const {goBack, navigate} =
    useNavigationHooks<MainNavigationAllScreensTypes>();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const errorModalRef = React.useRef<BottomSheetModal>(null);
  const countryModalRef = React.useRef<BottomSheetModal>(null);

  const [countryCode, setCountryCode] = useState<string>("+20");
  const [mobileOrEmailFieldInput, setMobileOrEmailFieldInput] =
    useState<string>();
  const loginLoader = useLoader("login");

  const {
    setValue,
    handleSubmit,
    clearErrors,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(AccountSignUpSchema),
  });

  const handleLoginPressed = async (data: LoginTypes) => {
    Keyboard.dismiss();

    onLoginSubmit(data);
  };

  const onLoginSubmit = (data: LoginTypes) => {
    // userLogin(data, res => {
    // if (res) {
    navigate("TabsBottomStack");
    // }
    // });
  };

  const onChangeTextHandler = (
    fieldName: "identifier" | "password" | "password_confirmation",
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
    fieldName: "identifier",
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

  const loginPressed = () => {
    clearErrors();
    goBack();
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
            {"انشئ حسابك الان بكل سهولة"}
          </Text>
          <Input
            key={"signup_mobile"}
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
                key={"signup_password"}
                password
                placeholder={"كلمة المرور "}
                style={styles.input}
                inputContainerStyle={styles.inputContainer}
                onChangeText={text => onChangeTextHandler("password", text)}
                error={errors?.password?.message?.toString()}
              />
              <Input
                key={"signup_password_confirmation"}
                password
                placeholder={"تأكيد كلمة المرور "}
                style={styles.input}
                inputContainerStyle={styles.inputContainer}
                onChangeText={text =>
                  onChangeTextHandler("password_confirmation", text)
                }
                error={errors?.password_confirmation?.message?.toString()}
              />
            </>
          ) : null}

          <Button
            text={"انشاء حساب"}
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
            {"لديك حساب بالفعل؟  "}
          </Text>
          <Button
            text={" تسجيل الدخول"}
            textStyle={{
              color: "PRIMARY",
            }}
            onPress={loginPressed}
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

export default SignUp;
