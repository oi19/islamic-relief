import {BackHandler, View} from "react-native";
import React from "react";

import {styles} from "./styles";
import {useLoader, useNavigationHooks} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {confirmDoctorOTP} from "../../redux";
import {Button, Header, Text} from "../../components";
import {translate} from "../../helpers";
import OTPInputPanel from "../../components/organisms/OTPInputPanel";

const ConfirmOtp = () => {
  const {navigate, goBack} = useNavigationHooks<MainAppStackTypes>();
  const forgetPasswordLoader = useLoader("confirmOtp");

  const [otp, setOtp] = React.useState<string>("");

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
  const handleSendOTP = () => {
    if (otp) {
      confirmDoctorOTP(
        {
          otp,
        },
        res => {
          if (res.status === 200) {
            navigate("ChangePassword");
          }
        },
      );
    }
  };

  return (
    <View style={styles.rootScreen}>
      <Header title={translate("OTP.title")} style={styles.headerStyle} />
      <View style={styles.container}>
        <View style={styles.SMSTextContainer}>
          <Text style={styles.hint} color="BLUE_4A5970">
            {translate("OTP.SMSMessage_description")}
          </Text>
        </View>
        <OTPInputPanel
          isLoading={forgetPasswordLoader}
          onOTPSubmit={otpText => {
            setOtp(otpText);
          }}
        />
        <Button
          text={translate("OTP.resendCode")}
          style={styles.button}
          textStyle={{color: "PRIMARY"}}
          onPress={() => {
            goBack();
          }}
        />

        <Button
          type="standard"
          isLoading={forgetPasswordLoader}
          text={translate("Common.send")}
          style={styles.saveButton}
          onPress={handleSendOTP}
        />
      </View>
    </View>
  );
};

export default ConfirmOtp;
