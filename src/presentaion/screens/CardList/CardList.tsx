import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  View,
} from "react-native";
import {LoginTypes} from "../../../@types";

import Button from "../../components/shared/Button/Button";
import Input from "../../components/shared/Input/Input";
import Text from "../../components/shared/Text/Text";
import Header from "../../components/shared/Header";
import ErrorMessageModal from "../../../components/models/ErrorMessageModal";
import {translate} from "../../../helpers";
import {confirmEmailSchema} from "../../../helpers/validationSchema";
import {useLoader, useNavigationHooks} from "../../../hooks";
import {
  MainAppStackTypes,
  MainNavigationAllScreensTypes,
} from "../../../navigation/navigation-types";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {userLogin} from "../../../redux";
import {Colors, Spacing} from "../../../styles";
import {styles} from "./styles";
import ViewRow from "../../components/shared/ViewRow/ViewRow";
import {Svgs} from "../../../assets";
import {isRTL} from "../../../locals/i18n-config";
import Card from "../../components/shared/Card/Card";
import {getHeight, scale} from "../../../styles/dimensions";
import ProgressBar from "../../components/shared/ProgressBar/ProgressBar";
import {RouteProp, useRoute} from "@react-navigation/native";
import {cardList} from "./data";

const CardList = () => {
  const {goBack, navigate, push} =
    useNavigationHooks<MainNavigationAllScreensTypes>();
  const errorModalRef = React.useRef<BottomSheetModal>(null);
  const {
    params: {title},
  } = useRoute<RouteProp<MainAppStackTypes, "CardList">>();
  const loginLoader = useLoader("login");

  const onSubmit = async (data: LoginTypes) => {
    Keyboard.dismiss();

    // onUpdateEmail(data);
  };

  const renderProgress = () => {
    return (
      <View style={{marginVertical: Spacing.S20}}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Text fontFamily="MEDIUM" fontSize="FS14">
            12983213i12$
          </Text>
          <Text fontFamily="MEDIUM" fontSize="FS14">
            تم التبرع لهم {20}%
          </Text>
        </View>

        <ProgressBar
          key={`Campain_${1}`}
          type="appLoading"
          progressStyle={{
            backgroundColor: "#C3C3C3",
            marginVertical: Spacing.S8,
          }}
          progressPercentage={70}
          onCompletion={() => {}}
          totalSteps={0}
          currentStep={0}
        />
        <Text fontFamily="MEDIUM" fontSize="FS14">
          {10} {20} الهدف الاجمالي
        </Text>
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          borderWidth: 2,
          borderColor: Colors.INPUT_BORDER,
          borderRadius: 12,
          flex: 1,
          paddingBottom: Spacing.S8,
          // elevation: 1,
          // backgroundColor: "red",
        }}>
        <TouchableOpacity
          onPress={() => {
            push("ItemDetail", {
              itemID: index,
              title: item.title,
              isCard: true,
              isFixed: true,
            });
          }}
          style={{width: "100%", height: getHeight(196)}}>
          <ImageBackground
            style={{
              height: "100%",
              overflow: "hidden",
              borderRadius: 12,
            }}
            source={item?.imageSource}
          />
        </TouchableOpacity>

        <View style={{padding: Spacing.S16}}>
          <Text fontFamily="MEDIUM" fontSize="FS18" style={{}}>
            {item.title}
          </Text>
          <View style={{flexDirection: "row", marginVertical: Spacing.S8}}>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
              }}>
              <Image
                resizeMode="contain"
                // source={{uri: country.flagUrl}}
                source={require("../../../assets/images/palestine.png")}
                style={styles.flag}
              />
              <Text
                fontFamily="MEDIUM"
                fontSize="FS12"
                style={{marginEnd: Spacing.S8}}>
                فلسطين
              </Text>
            </View>
            <Text
              fontFamily="MEDIUM"
              fontSize="FS12"
              style={{marginEnd: Spacing.S8}}>
              إطعام
            </Text>
            <Text
              fontFamily="MEDIUM"
              fontSize="FS12"
              style={{marginEnd: Spacing.S8}}>
              تبرع دوري
            </Text>
            <Text
              fontFamily="MEDIUM"
              fontSize="FS12"
              style={{marginEnd: Spacing.S8}}>
              يقبل الزكاة
            </Text>
          </View>
          {item.hasProgress ? renderProgress() : null}
          <Button
            style={{height: getHeight(44), marginTop: Spacing.S16}}
            type="standard"
            text="تبرع الان"
            onPress={() => {
              navigate("Payment", {
                title: item.title,
              });
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={" "}
        centeredTitle={title}
        isShowHeaderShadow
        authHeader={true}
        style={{
          backgroundColor: Colors.WHITE,
          paddingHorizontal: Spacing.S16,
        }}
        onBack={goBack}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: Spacing.S16,
          // marginTop: Spacing.S20,
        }}>
        <FlatList
          data={cardList}
          renderItem={renderItem}
          contentContainerStyle={{
            flexGrow: 1,
            // paddingBottom: Spacing.S40 * 3.5,
            paddingVertical: Spacing.S20,
          }}
          ItemSeparatorComponent={() => <View style={{height: Spacing.S16}} />}
          keyExtractor={(_, index) => `profile-row-item${index}`}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => {
            return (
              <>
                <Text fontFamily="MEDIUM" fontSize="H2" color="BLACK">
                  {"نتائج"}
                </Text>
              </>
            );
          }}
        />
      </View>

      <ErrorMessageModal
        forwardRef={errorModalRef}
        message={translate("Modal.Error")}
      />
    </View>
  );
};

export default CardList;
