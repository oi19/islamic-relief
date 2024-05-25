import {Alert, Linking, Platform, ScrollView, View} from "react-native";
import React, {useEffect, useState} from "react";
import {Colors, Spacing} from "../../../styles";
import {ProfileList, ProfileRowCard, Text, ViewRow} from "../../../components";
import Header from "../../components/shared/Header";
import {styles} from "./styles";
import {getProfileListWithoutLogin} from "./data";

import {useLoader, useNavigationHooks, useToken} from "../../../hooks";
import {MainAppStackTypes} from "../../../navigation/navigation-types";
import {convertObjToFormData, translate} from "../../../helpers";
import {selectCityById, updateUserData, useAppSelector} from "../../../redux";
import {profileRowType} from "../../../@types";
import {getHeight, scale} from "../../../styles/dimensions";

const Support: React.FC = () => {
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
          centeredTitle="خدمة العملاء"
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

  const renderChannelRow = ({
    item,
    handleOnRowPressed,
  }: {
    item: profileRowType;
    handleOnRowPressed: () => void;
  }) => {
    return (
      <ProfileRowCard
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          height: getHeight(56),
          borderWidth: 2,
          borderColor: Colors.INPUT_BORDER,
          borderRadius: scale(12),
        }}
        item={{
          name: item.name,
          icon: item.icon,
          isShowArrow: true,
          arrowColor: Colors.BLACK,
        }}
        handleOnRowPressed={handleOnRowPressed}
        isSupport={true}
      />
    );
  };

  return (
    <View style={styles.rootScreen}>
      {renderHeader()}

      <ScrollView style={styles.container}>
        <View style={{paddingEnd: Spacing.S70}}>
          <Text fontFamily="MEDIUM" fontSize="H2" color="BLACK">
            {
              "يمكنك التواصل معنا عبر خدمة الواتس اب . او الاتصال بنا عبر خدمة الرد الالي"
            }
          </Text>
        </View>

        {renderChannelRow({
          item: {name: "واتساب", icon: "whatsApp"},
          handleOnRowPressed: () => console.warn("omar"),
        })}
        {renderChannelRow({
          item: {name: "اتصل بنا ", icon: "contactUs"},
          handleOnRowPressed: () => console.warn("omar"),
        })}
        {renderChannelRow({
          item: {name: "شات", icon: "chatIcon"},
          handleOnRowPressed: () => console.warn("omar"),
        })}
      </ScrollView>

      {profileLoading && <View style={styles.disableClicks} />}
    </View>
  );
};

export default Support;
