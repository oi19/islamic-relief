import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {
  FlatList,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
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
import ViewRow from "../../components/shared/ViewRow/ViewRow";
import {Svgs} from "../../../assets";
import {isRTL} from "../../../locals/i18n-config";
import Line from "../../components/shared/Line";

const RecieptDetail = () => {
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

  const renderReciept = () => {
    return (
      <View style={styles.recieptContainer}>
        <View style={styles.recieptRowStyle}>
          <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
            {"الوقت والتاريخ"}
          </Text>
          <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
            {"12/03/2024 ,2:41 PM "}
          </Text>
        </View>
        <View style={styles.recieptRowStyle}>
          <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
            {" رقم التسلسل"}
          </Text>
          <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
            {"# 234"}
          </Text>
        </View>
        <Line style={styles.lineSaperatorStyle} />
        <View style={styles.recieptRowStyle}>
          <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
            {" دورة التبرع"}
          </Text>
          <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
            {"اسبوعيا "}
          </Text>
        </View>
        <View style={styles.recieptRowStyle}>
          <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
            {" اسم التبرع"}
          </Text>
          <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
            {" إنشاء بنوك طعام"}
          </Text>
        </View>
        <Line style={styles.lineSaperatorStyle} />
        <View style={styles.recieptRowStyle}>
          <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
            {" طريقة الدفع"}
          </Text>
          <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
            {"بطاقة ائتمان "}
          </Text>
        </View>
        <View style={styles.recieptRowStyle}>
          <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
            {"قيمة التبرع "}
          </Text>
          <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
            {" 300 ج.م"}
          </Text>
        </View>
        <Line style={styles.lineSaperatorStyle} />
        <View style={styles.recieptRowStyle}>
          <Text fontFamily="BOLD" fontSize="FS14" color="BLACK">
            {" المبلغ المدفوع "}
          </Text>
          <Text fontFamily="BOLD" fontSize="FS14" color="PRIMARY">
            {"300 ج.م "}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={" "}
        centeredTitle=" إيصالاتي"
        isShowHeaderShadow
        authHeader={true}
        style={{
          backgroundColor: Colors.WHITE,
          paddingHorizontal: Spacing.S16,
        }}
        onBack={goBack}
      />
      <ScrollView
        style={{paddingHorizontal: Spacing.S16, marginTop: Spacing.S40}}>
        <Text fontFamily="MEDIUM" fontSize="H2" color="BLACK">
          {"تفاصيل الإيصال"}
        </Text>
        {renderReciept()}
      </ScrollView>

      <ErrorMessageModal
        forwardRef={errorModalRef}
        message={translate("Modal.Error")}
      />
    </View>
  );
};

export default RecieptDetail;
