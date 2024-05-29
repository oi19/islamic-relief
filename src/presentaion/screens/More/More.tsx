import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {
  FlatList,
  Image,
  Keyboard,
  Pressable,
  ScrollView,
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
import {RouteProp, useRoute} from "@react-navigation/native";
import {getHeight, getWidth} from "../../../styles/dimensions";

const More = () => {
  const {goBack, navigate} =
    useNavigationHooks<MainNavigationAllScreensTypes>();
  const errorModalRef = React.useRef<BottomSheetModal>(null);

  const {
    params: {list, title},
  } = useRoute<RouteProp<MainAppStackTypes, "More">>();

  const renderItem = ({item}) => {
    const navigateTo = title === "الاخبار" ? "ItemDetail" : "Payment";

    const passedProp =
      title !== "الاخبار"
        ? {
            isFixed: true,
            title: item.title,
          }
        : {
            title: title,
          };
    const onPress = () => {
      navigate(navigateTo, passedProp);
    };

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          // width: getWidth(width),
          flex: 1,
          height: getHeight(90),
          borderRadius: 12,
          alignItems: "center",
          marginHorizontal: Spacing.S16,
          marginBottom: Spacing.S20,
        }}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: 12,
          }}
          source={require("../../../assets/images/logo.png")}
        />
        <Text
          style={{marginTop: Spacing.S11, textAlign: "center"}}
          fontFamily="MEDIUM"
          fontSize="FS14">
          {item.title}
        </Text>
      </TouchableOpacity>

      // <TouchableOpacity
      //   onPress={() => {
      //     navigate("RecieptDetail", {
      //       id: item?.id,
      //     });
      //   }}
      //   style={{
      //     flexDirection: "row",
      //     padding: Spacing.S16,
      //     borderWidth: 1,
      //     borderColor: Colors.INPUT_BORDER,
      //     justifyContent: "space-between",
      //     borderRadius: 10,
      //     alignItems: "center",
      //   }}>
      //   <View>
      //     <Text fontFamily="BOLD" fontSize="FS16" color="PRIMARY">
      //       {"25 ج.م"}{" "}
      //     </Text>
      //     <View style={{flexDirection: "row"}}>
      //       <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
      //         {"25 / 11 /2021"}{" "}
      //       </Text>
      //       <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
      //         {"إطعام مساكين"}{" "}
      //       </Text>
      //     </View>
      //   </View>
      //   <Svgs
      //     name="arrow"
      //     color={Colors.PRIMARY}
      //     rotate={isRTL() ? "right" : "left"}
      //   />
      // </TouchableOpacity>
    );
  };

  const numbOfColumns = title === "الاخبار" ? 2 : 3;
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
      {/* <View style={{paddingHorizontal: Spacing.S16, marginTop: Spacing.S20}}> */}
      <FlatList
        data={list}
        renderItem={renderItem}
        contentContainerStyle={{
          flexGrow: 1,
          // paddingBottom: Spacing.S40 * 3.5,
          paddingTop: Spacing.S16,
          // justifyContent: "space-between",
          // alignItems: "stretch",
        }}
        numColumns={numbOfColumns}
        ItemSeparatorComponent={() => <View style={{height: Spacing.S40}} />}
        keyExtractor={(_, index) => `profile-row-item${index}`}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-between",
        }}
      />
      {/* </View> */}

      <ErrorMessageModal
        forwardRef={errorModalRef}
        message={translate("Modal.Error")}
      />
    </View>
  );
};

export default More;
