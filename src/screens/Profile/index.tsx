import {View} from "react-native";
import React from "react";
import {getHeight, getWidth, scale} from "../../styles/dimensions";
import {Colors, Spacing} from "../../styles";
import {
  Button,
  Card,
  Header,
  Image,
  ProfileList,
  Text,
  ViewRow,
} from "../../components";
import {styles} from "./styles";
import {getProfileListWithoutLogin} from "./data";
import {Images} from "../../assets/images";
import {Svgs} from "../../assets";
import {isRTL} from "../../locals/i18n-config";
import {useLoader, useNavigationHooks, useToken} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {convertObjToFormData, filterArray, translate} from "../../helpers";
import {CityType} from "../../@types";
import {
  selectCityById,
  selectCombinedAccountData,
  updateUserData,
  useAppSelector,
} from "../../redux";

const Profile: React.FC = () => {
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const {profile} = useAppSelector(state => state.userReducer);
  const selectedCity = useAppSelector(state =>
    selectCityById(state, Number(profile.city_id)),
  );
  const {cities} = useAppSelector(selectCombinedAccountData);
  const profileLoading = useLoader("userProfile");
  const isLogin = !!useToken();

  const onSelectCity = (selectedCity: CityType) => {
    const filterCondition = (element: CityType) =>
      element.id === selectedCity.id;
    const filteredCity = filterArray(cities, filterCondition)[0];
    updateUserData(
      convertObjToFormData({...profile, city_id: filteredCity["id"]}),
    );
  };

  const renderHeader = () => {
    return (
      <>
        {isLogin ? (
          <>
            <Header
              title={translate("Profile.title")}
              style={{height: getHeight(120), paddingTop: Spacing.S20}}
            />
            <Card
              onPress={() => {
                navigate("Account");
              }}
              style={styles.card}>
              <ViewRow>
                <Image
                  source={profile.image ? {uri: profile.image} : Images.default}
                  style={styles.avatar}
                />
                <View style={{marginHorizontal: Spacing.S8}}>
                  <Text color="BLUE_4A5970" fontSize="FS16">
                    {profile?.email}
                  </Text>
                  <Text color="BLUE_4A5970">{profile?.mobile}</Text>
                </View>
              </ViewRow>
              <Svgs
                name={"arrow"}
                color={Colors.PRIMARY}
                rotate={isRTL() ? "left" : "right"}
                width={scale(15)}
                height={scale(15)}
              />
            </Card>
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
                fontSize: "FS14",
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
      <View style={styles.container}>
        <ProfileList
          selectedCity={selectedCity}
          onSelectedCity={onSelectCity}
          listItems={getProfileListWithoutLogin(selectedCity?.name, isLogin)}
        />
      </View>
      {profileLoading && <View style={styles.disableClicks} />}
    </View>
  );
};

export default Profile;
