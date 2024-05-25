import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Keyboard, View} from "react-native";
import {LoginTypes} from "../../../@types";

import Button from "../../components/shared/Button/Button";
import Input from "../../components/shared/Input/Input";
import Text from "../../components/shared/Text/Text";
import Header from "../../components/shared/Header";
import ErrorMessageModal from "../../../components/models/ErrorMessageModal";
import {translate} from "../../../helpers";
import {
  changePasswordSchema,
  forgetPasswordSchema,
  ResetPasswordSchema,
} from "../../../helpers/validationSchema";
import {useLoader, useNavigationHooks} from "../../../hooks";
import {
  MainAppStackTypes,
  MainNavigationAllScreensTypes,
} from "../../../navigation/navigation-types";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {userLogin} from "../../../redux";
import {Colors, Spacing} from "../../../styles";
import {styles} from "./styles";

import {IconsName} from "../../../assets/svgs";
import {RouteProp, useRoute} from "@react-navigation/native";

const ChangePassword = () => {
  const {
    params: {type},
  } = useRoute<RouteProp<MainAppStackTypes, "ChangePassword">>();
  const {goBack, navigate} =
    useNavigationHooks<MainNavigationAllScreensTypes>();

  const errorModalRef = React.useRef<BottomSheetModal>(null);

  useState<string>();
  const loginLoader = useLoader("login");

  const validationSchema: any =
    type === "update" ? changePasswordSchema : forgetPasswordSchema;

  const {
    setValue,
    handleSubmit,
    clearErrors,
    getValues,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: {
    oldPassword?: string | undefined;
    password: string | undefined;
    password_confirmation: string | undefined;
  }) => {
    Keyboard.dismiss();
    type == "reset" ? onResetPasswordSuccess(data) : onUpdatePassword(data);
  };

  const onResetPasswordSuccess = (data: {
    password: string | undefined;
    password_confirmation: string | undefined;
  }) => {
    // userLogin(data, res => {
    //   if (res) {
    navigate("CongratsScreen", {
      isShowSuccessSign: true,
      isDestructiveButton: false,
      title: "تم تغيير كلمة السر!",
      subTitle: "لقد تم تغيير كلمة المرور الخاصة بك بنجاح.",
      buttonTitle: "العودة إلى تسجيل الدخول",
      onCompletionHandler: () => navigate("Login", {navigateTo: undefined}),
      //   });
      // }
    });
  };

  const onUpdatePassword = (data: {
    oldPassword?: string | undefined;
    password: string | undefined;
    password_confirmation: string | undefined;
  }) => {
    // userLogin(data, res => {
    //   if (res) {
    goBack();
    // }
    // });
  };

  const onChangeTextHandler = (
    fieldName: "old_password" | "password" | "password_confirmation",
    text: string,
  ) => {
    clearErrors(fieldName);
    setValue(fieldName, text);
  };

  const renderSubmitButton = (conditionalType: "reset" | "update") => {
    const text =
      type == "reset" ? "إعادة تعيين كلمة المرور" : "تغيير كلمة المرور";

    return (
      <>
        {conditionalType == "update" ? (
          <Button
            text={text}
            type="standard"
            textStyle={{fontSize: "FS16"}}
            onPress={handleSubmit(onSubmit)}
            style={[styles.button, {}]}
          />
        ) : null}
      </>
    );
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={" "}
        centeredTitle="تغيير كلمة المرور"
        isShowHeaderShadow
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
          {type == "update" ? (
            <Input
              key={"current_password"}
              password
              placeholder={"كلمة السر"}
              style={styles.input}
              inputContainerStyle={styles.inputContainer}
              onChangeText={text => onChangeTextHandler("old_password", text)}
              error={errors?.old_password?.message?.toString()}
            />
          ) : null}
          <Input
            key={"change_password"}
            password
            placeholder={type == "update" ? "كلمة السر الجديدة" : "كلمة السر"}
            style={styles.input}
            inputContainerStyle={styles.inputContainer}
            onChangeText={text => onChangeTextHandler("password", text)}
            error={errors?.password?.message?.toString()}
          />
          <Input
            key={"change_password_confirmation"}
            password
            placeholder={"تأكيد كلمة السر "}
            style={styles.input}
            inputContainerStyle={styles.inputContainer}
            onChangeText={text =>
              onChangeTextHandler("password_confirmation", text)
            }
            error={errors?.password_confirmation?.message?.toString()}
          />
          {renderSubmitButton("reset")}
        </View>
        {renderSubmitButton("update")}
      </KeyboardAwareScrollView>

      <ErrorMessageModal
        forwardRef={errorModalRef}
        message={translate("Modal.Error")}
      />
      {/* {<BlurProgressView loadingDisabled={true} />} */}
    </View>
  );
};

export default ChangePassword;
