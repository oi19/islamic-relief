/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {View} from "react-native";
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
import {useForm} from "react-hook-form";
import {LoginTypes} from "../../@types";
import {
  confirmOtp,
  forgetPassword,
  useAppSelector,
  userLogin,
} from "../../redux";
import {yupResolver} from "@hookform/resolvers/yup";
import {useLoader, useNavigationHooks} from "../../hooks";
import {
  MainAppStackTypes,
  MainNavigationAllScreensTypes,
} from "../../navigation/navigation-types";
import {Colors, Spacing} from "../../styles";
import {styles} from "./styles";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {RouteProp, useRoute} from "@react-navigation/native";
import {convertObjToFormData, translate} from "../../helpers";
import {AccountLoginSchema} from "../../helpers/validationSchema";
import ErrorMessageModal from "../../components/models/ErrorMessageModal";

const Login = () => {
  const {
    params: {navigateTo},
  } = useRoute<RouteProp<MainAppStackTypes, "Login">>();
  const {goBack, navigate} =
    useNavigationHooks<MainNavigationAllScreensTypes>();

  const {profile} = useAppSelector(state => state.userReducer);

  const successModalRef = React.useRef<BottomSheetModal>(null);
  const errorModalRef = React.useRef<BottomSheetModal>(null);
  const loginLoader = useLoader("login");

  const {
    setValue,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(AccountLoginSchema),
  });

  const onOpenSuccessModal = () => {
    successModalRef.current?.present();
  };

  const handleLoginPressed = async (data: LoginTypes) => {
    userLogin(data, res => {
      onOpenSuccessModal();
    });
  };

  const handlerforgetPasswordPressed = () => {
    // const mobile = getValues("mobile");
    // if (!mobile) {
    //   setError("mobile", {
    //     type: "required",
    //     message: `${translate("Validation.required")}`,
    //   });

    //   return;
    // }
    const _data = convertObjToFormData({email: profile.email});
    console.log(_data);
    forgetPassword(_data, res => {
      if ((res.status = 200)) {
        navigate("OTP", {navigateTo: "ResetPassword"});
      }
    });
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
        <ViewRow style={{justifyContent: "space-between"}}>
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
        </View>
        <ViewRow style={{justifyContent: "space-between"}}>
          <Line style={styles.line} />
          <Text fontSize="FS14">{translate("Form.orSignIn")}</Text>
          <Line style={styles.line} />
        </ViewRow>

        <ViewRow
          style={{justifyContent: "space-around", marginVertical: Spacing.S16}}>
          <Button
            iconName="google"
            iconContainerStyle={{marginLeft: 0}}
            style={styles.socialButton}
          />
          <Button
            iconName="facebook"
            iconContainerStyle={{marginLeft: 0}}
            style={styles.socialButton}
          />
          <Button
            iconName="apple"
            iconContainerStyle={{marginLeft: 0}}
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

      <SuccessModel
        forwardRef={successModalRef}
        message={translate("Model.congratulationsMessage")}
        onContinuePress={() => {
          if (navigateTo) {
            navigate("SelectPackage");
          } else {
            goBack();
          }
          setTimeout(() => {
            successModalRef.current?.close();
          }, 5);
        }}
      />
      <ErrorMessageModal
        forwardRef={errorModalRef}
        message={translate("Modal.Error")}
      />
      {loginLoader && <View style={styles.disableClicks} />}
    </View>
  );
};

export default Login;
