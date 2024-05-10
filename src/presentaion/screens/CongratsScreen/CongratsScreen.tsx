import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {useState} from "react";
import {Keyboard, View} from "react-native";

import Button from "../../components/shared/Button/Button";
import Text from "../../components/shared/Text/Text";
import ErrorMessageModal from "../../../components/models/ErrorMessageModal";
import {translate} from "../../../helpers";
import {useLoader, useNavigationHooks} from "../../../hooks";
import {
  MainAppStackTypes,
  MainNavigationAllScreensTypes,
} from "../../../navigation/navigation-types";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {styles} from "./styles";
import SuccessSign from "../../../assets/svgs/successSign";
import {RouteProp, useRoute} from "@react-navigation/native";
import {getWidth} from "../../../styles/dimensions";
import {Spacing} from "../../../styles";
import navigation from "../../../navigation";
import SuccessAnimation from "../../../assets/lottie/SuccessAnimation";

const CongratsScreen = () => {
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();
  const {
    params: {
      title = "تم التسجيل بنجاح",
      subTitle = "يمكنك الان التبرع بكل سهولة",
      buttonTitle = "اذهب الى الصفحة الرئيسية",
      onCompletionHandler = () => navigate("Home"),
      isDestructiveButton,
      isShowSuccessSign = false,
    },
  } = useRoute<RouteProp<MainAppStackTypes, "CongratsScreen">>();

  const errorModalRef = React.useRef<BottomSheetModal>(null);

  const loginLoader = useLoader("login");

  return (
    <View style={styles.rootScreen}>
      <View style={styles.content}>
        {isShowSuccessSign ? <SuccessSign /> : <SuccessAnimation />}

        <Text
          fontFamily="BOLD"
          fontSize="FS18"
          style={{marginTop: Spacing.S20}}>
          {title}
        </Text>
        <Text
          fontFamily="MEDIUM"
          fontSize="FS16"
          color="INPUT_TEXT"
          style={{
            marginHorizontal: getWidth(60),
            textAlign: "center",
            marginTop: Spacing.S11,
          }}>
          {subTitle}
        </Text>

        <Button
          text={buttonTitle}
          textStyle={{fontSize: "FS16"}}
          type={
            isDestructiveButton || !isShowSuccessSign ? "default" : "standard"
          }
          onPress={onCompletionHandler}
          style={styles.button}
        />
      </View>

      <ErrorMessageModal
        forwardRef={errorModalRef}
        message={translate("Modal.Error")}
      />
      {/* {<BlurProgressView loadingDisabled={true} />} */}
    </View>
  );
};

export default CongratsScreen;
