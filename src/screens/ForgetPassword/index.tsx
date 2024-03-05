import {BackHandler, StyleSheet, View} from "react-native";
import React from "react";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {TextProps} from "../../components/atoms/Text/Text";
import {forgetPasswordSchema2} from "../../helpers/validationSchema";
import {useLoader, useNavigationHooks} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {forgetDoctorPassword, showToast, useDispatch} from "../../redux";
import {translate} from "../../helpers";
import {Button, ControlledInput, Header, Text} from "../../components";
import {getHeight, getWidth} from "../../styles/dimensions";
import {Colors, Spacing} from "../../styles";

const labelStyle: TextProps = {
  fontSize: "FS14",
  color: "BLUE_4A5970",
  fontFamily: "NORMAL",
};
const ForgetPassword = () => {
  const {control, handleSubmit} = useForm({
    resolver: yupResolver(forgetPasswordSchema2),
  });

  const dispatch = useDispatch();

  const {navigate, goBack} = useNavigationHooks<MainAppStackTypes>();
  const forgetPasswordLoader = useLoader("forgetPassword");

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
  const onSubmit = async (data: {email: string}) => {
    forgetDoctorPassword(data, res => {
      if (res.status === 200) {
        dispatch(showToast(translate("OTP.SMSMessage_description")));
        navigate("ConfirmOtp");
      }
    });
  };
  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("Form.forgotPassword")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />
      <View style={styles.content}>
        <Text style={styles.hint} color="BLUE_4A5970">
          {translate("OTP.SMSMessage_description")}
        </Text>

        <ControlledInput
          fieldName="email"
          control={control}
          label={`${translate("Form.email")}*`}
          labelStyle={labelStyle}
          placeholder={translate("Form.enterEmail")}
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
        />

        <Button
          type="standard"
          isLoading={forgetPasswordLoader}
          text={translate("Common.send")}
          style={styles.saveButton}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  content: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  hint: {
    marginBottom: Spacing.S20,
  },
  input: {
    marginTop: Spacing.S11,
  },
  inputContainer: {
    // borderWidth: 1,
    borderColor: Colors.GRAY_EEEEEE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  saveButton: {
    width: getWidth(340),
    marginVertical: Spacing.S35,
    alignSelf: "center",
  },
});
