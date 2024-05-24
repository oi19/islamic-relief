import {ScrollView, View} from "react-native";
import React from "react";
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

const Settings: React.FC = () => {
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const {profile} = useAppSelector(state => state.userReducer);
  const selectedCity = useAppSelector(state =>
    selectCityById(state, Number(profile.city_id)),
  );

  const isLogin = useToken();
  const profileLoading = useLoader("userProfile");

  const onSelectCity = () => {
    updateUserData(convertObjToFormData(profile));
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
          <ProfileRowCard
            item={{
              name: "تسجيل الدخول بالبصمة",
              desc: "فعال",
              renderRightElement: true,
            }}
            handleOnRowPressed={() => {}}
          />
          <ProfileRowCard
            item={{
              name: "تسجيل الدخول بالوجه",
              desc: "غير فعال",
              arrowWithHint: true,
              renderRightElement: true,
            }}
            handleOnRowPressed={() => {}}
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
