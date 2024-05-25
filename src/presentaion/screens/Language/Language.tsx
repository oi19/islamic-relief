import React, {useState} from "react";
import {ScrollView, TextInput, View} from "react-native";

import Input from "../../components/shared/Input/Input";
import Header from "../../components/shared/Header";
import {useLoader, useNavigationHooks} from "../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";

import {userLogin} from "../../../redux";
import {Colors, Spacing, Typography} from "../../../styles";
import {styles} from "./styles";
import Text from "../../components/shared/Text/Text";
import SelectedLanguage from "../../../components/molecules/SelectedLanguage";
import {SelectCheckedOptions} from "../../../components";

const Language = () => {
  const {goBack} = useNavigationHooks<MainNavigationAllScreensTypes>();

  const list = [
    {id: 1, name: "العربية"},
    {id: 2, name: "English"},
  ];
  return (
    <View style={styles.rootScreen}>
      <Header
        title={" "}
        centeredTitle="لغة التطبيق"
        isShowHeaderShadow
        authHeader={true}
        style={{
          backgroundColor: Colors.WHITE,
          paddingHorizontal: Spacing.S16,
        }}
        onBack={goBack}
      />

      <ScrollView
        style={{
          paddingHorizontal: Spacing.S16,
          marginTop: Spacing.S40,
        }}>
        <Text fontFamily="MEDIUM" fontSize="H2" color="BLACK">
          {"اختر لغة التطبيق"}
        </Text>
        <SelectCheckedOptions listItems={list} />
      </ScrollView>
    </View>
  );
};

export default Language;
