import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {yupResolver} from "@hookform/resolvers/yup";
import {RouteProp, useRoute} from "@react-navigation/native";
import React from "react";
import {useForm} from "react-hook-form";
import {Keyboard, View} from "react-native";
import {LoginTypes} from "../../../@types";

import Button from "../../components/shared/Button/Button";
import Input from "../../components/shared/Input/Input";
import Text from "../../components/shared/Text/Text";
import Line from "../../components/shared/Line";
import ViewRow from "../../components/shared/ViewRow/ViewRow";
import ErrorMessageModal from "../../../components/models/ErrorMessageModal";
import {translate} from "../../../helpers";
import {AccountLoginSchema} from "../../../helpers/validationSchema";
import {useLoader, useNavigationHooks} from "../../../hooks";
import {
  MainAppStackTypes,
  MainNavigationAllScreensTypes,
} from "../../../navigation/navigation-types";
import {userLogin} from "../../../redux";
import {Colors} from "../../../styles";
import {styles} from "./styles";

const Login = () => {
  const {
    params: {navigateTo},
  } = useRoute<RouteProp<MainAppStackTypes, "Login">>();
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

  const handlerforgetPasswordPressed = () => {
    navigate("ForgetPassword");
  };

  const onChangeTextHandler = (fieldName: any, text: string) => {
    clearErrors(fieldName);
    setValue(fieldName, text);
  };

  return (
    <View style={styles.rootScreen}>
      <View style={styles.content}>
        <Text fontFamily="BOLD" fontSize="FS24">
          {translate("Form.welcomMessage")}
        </Text>
        <Text fontFamily="MEDIUM" fontSize="H3" color="INPUT_TEXT">
          {translate("Form.createAccountMessage")}
        </Text>
        <Input
          placeholder={`+20 ${translate("Form.mobile")}`}
          style={styles.input}
          keyboardType="phone-pad"
          maxLength={11}
          inputContainerStyle={styles.inputContainer}
          onChangeText={text => onChangeTextHandler("mobile", text)}
          error={errors?.mobile?.message?.toString()}
        />
        <Input
          password
          placeholder={translate("Form.enterPassword")}
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
        <View style={styles.buttonGroup}>
          <Button
            text={translate("Form.login")}
            type="standard"
            onPress={handleSubmit(handleLoginPressed)}
            style={styles.button}
          />
        </View>
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
      </View>
      <ViewRow
        style={{
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
        }}>
        <Text fontSize="FS14" style={styles.hintText}>
          {translate("Form.dontHaveAccountMessage")}
        </Text>
        <Button
          text={translate("Form.signupNow")}
          textStyle={{
            color: "PRIMARY",
          }}></Button>
        <Text fontSize="FS14" color="PRIMARY">
          {" "}
        </Text>
      </ViewRow>
      <ErrorMessageModal
        forwardRef={errorModalRef}
        message={translate("Modal.Error")}
      />
      {loginLoader && <View style={styles.disableClicks} />}
    </View>
  );
};

export default Login;
