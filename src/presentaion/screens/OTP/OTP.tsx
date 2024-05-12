import React, {useState} from "react";
import {BackHandler, Keyboard, View} from "react-native";

import Button from "../../components/shared/Button/Button";
import Text from "../../components/shared/Text/Text";
import ViewRow from "../../components/shared/ViewRow/ViewRow";
import Header from "../../components/shared/Header";
import {useLoader, useNavigationHooks} from "../../../hooks";
import {MainAppStackTypes} from "../../../navigation/navigation-types";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {Colors, Spacing} from "../../../styles";
import {styles} from "./styles";
import OTPInputPanel from "../../components/common/OTPInputPanel";

const OTP = () => {
  const {navigate, goBack,replace} = useNavigationHooks<MainAppStackTypes>();
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


  const onSubmit = () => {
    if (otp?.length == 4) {
      replace("ChangePassword");
      // confirmDoctorOTP(
      //   {
      //     otp,
      //   },
      //   res => {
      //     if (res.status === 200) {
      //       navigate("ChangePassword");
      //     }
      //   },
      // );
    }
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={" "}
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
          <Text fontFamily="BOLD" fontSize="FS24">
            {"رمز التأكيد"}
          </Text>
          <Text fontFamily="MEDIUM" fontSize="H3" color="INPUT_TEXT">
            {"تم ارسال رمز التأكيد للبريد الالكتروني"}
          </Text>
          <OTPInputPanel
            isLoading={false}
            onOTPSubmit={otpText => {
              setOtp(otpText);
            }}
            length={4}
          />
          <Button
            text={"تحقق"}
            type="standard"
            onPress={onSubmit}
            textStyle={{fontSize: "FS16"}}
            style={styles.button}
          />
        </View>

        <ViewRow
          style={{
            justifyContent: "center",
            bottom: 0,
          }}>
          <Text fontSize="FS14" style={styles.hintText}>
            {"لم تتلق الرمز؟ "}
          </Text>
          <Button
            text={"اعادة ارسال"}
            textStyle={{
              color: "PRIMARY",
            }}
            // onPress={loginPressed}
          />
          <Text fontSize="FS14" color="PRIMARY">
            {" "}
          </Text>
        </ViewRow>
      </KeyboardAwareScrollView>

      {/* // <ErrorMessageModal
      //   forwardRef={errorModalRef}
      //   message={translate("Modal.Error")}
      // />
      // {<BlurProgressView loadingDisabled={true} />} */}
    </View>
  );
};

export default OTP;
