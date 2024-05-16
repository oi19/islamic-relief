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
import {
  AccountSignUpSchema,
  changePasswordSchema,
} from "../../../helpers/validationSchema";
import {useLoader, useNavigationHooks} from "../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {userLogin} from "../../../redux";
import {Colors, Spacing} from "../../../styles";
import {styles} from "./styles";
import CountryModal from "../../components/shared/CountryModal/CountryModal";

import {IconsName} from "../../../assets/svgs";

const socialMediaList: IconsName[] = ["apple", "google", "facebook"];

const ChangePassword = () => {
  const {goBack, navigate} =
    useNavigationHooks<MainNavigationAllScreensTypes>();

  const errorModalRef = React.useRef<BottomSheetModal>(null);

  useState<string>();
  const loginLoader = useLoader("login");

  const {
    setValue,
    handleSubmit,
    clearErrors,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const handleLoginPressed = async (data: LoginTypes) => {
    Keyboard.dismiss();

    onLoginSubmit(data);
  };

  const onLoginSubmit = (data: LoginTypes) => {
    // userLogin(data, res => {
    // if (res) {
    navigate("CongratsScreen", {
      isShowSuccessSign: true,
      isDestructiveButton: false,
      title: "تم تغيير كلمة السر!",
      subTitle: "لقد تم تغيير كلمة المرور الخاصة بك بنجاح.",
      buttonTitle: "العودة إلى تسجيل الدخول",
      onCompletionHandler: () => navigate("Login", {navigateTo: undefined}),
    });
    // }
    // });
  };

  const onChangeTextHandler = (
    fieldName: "password" | "password_confirmation",
    text: string,
  ) => {
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
            {"إنشاء كلمة مرور جديدة"}
          </Text>
          <Text fontFamily="MEDIUM" fontSize="H3" color="INPUT_TEXT">
            {"يجب أن تكون كلمة المرور الجديدة فريدة من نوعها"}
          </Text>
          <Input
            key={"change_password"}
            password
            placeholder={"كلمة السر الجديدة"}
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
          <Button
            text={"إعادة تعيين كلمة المرور"}
            type="standard"
            textStyle={{fontSize: "FS16"}}
            onPress={handleSubmit(handleLoginPressed)}
            style={styles.button}
          />
        </View>
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
