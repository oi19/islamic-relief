import React from "react";
import {ListRenderItem, View} from "react-native";

import {Doctor, ServiceType} from "../../@types";
import {Svgs} from "../../assets";
import {
  Button,
  DoctorCard,
  Header,
  Scroll,
  Section,
  ServiceItem,
  Text,
} from "../../components";
import {serviceList} from "../../dummyData";
import {useNavigationHooks, useToken} from "../../hooks";
import {MainNavigationAllScreensTypes} from "../../navigation/navigation-types";
import {Colors, Spacing} from "../../styles";
import {getHeight, getWidth} from "../../styles/dimensions";
import {styles} from "./styles";
import {translate} from "../../helpers";

import {useFocusEffect} from "@react-navigation/native";
import {getHomePageData, getUserProfile, useAppSelector} from "../../redux";

const Home = () => {
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();

  const isLogged = useToken();

  useFocusEffect(
    React.useCallback(() => {
      Promise.all([getHomePageData(), getUserProfile()]);
    }, []),
  );

  const {homePageData} = useAppSelector(state => state.homeReducer);

  const {doctors, service_images} = homePageData;

  React.useEffect(() => {
    getHomePageData();
  }, []);

  const OurServiceItem: ListRenderItem<ServiceType> = ({item, index}) => {
    const listLength = serviceList.length;
    return (
      <ServiceItem
        item={item}
        index={index}
        isOddAndLastItem={listLength % 2 === 1 && index === listLength - 1}
      />
    );
  };

  const topRatedDoctor: ListRenderItem<Doctor> = ({item, index}) => {
    return <DoctorCard item={item} index={index} />;
  };
  return (
    <View style={styles.rootScreen}>
      <Header style={{height: getHeight(130), paddingTop: Spacing.S20}} />

      <View style={styles.container}>
        {/* Search Section  */}

        <View style={styles.searchContainer}>
          <Button
            type="default"
            iconName="search"
            style={styles.searchButton}
            text={translate("Home.searchTitle")}
            onPress={() => navigate("Search")}
            textStyle={{color: "GRAY_A7A7A7", fontSize: "FS14"}}
            iconStyle={{
              color: Colors.GRAY_A7A7A7,
            }}
          />
          <Button
            iconName="notifications"
            iconContainerStyle={styles.iconContainerStyle}
            style={styles.notifications}
          />
        </View>
        <Scroll>
          {/* Our Service Section List */}
          <Section
            title={translate("Home.ourServices")}
            numColumns={2}
            renderItem={OurServiceItem}
            data={serviceList}
            horizontal={false}
          />
          {/* Sign up Card*/}
          {!isLogged ? (
            <View style={styles.signUpContainer}>
              <Svgs name="circles" />
              <View style={styles.signUpMessage}>
                <Text
                  fontSize="FS16"
                  color="WHITE"
                  fontFamily="MEDIUM"
                  style={styles.message}>
                  {translate("Home.signInMessage")}
                </Text>
                <Button
                  text={translate("Common.signup")}
                  type="border"
                  style={{width: getWidth(130), marginTop: Spacing.S11}}
                  onPress={() => {
                    navigate("Login", {navigateTo: undefined});
                  }}
                />
              </View>
            </View>
          ) : null}

          {/* Top doctor Rated Section List */}
          {doctors.length > 0 && (
            <Section
              title={translate("Home.topRatedDoctors")}
              renderItem={topRatedDoctor}
              data={doctors}
              horizontal={true}
              navigateTo={"SpecialDetails"}
              params={{
                name: translate("Home.topRatedDoctors"),
                filterType: "rating",
              }}
            />
          )}
        </Scroll>
      </View>
    </View>
  );
};

export default Home;
