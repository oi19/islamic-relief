import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Keyboard, ScrollView, View} from "react-native";
import {LoginTypes} from "../../../@types";

import Button from "../../components/shared/Button/Button";
import Input from "../../components/shared/Input/Input";
import Text from "../../components/shared/Text/Text";
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

const ChangeEmail = () => {
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

  const onSubmit = async (data: LoginTypes) => {
    Keyboard.dismiss();

    onUpdateEmail(data);
  };

  const onUpdateEmail = (data: any) => {
    // userLogin(data, res => {
    // if (res) {
    // goBack();
    navigate("OTP", {
      navigateTo: "Settings",
    });
    // }
    // });
  };

  const onChangeTextHandler = (text: any) => {
    clearErrors();
    setValue("email", text);
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={" "}
        centeredTitle="تغيير البريد الإلكتروني"
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
          <Text fontFamily="MEDIUM" fontSize="H2" color="BLACK">
            {"ادخل البريد الإلكتروني الجديد"}
          </Text>
          <Input
            key={"signup_mobile"}
            placeholder={"البريد الإلكتروني"}
            style={styles.input}
            keyboardType={"email-address"}
            isMobile={false}
            inputContainerStyle={styles.inputContainer}
            onChangeText={text => onChangeTextHandler(text)}
            error={errors?.email?.message?.toString()}
          />
        </View>
        <Button
          text={"انشاء حساب"}
          type="standard"
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
          textStyle={{fontSize: "FS16"}}
        />
      </KeyboardAwareScrollView>

      <ErrorMessageModal
        forwardRef={errorModalRef}
        message={translate("Modal.Error")}
      />
      {/* {<BlurProgressView loadingDisabled={true} />} */}
    </View>
  );
};

export default ChangeEmail;
