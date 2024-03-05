import React from "react";
import {View} from "react-native";
import {Button, Header, Loader, Text} from "../../components";
import {useAppSelector} from "../../redux";
import {styles} from "./styles";
import {translate} from "../../helpers";
import OTPInputPanel from "../../components/organisms/OTPInputPanel";
import {RouteProp, useRoute} from "@react-navigation/native";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {useLoader} from "../../hooks";

const OTP: React.FC = () => {
  const {
    profile: {mobile},
  } = useAppSelector(state => state.userReducer);

  const {
    params: {
      onCompletionCallback,
      onResendCallback,
      loadingApi,
      resendLoadingApi,
    },
  } = useRoute<RouteProp<MainAppStackTypes, "OTP">>();

  const otpCompletionLoader = useLoader(loadingApi);
  const resendLoader = useLoader(resendLoadingApi);

  return (
    <View style={styles.rootScreen}>
      <Header title={translate("OTP.title")} style={styles.headerStyle} />
      <View style={styles.container}>
        <View style={styles.SMSTextContainer}>
          <Text style={{}}>
            {translate("OTP.SMSMessage_description") + `  ${mobile || ""}`}
          </Text>
        </View>
        <OTPInputPanel
          isLoading={otpCompletionLoader}
          onOTPSubmit={otp => {
            onCompletionCallback(otp);
          }}
        />
        <Button
          text={translate("OTP.resendCode")}
          style={styles.button}
          textStyle={{color: "PRIMARY"}}
          onPress={() => {
            onResendCallback();
          }}
        />
      </View>

      {otpCompletionLoader || resendLoader ? (
        <Loader
          style={styles.disableClicks}
          isLoading={otpCompletionLoader || resendLoader}
          loadingApi={loadingApi || resendLoadingApi}
        />
      ) : null}
    </View>
  );
};

export default OTP;
