import {BackHandler, View} from "react-native";
import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import {styles} from "./styles";
import {TextProps} from "../../components/atoms/Text/Text";
import {useLoader, useNavigationHooks} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {
  changeDoctorPassword,
  dispatch,
  showToast,
  useAppSelector,
} from "../../redux";
import {translate} from "../../helpers";
import {Button, ControlledInput, Header, Input} from "../../components";
import {getHeight} from "../../styles/dimensions";
import {Spacing} from "../../styles";
import {ResetPasswordTypes} from "../../@types";
import {changePasswordSchema} from "../../helpers/validationSchema";

const labelStyle: TextProps = {
  fontSize: "FS14",
  color: "BLUE_4A5970",
  fontFamily: "NORMAL",
};

const ChangePassword = () => {
  const {
    setValue,
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });
  const {goBack, replace} = useNavigationHooks<MainAppStackTypes>();
  const {otpData} = useAppSelector(state => state.userReducer);
  const changePasswordLoader = useLoader("changePassword");

  // Handle Back Of Default user
  React.useEffect(() => {
    const backAction = () => {
      goBack();
      return true; // Prevent default behavior (i.e., don't exit the app)
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, [goBack]);

  console.log(otpData);

  const onSubmit = async (data: ResetPasswordTypes) => {
    const newData = {
      password: data.password,
      otp_token: otpData?.token,
    };
    changeDoctorPassword(newData, res => {
      if (res.status === 200) {
        reset();
        dispatch(showToast(translate("Model.updateDoctorMessage")));
        replace("TabsBottomStack");
      }
    });
  };
  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("Form.resetPassword")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />
      <View style={styles.container}>
        <ControlledInput
          control={control}
          fieldName="password"
          label={`${translate("Form.password")}*`}
          labelStyle={labelStyle}
          password
          placeholder={translate("Form.enterPassword")}
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
        />

        <Input
          label={`${translate("Form.password_confirmation")}*`}
          labelStyle={labelStyle}
          password
          placeholder={translate("Form.enterPassword")}
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          error={errors?.password_confirmation?.message}
          onChangeText={text => setValue("password_confirmation", text)}
        />

        <Button
          type="standard"
          isLoading={changePasswordLoader}
          text={translate("Form.updatePassword")}
          style={styles.saveButton}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default ChangePassword;
