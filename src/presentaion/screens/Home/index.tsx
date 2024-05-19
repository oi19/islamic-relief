import React from "react";
import {ListRenderItem, View} from "react-native";

import {Doctor, ServiceType} from "../../../@types";
import {Svgs} from "../../../assets";
import {DoctorCard, Scroll, Section, ServiceItem} from "../../../components";
import Button from "../../components/shared/Button/Button";
import Header from "../../components/shared/Header";
import Text from "../../components/shared/Text/Text";

import {serviceList} from "../../../dummyData";
import {useNavigationHooks, useToken} from "../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";
import {Colors, Spacing} from "../../../styles";
import {getHeight, getWidth} from "../../../styles/dimensions";
import {styles} from "./styles";
import {translate} from "../../../helpers";

import {useFocusEffect} from "@react-navigation/native";
import {getHomePageData, getUserProfile, useAppSelector} from "../../../redux";
import HeaderSection from "../../../presentaion/components/shared/HeaderSection/HeaderSection";
import ViewRow from "../../components/shared/ViewRow/ViewRow";
import Image from "../../components/shared/Image";
import {CampainSection} from "../../components/common/CampainSection/CampainSection";
import {ImportantFundsSections} from "../../components/common/FundsHomeSection/FundsHomeSection";
import {NewsSection} from "../../components/common/NewsHomeSection/NewsHomeSection";
import {SadakatSection} from "../../components/common/SadakatHomeSection/SadakatHomeSection";
import {ProjectSection} from "../../components/common/ProjectsHomeSection/ProjectsHomeSection";
import {GiveAwayCard} from "../../components/common/GiveAwayHomeSection/GiveAwayHomeSection";

const Home = () => {
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();

  const isLogged = useToken();

  useFocusEffect(
    React.useCallback(() => {
      Promise.all([getHomePageData(), getUserProfile()]);
    }, []),
  );

  React.useEffect(() => {
    getHomePageData();
  }, []);

  const renderHeaderStartIcons = () => {
    return (
      <ViewRow
        style={{
          justifyContent: "space-between",
        }}>
        <View>
          <Image
            resizeMode="contain"
            style={{width: 24}}
            source={require("../../../assets/images/logo.png")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}>
          <Button>
            <Svgs
              strokeWidth={2}
              name="search"
              style={{marginEnd: getWidth(10)}}
            />
          </Button>
          <Button>
            <Svgs strokeWidth={2} name="notifications" />
          </Button>
        </View>
      </ViewRow>
    );
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        style={{height: 100, paddingTop: Spacing.S20}}
        renderHeaderSideIcons={renderHeaderStartIcons}
        authHeader={false}
      />
      <View style={styles.container}>
        <Scroll contentContainerStyle={{flexGrow:1,paddingTop:Spacing.S20}}>
          <CampainSection data={[1, 2, 3]} isLoading={false} />
          <ImportantFundsSections data={[1, 2, 3, 4, 5, 6]} isLoading={false} />
          <NewsSection data={[1, 2, 3, 4, 5]} isLoading={false} />
          <SadakatSection data={[1, 2, 3, 4, 5, 6, 7]} isLoading={false} />
          <ProjectSection data={[1, 2, 3]} isLoading={false} />
          <GiveAwayCard isLoading={false} />

          {/* {!isLogged && (
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
          )} */}

          {/* ) : null} */}

          {/* Top doctor Rated Section List */}

       
        </Scroll>
      </View>
    </View>
  );
};

export default Home;
