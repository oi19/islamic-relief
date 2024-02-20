import {View} from "react-native";
import React from "react";
import {getHeight, scale} from "../../styles/dimensions";
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
import {translate} from "../../helpers";
import {CityType} from "../../@types";
import {getUserProfile, useAppSelector} from "../../redux";
import {useFocusEffect} from "@react-navigation/native";

const Profile: React.FC = () => {
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const {profile} = useAppSelector(state => state.userReducer?.profile);
  const profileLoading = useLoader("userProfile");
  const isLogin = useToken();

  console.log(profile);
  useFocusEffect(
    React.useCallback(() => {
      getUserProfile();
    }, []),
  );
  const [selectedCity, setSelectedCity] = React.useState<CityType>();

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
                <Image source={Images.default} style={styles.avatar} />
                <View style={{marginHorizontal: Spacing.S8}}>
                  <Text color="BLUE_4A5970" fontSize="FS16">
                    {profile?.email}
                  </Text>
                  <Text color="BLUE_4A5970">01012345678</Text>
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
          onSelectedCity={setSelectedCity}
          listItems={getProfileListWithoutLogin(selectedCity?.name, isLogin)}
        />
      </View>
      {profileLoading && <View style={styles.disableClicks} />}
    </View>
  );
};

export default Profile;
