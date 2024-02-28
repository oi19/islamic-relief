/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {View} from "react-native";
import {Button, Header, Text} from "../../components";
import {confirmOtp, useAppSelector} from "../../redux";
import {styles} from "./styles";
import {translate} from "../../helpers";
import OTPInputPanel from "../../components/organisms/OTPInputPanel";
import {RouteProp, useRoute} from "@react-navigation/native";
import {MainAppStackTypes} from "../../navigation/navigation-types";

interface OTPProps {
  length?: number; // Number of OTP boxes
  onOTPSubmit: (otp: string) => void; // Function to call when OTP is submitted
}

const OTP: React.FC<OTPProps> = () => {
  const {
    profile: {mobile},
  } = useAppSelector(state => state.userReducer);
  // const {
  //   params: {onOTPSubmit},
  // } = useRoute<RouteProp<MainAppStackTypes>>();

  return (
    <View style={styles.rootScreen}>
      <Header title={translate("Profile.OTP")} style={styles.headerStyle} />
      <View style={styles.container}>
        <View style={styles.SMSTextContainer}>
          <Text style={{}}>
            {translate("OTP.SMSMessage_description") + `  ${mobile}`}
          </Text>
        </View>
        <OTPInputPanel
          onOTPSubmit={otp => {
            confirmOtp(otp, res => {
              if (res.status === 200) {
                console.warn(res.data.token);
              }
            });
          }}
          isLoading={false}
        />
        <Button
          text={translate("OTP.resendCode")}
          style={styles.button}
          textStyle={{color: "PRIMARY"}}
          onPress={() => {
            console.warn("resend Button pressed");
          }}
        />
      </View>
    </View>
  );
};

export default OTP;
