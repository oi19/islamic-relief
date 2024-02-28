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
import {convertObjToFormData, translate} from "../../helpers";
import {changePassword, resetPassword} from "../../redux";
import {useLoader, useNavigationHooks, useToken} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";

const labelStyle: TextProps = {
  fontSize: "FS14",
  color: "BLUE_4A5970",
  fontFamily: "NORMAL",
};
const ResetPassword = () => {
  const updatePasswordLoading = useLoader("resetPassword");
  const {navigate, goBack} = useNavigationHooks<MainAppStackTypes>();
  const isLogged = !!useToken();

  const {
    handleSubmit,
    clearErrors,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver<any>(
      isLogged ? ResetPasswordSchema : forgetPasswordSchema,
    ),
  });

  const firstInputKey = isLogged ? "old_password" : "password";
  const secondInputKey = isLogged ? "password" : "password_confirmation";

  const onSubmit = (data: any) => {
    const formData = isLogged ? data : {password: data.password};

    const callback = (res: any) => {
      if (res.status === 200) {
        if (isLogged) {
          goBack();
        } else {
          navigate("Login", {navigateTo: "Home"});
        }
      }
    };

    if (isLogged) {
      resetPassword(formData, callback);
    } else {
      changePassword(formData, callback);
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
          label={translate(isLogged ? "Form.oldPassword" : "Form.newPassword")}
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
            isLogged ? "Form.newPassword" : "Form.confirmPassword",
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
          isLoading={updatePasswordLoading}
        />
      </View>
    </View>
  );
};

export default ResetPassword;
