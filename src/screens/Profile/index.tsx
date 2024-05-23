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
import {convertObjToFormData, translate} from "../../helpers";
import {selectCityById, updateUserData, useAppSelector} from "../../redux";
import {PRIMARY} from "../../styles/colors";

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
              title={translate("Profile.title")}
              style={{
                height: 86,
                paddingTop: Spacing.S20,
                justifyContent: "flex-end",
              }}
            />
            <Card
              onPress={() => {
                navigate("Account");
              }}
              style={styles.card}>
              <>
                {profile.image ? (
                  <Image source={{uri: profile.image}} style={styles.avatar} />
                ) : (
                  <Svgs name="profileUserIcon" />
                )}

                <View style={{marginHorizontal: Spacing.S8}}>
                  <Text color="BLUE_4A5970" fontSize="FS16">
                    {profile?.email}
                  </Text>
                  <Text color="BLUE_4A5970">{profile?.mobile}</Text>
                </View>
              </>
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
      <View style={styles.container}>
        <ProfileList
          selectedCity={selectedCity}
          onSelectedCity={onSelectCity}
          listItems={getProfileListWithoutLogin(selectedCity?.name, true)}
        />
      </View>
      {profileLoading && <View style={styles.disableClicks} />}
    </View>
  );
};

export default Profile;
