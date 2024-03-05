import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {yupResolver} from "@hookform/resolvers/yup";
import {RouteProp, useRoute} from "@react-navigation/native";
import React from "react";
import {useForm} from "react-hook-form";
import {Keyboard, View} from "react-native";
import {LoginTypes} from "../../@types";
import {
  Button,
  CheckBox,
  Input,
  Line,
  RoundedIcon,
  SuccessModel,
  Text,
  ViewRow,
} from "../../components";
import ErrorMessageModal from "../../components/models/ErrorMessageModal";
import {translate} from "../../helpers";
import {AccountLoginSchema} from "../../helpers/validationSchema";
import {useLoader, useNavigationHooks} from "../../hooks";
import {
  MainAppStackTypes,
  MainNavigationAllScreensTypes,
} from "../../navigation/navigation-types";
import {userLogin} from "../../redux";
import {Colors} from "../../styles";
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
      <RoundedIcon
        size={35}
        style={styles.closeButton}
        icon="close"
        backgroundColor="PRIMARY"
        onPress={() => goBack()}
        iconStyle={{
          color: Colors.WHITE,
        }}
      />
      <View style={styles.content}>
        <Text fontFamily="MEDIUM" fontSize="H1">
          {translate("Form.createAccountMessage")}
        </Text>
        <Input
          label={translate("Form.phone")}
          placeholder={`+20 ${translate("Form.phone")}`}
          style={styles.input}
          keyboardType="phone-pad"
          maxLength={11}
          inputContainerStyle={styles.inputContainer}
          onChangeText={text => onChangeTextHandler("mobile", text)}
          error={errors?.mobile?.message?.toString()}
        />
        <Input
          password
          label={translate("Form.password")}
          placeholder={translate("Form.enterPassword")}
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          onChangeText={text => onChangeTextHandler("password", text)}
          error={errors?.password?.message?.toString()}
        />
        <ViewRow style={styles.row}>
          <CheckBox text={translate("Form.rememberMe")} />
          <Button
            text={translate("Form.forgotPassword")}
            textStyle={{
              fontFamily: "NORMAL",
              fontSize: "FS13",
              color: "BLUE_4A5970",
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
            isLoading={loginLoader}
          />
          <Button
            text={translate("Form.createAccount")}
            type="border"
            onPress={async () => {
              navigate("Signup");
            }}
            style={styles.button}
          />
        </View>

        <ViewRow style={styles.row}>
          <Line style={styles.line} />
          <Text fontSize="FS14">{translate("Form.orSignIn")}</Text>
          <Line style={styles.line} />
        </ViewRow>

        <ViewRow style={styles.soicalContainer}>
          <Button
            iconName="google"
            iconContainerStyle={styles.iconContainerStyle}
            style={styles.socialButton}
          />
          <Button
            iconName="facebook"
            iconContainerStyle={styles.iconContainerStyle}
            style={styles.socialButton}
          />
          <Button
            iconName="apple"
            iconContainerStyle={styles.iconContainerStyle}
            style={styles.socialButton}
          />
        </ViewRow>
        <Text fontSize="FS13" style={styles.hintText}>
          {translate("Form.byContinuing")}
          <Text fontSize="FS13" color="PRIMARY">
            {" "}
            {translate("Form.terms&Conditions")}
          </Text>
        </Text>
      </View>

      <ErrorMessageModal
        forwardRef={errorModalRef}
        message={translate("Modal.Error")}
      />
      {loginLoader && <View style={styles.disableClicks} />}
    </View>
  );
};

export default Login;
