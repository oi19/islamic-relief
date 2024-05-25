import {Alert, Linking, Platform, ScrollView, View} from "react-native";
import React, {useEffect, useState} from "react";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";
import {ProfileList, ProfileRowCard, Text, ViewRow} from "../../../components";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import Header from "../../components/shared/Header";
import Image from "../../components/shared/Image";
import {styles} from "./styles";
import {getProfileListWithoutLogin} from "./data";
import {Images} from "../../../assets/images";
import {Svgs} from "../../../assets";
import {isRTL} from "../../../locals/i18n-config";
import {useLoader, useNavigationHooks, useToken} from "../../../hooks";
import {MainAppStackTypes} from "../../../navigation/navigation-types";
import {convertObjToFormData, translate} from "../../../helpers";
import {selectCityById, updateUserData, useAppSelector} from "../../../redux";
import {PRIMARY} from "../../../styles/colors";
import Line from "../../components/shared/Line";
import {
  checkBiometricType,
  confirmBiometric,
  enableBiometric,
} from "../../../services/biometric";

const Settings: React.FC = () => {
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const {profile} = useAppSelector(state => state.userReducer);
  const selectedCity = useAppSelector(state =>
    selectCityById(state, Number(profile.city_id)),
  );
  const [biometricType, setBiometricType] = useState<string>("");
  const [isEnable, setIsEnable] = useState<boolean>(false);

  const isLogin = useToken();
  const profileLoading = useLoader("userProfile");

  const onSelectCity = () => {
    updateUserData(convertObjToFormData(profile));
  };

  useEffect(() => {
    checkBiometricType(
      (isSupport: Boolean) => {},
      (biometricTypeText: string) => {
        setBiometricType(biometricTypeText);
      },
    );
    setTimeout(() => {
      // setLoadingVisible(false);
    }, 300);
  }, []);

  const onBiometricActivate = () => {
    checkBiometricType(
      async (isSupport: Boolean) => {
        if (isSupport) {
          confirmBiometric(
            (isValidBiometric: Boolean) => {
              if (isValidBiometric) {
                setIsEnable(true);
                enableBiometric();
                // updateProfileData(Settings_Type.BIOMETRIC, true);
              } else {
                setIsEnable(false);
                // updateProfileData(Settings_Type.BIOMETRIC, false);
              }
            },
            (BreakException: boolean) => {},
          );
        } else {
          Alert.alert(`${""}`, `Biometric Permission Denied`, [
            {
              text: `Cancel`,
              onPress: () => {
                setIsEnable(!isEnable);
              },
              style: "cancel",
            },
            {
              text: `go To settings`,
              onPress: () => {
                if (Platform.OS === "ios") {
                  Linking.openURL("App-Prefs:setting");
                } else {
                  // AndroidOpenSettings.generalSettings();
                }
              },
            },
          ]);
        }
      },
      (biometricTypeText: string) => {},
    );
  };

  const toggle = () => {
    if (isEnable) {
      setIsEnable(false);
    } else {
      onBiometricActivate();
    }
  };
  const renderHeader = () => {
    return (
      <>
        <Header
          title={" "}
          centeredTitle="إعدادات"
          isShowHeaderShadow={true}
          style={{
            height: 86,
            paddingTop: Spacing.S20,
            justifyContent: "flex-end",
          }}
        />
      </>
    );
  };

  const renderBiometricSection = () => {
    return (
      <>
        <Line style={styles.saperatorStyle} />
        <View style={{paddingVertical: Spacing.S20}}>
          {/* <ProfileRowCard
            item={{
              name: "تسجيل الدخول بالبصمة",
              desc: "فعال",
              renderRightElement: true,
            }}
            handleOnRowPressed={() => {}}
            onToggleHandler={() => {}}
            isToggle
          /> */}
          <ProfileRowCard
            item={{
              name: "تسجيل الدخول بالوجه",
              desc: "غير فعال",
              arrowWithHint: true,
              renderRightElement: true,
            }}
            handleOnRowPressed={() => {}}
            onToggleHandler={toggle}
            isToggle={isEnable}
          />
        </View>
        <Line style={styles.saperatorStyle} />
      </>
    );
  };

  const renderAppVersionSection = () => {
    return (
      <View style={{paddingTop: Spacing.S20}}>
        <ProfileRowCard
          item={{
            name: "إصدار التطبيق",
            desc: "12.6",
          }}
          handleOnRowPressed={() => {}}
        />
      </View>
    );
  };
  return (
    <View style={styles.rootScreen}>
      {renderHeader()}
      {/* Main Screen Content */}
      <ScrollView style={styles.container}>
        <ProfileList
          selectedCity={selectedCity}
          onSelectedCity={onSelectCity}
          listItems={getProfileListWithoutLogin(selectedCity?.name, true)}
        />
        {renderBiometricSection()}
        {renderAppVersionSection()}
      </ScrollView>

      {profileLoading && <View style={styles.disableClicks} />}
    </View>
  );
};

export default Settings;
