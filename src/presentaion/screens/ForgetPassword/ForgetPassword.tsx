import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Keyboard, View} from "react-native";
import {LoginTypes} from "../../../@types";

import Button from "../../components/shared/Button/Button";
import Input from "../../components/shared/Input/Input";
import Text from "../../components/shared/Text/Text";
import ViewRow from "../../components/shared/ViewRow/ViewRow";
import Header from "../../components/shared/Header";
import ErrorMessageModal from "../../../components/models/ErrorMessageModal";
import {translate} from "../../../helpers";
import {confirmEmailSchema} from "../../../helpers/validationSchema";
import {useLoader, useNavigationHooks} from "../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {userLogin} from "../../../redux";
import {Colors, Spacing} from "../../../styles";
import {styles} from "./styles";

const ForgetPassword = () => {
  const {goBack, navigate} =
    useNavigationHooks<MainNavigationAllScreensTypes>();

  const errorModalRef = React.useRef<BottomSheetModal>(null);

  const loginLoader = useLoader("login");

  const {
    setValue,
    handleSubmit,
    clearErrors,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(confirmEmailSchema),
  });

  const handleLoginPressed = async (data: any) => {
    Keyboard.dismiss();
    onSendOTPHandler(data);
  };

  const onSendOTPHandler = (data: LoginTypes) => {
    // userLogin(data, res => {
    // if (res) {
    navigate("OTP");
    // }
    // });
  };

  const onChangeTextHandler = (fieldName: "email", text: string) => {
    clearErrors();
    setValue(fieldName, text);
  };

  const loginPressed = () => {
    clearErrors();
    goBack();
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
            {"نسيت كلمة المرور؟"}
          </Text>
          <Text fontFamily="MEDIUM" fontSize="H3" color="INPUT_TEXT">
            {"الرجاء إدخال عنوان البريد الإلكتروني المرتبط بحسابك"}
          </Text>
          <Input
          autoFocus={true}
            key={"signup_mobile"}
            placeholder={"ادخل بريدك الالكتروني "}
            style={styles.input}
            keyboardType={"email-address"}
            inputContainerStyle={styles.inputContainer}
            onChangeText={text => onChangeTextHandler("email", text)}
            error={errors?.email?.message?.toString()}
          />

          <Button
            text={"إرسال الرمز"}
            type="standard"
            textStyle={{fontSize: "FS16"}}
            onPress={handleSubmit(handleLoginPressed)}
            style={styles.button}
          />
        </View>
        <ViewRow
          style={{
            justifyContent: "center",
            bottom: 0,
          }}>
          <Text fontSize="FS14" style={styles.hintText}>
            {"تذكرت كلمة المرور؟"}
          </Text>
          <Button
            text={"تسجيل الدخول"}
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

      <ErrorMessageModal
        forwardRef={errorModalRef}
        message={translate("Modal.Error")}
      />
      {/* {<BlurProgressView loadingDisabled={true} />} */}
    </View>
  );
};

export default ForgetPassword;
