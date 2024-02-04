import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {RefObject} from "react";
import {View} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import {changeLanguage, translate} from "../../../helpers";
import {Button, Text} from "../../atoms";
import BaseModal from "../BaseModal/BaseModal";
import {styles} from "./styles";
import {Colors} from "../../../styles";
import LanguageItemCard, {
  ItemLanguageType,
} from "../../organisms/LanguageItemCard";
import {isRTL} from "../../../locals/i18n-config";

type LanguageModelProps = {
  forwardRef: RefObject<BottomSheetModal>;
};
const LanguageModel: React.FC<LanguageModelProps> = ({forwardRef}) => {
  const langSection: ItemLanguageType[] = [
    {
      name: "English",
      onPress: () => {
        changeLanguage("en");
        //   dispatch(changeLanguage({isRTL: false, locale: "en"}));
      },
      // icon: IMAGES?.english,
      checked: !isRTL(), // change when change Locale
    },
    {
      name: "عربي",
      onPress: () => {
        changeLanguage("ar");
        //   dispatch(changeLanguage({isRTL: true, locale: "ar"}));
      },
      // icon: IMAGES?.arabic,
      checked: isRTL(), // change when change Locale
    },
  ];
  return (
    <BaseModal
      forwardRef={forwardRef}
      snapPoints={["100%"]}
      backgroundStyle={styles.model}>
      <View style={styles.root}>
        <View style={styles.container}>
          <LinearGradient
            start={{x: 0.2, y: 1}}
            end={{x: 2.1, y: 1}}
            colors={Colors.PRIMARY_GRADIENT}
            style={styles.header}>
            <Text
              fontSize="FS16"
              color="WHITE"
              fontFamily="MEDIUM"
              style={styles.headerText}>{`${translate("Languages")}`}</Text>
            <Button
              iconName="close"
              style={styles.closeButton}
              iconStyle={{
                color: Colors.WHITE,
              }}
              onPress={() => {
                forwardRef.current?.close();
              }}
            />
          </LinearGradient>
          <LanguageItemCard data={langSection} />
        </View>
      </View>
    </BaseModal>
  );
};

export default LanguageModel;
