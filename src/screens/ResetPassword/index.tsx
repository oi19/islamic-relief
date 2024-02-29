import React from "react";
import {View} from "react-native";
import {Button, Header, Input} from "../../components";
import {Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";
import {TextProps} from "../../components/atoms/Text/Text";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {
  ResetPasswordSchema,
  forgetPasswordSchema,
} from "../../helpers/validationSchema";
import {translate} from "../../helpers";
import {changePassword, resetPassword, useAppSelector} from "../../redux";
import {useLoader, useNavigationHooks, useToken} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {RouteProp, useRoute} from "@react-navigation/native";

const labelStyle: TextProps = {
  fontSize: "FS14",
  color: "BLUE_4A5970",
  fontFamily: "NORMAL",
};
const ResetPassword = () => {
  const resetPasswordLoader = useLoader("resetPassword");
  const changePasswordLoader = useLoader("changePassword");

  const {
    profile: {token},
  } = useAppSelector(state => state.userReducer);
  const {goBack, replace} = useNavigationHooks<MainAppStackTypes>();

  const {
    params: {passwordActionIndicator},
  } = useRoute<RouteProp<MainAppStackTypes, "ResetPassword">>();

  const isComingFromProfile = passwordActionIndicator === "resetPassword";

  const {
    handleSubmit,
    clearErrors,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver<any>(
      isComingFromProfile ? ResetPasswordSchema : forgetPasswordSchema,
    ),
  });

  const firstInputKey = isComingFromProfile ? "old_password" : "password";
  const secondInputKey = isComingFromProfile
    ? "password"
    : "password_confirmation";

  const onSubmit = (data: any) => {
    const _data = isComingFromProfile
      ? data
      : {password: data.password, otp_token: token};

    console.log(_data);
    const callback = (res: any) => {
      if (res.status === 200) {
        if (isComingFromProfile) {
          goBack();
        } else {
          replace("Login", {navigateTo: "TabsBottomStack"});
        }
      } else {
        console.warn("this is response in" + res.data.data.message);
      }
    };

    if (isComingFromProfile) {
      resetPassword(_data, callback);
    } else {
      changePassword(_data, callback);
    }
  };

  const onChangeTextHandler = (fieldName: any, text: string) => {
    clearErrors(fieldName);
    setValue(fieldName, text);
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("Reset.resetTitle")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />
      <View style={styles.container}>
        <Input
          password
          label={translate(
            isComingFromProfile ? "Form.oldPassword" : "Form.newPassword",
          )}
          labelStyle={labelStyle}
          placeholder={translate("Form.enterPassword")}
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          onChangeText={text => onChangeTextHandler(firstInputKey, text)}
          error={errors[firstInputKey]?.message?.toString()}
        />

        <Input
          password
          label={translate(
            isComingFromProfile ? "Form.newPassword" : "Form.confirmPassword",
          )}
          labelStyle={labelStyle}
          placeholder={translate("Form.enterPassword")}
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          onChangeText={text => onChangeTextHandler(secondInputKey, text)}
          error={errors[secondInputKey]?.message?.toString()}
        />

        <Button
          type="standard"
          text={translate("Reset.updateYourPassword")}
          style={styles.saveButton}
          onPress={handleSubmit(onSubmit)}
          isLoading={resetPasswordLoader || changePasswordLoader}
        />
      </View>
    </View>
  );
};

export default ResetPassword;
