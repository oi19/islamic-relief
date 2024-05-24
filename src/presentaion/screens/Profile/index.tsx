import {ScrollView, View} from "react-native";
import React from "react";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";
import {ProfileList, Text, ViewRow} from "../../../components";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
// import Header from "../../components/shared/Header";
import Image from "../../components/shared/Image";
import {styles} from "./styles";
import {getProfileListWithoutLogin} from "./data";
import {Svgs} from "../../../assets";
import {isRTL} from "../../../locals/i18n-config";
import {useLoader, useNavigationHooks, useToken} from "../../../hooks";
import {MainAppStackTypes} from "../../../navigation/navigation-types";
import {convertObjToFormData, translate} from "../../../helpers";
import {selectCityById, updateUserData, useAppSelector} from "../../../redux";
import {PRIMARY} from "../../../styles/colors";
import Header from "../../components/shared/Header";
// import {Header} from "../../../components";

const Profile: React.FC = () => {
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
        {true ? (
          <>
            <Header
              centeredTitle={"الملف الشخصي"}
              title=" "
              isBackArrow={false}
              isShowHeaderShadow={false}
              style={{
                height: 86,
                paddingTop: Spacing.S20,
                justifyContent: "flex-end",
              }}
            />
            <Card
              onPress={() => {
                navigate("Settings");
              }}
              style={styles.card}>
              <View style={{flexDirection: "row"}}>
                {profile?.image ? (
                  <Image source={{uri: profile.image}} style={styles.avatar} />
                ) : (
                  <Svgs name="profileUserIcon" />
                )}

                <View style={{marginHorizontal: Spacing.S16}}>
                  <Text color="RED" fontSize="FS14" fontFamily="MEDIUM">
                    {"تسجيل الدخول"}
                  </Text>
                  <Text color="INPUT_TEXT" fontSize="FS10" fontFamily="REGULAR">
                    {"تسجيل الدخول للحصول على معلومات التبرع الخاص بك"}
                  </Text>
                </View>
              </View>
              <Svgs
                name={"settings"}
                color={Colors.PRIMARY}
                rotate={isRTL() ? "left" : "right"}
                width={scale(15)}
                height={scale(15)}
              />
            </Card>
            <View
              style={[
                styles.headerShadow,
                {
                  marginTop: Spacing.S16,
                  height: 2.5,
                  backgroundColor: Colors.PRIMARY,
                  opacity: 0.2,
                },
              ]}
            />
          </>
        ) : (
          <View style={styles.headerWithoutLogin}>
            <Text fontFamily="MEDIUM" fontSize="H1">
              {translate("Profile.welcomeToDoctors")}
            </Text>
            <Text style={{marginVertical: Spacing.S16}}>
              {translate("Profile.loginMessage")}
            </Text>

            <Button
              text={translate("Profile.loginMessage")}
              textStyle={{
                fontSize: "FS13",
              }}
              style={{
                width: getWidth(325),
              }}
              type="standard"
              onPress={() => {
                navigate("Login", {
                  navigateTo: undefined,
                });
              }}
            />
          </View>
        )}
      </>
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
      </ScrollView>
      {profileLoading && <View style={styles.disableClicks} />}
    </View>
  );
};

export default Profile;
