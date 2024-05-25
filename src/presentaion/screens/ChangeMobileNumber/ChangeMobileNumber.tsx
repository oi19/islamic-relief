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
import {changeMobileNumberSchema} from "../../../helpers/validationSchema";
import {useLoader, useNavigationHooks} from "../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {userLogin} from "../../../redux";
import {Colors, Spacing} from "../../../styles";
import {styles} from "./styles";
import CountryModal from "../../components/shared/CountryModal/CountryModal";

const ChangeMobileNumber = () => {
  const {goBack, navigate} =
    useNavigationHooks<MainNavigationAllScreensTypes>();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const errorModalRef = React.useRef<BottomSheetModal>(null);
  const countryModalRef = React.useRef<BottomSheetModal>(null);

  const [countryCode, setCountryCode] = useState<string>("+20");
  const [mobileNumber, setMobileNumber] = useState<string>();
  const [mobileOrEmailFieldInput, setMobileOrEmailFieldInput] =
    useState<string>();
  const loginLoader = useLoader("login");

  const {
    setValue,
    handleSubmit,
    clearErrors,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(changeMobileNumberSchema),
  });

  const onSubmit = async (data: LoginTypes) => {
    Keyboard.dismiss();

    onUpdateMobileNumber(data);
  };

  const onUpdateMobileNumber = (data: any) => {
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
    setMobileNumber(text);
    setValue("mobileNumber", text);
  };

  const onCountryModalSelect = (item: any) => {
    setCountryCode(item?.countryCode);
    setValue("mobileNumber", countryCode);
    onCloseCountryModal();
  };

  const onCloseCountryModal = () => {
    countryModalRef.current?.close();
  };
  const onOpenCountryModal = () => {
    countryModalRef.current?.present();
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={" "}
        centeredTitle="تغيير رقم الهاتف"
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
            {"ادخل رقم الهاتف الجديد"}
          </Text>
          <Input
            key={"signup_mobile"}
            placeholder={"ادخل رقم التليفون الجديد"}
            style={styles.input}
            keyboardType={"phone-pad"}
            isMobile={true}
            inputContainerStyle={styles.inputContainer}
            onChangeText={text => onChangeTextHandler(text)}
            error={errors?.mobileNumber?.message?.toString()}
            countryButtonHandler={onOpenCountryModal}
            countryCode={countryCode}
            value={mobileNumber}
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
      <CountryModal
        forwardRef={countryModalRef}
        onSelect={item => onCountryModalSelect(item)}
        selectedCountry={countryCode}
      />

      <ErrorMessageModal
        forwardRef={errorModalRef}
        message={translate("Modal.Error")}
      />
      {/* {<BlurProgressView loadingDisabled={true} />} */}
    </View>
  );
};

export default ChangeMobileNumber;
