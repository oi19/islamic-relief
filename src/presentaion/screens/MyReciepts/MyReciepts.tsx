import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {
  FlatList,
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
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {userLogin} from "../../../redux";
import {Colors, Spacing} from "../../../styles";
import {styles} from "./styles";
import ViewRow from "../../components/shared/ViewRow/ViewRow";
import {Svgs} from "../../../assets";
import {isRTL} from "../../../locals/i18n-config";

const MyReciepts = () => {
  const {goBack, navigate} =
    useNavigationHooks<MainNavigationAllScreensTypes>();
  const errorModalRef = React.useRef<BottomSheetModal>(null);

  const loginLoader = useLoader("login");

  const {
    setValue,
    handleSubmit,
    clearErrors,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(confirmEmailSchema),
  });

  const onSubmit = async (data: LoginTypes) => {
    Keyboard.dismiss();

    // onUpdateEmail(data);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigate("RecieptDetail", {
            id: item?.id,
          });
        }}
        style={{
          flexDirection: "row",
          padding: Spacing.S16,
          borderWidth: 1,
          borderColor: Colors.INPUT_BORDER,
          justifyContent: "space-between",
          borderRadius: 10,
          alignItems: "center",
        }}>
        <View>
          <Text fontFamily="BOLD" fontSize="FS16" color="PRIMARY">
            {"25 ج.م"}{" "}
          </Text>
          <View style={{flexDirection: "row"}}>
            <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
              {"25 / 11 /2021"}{" "}
            </Text>
            <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
              {"إطعام مساكين"}{" "}
            </Text>
          </View>
        </View>
        <Svgs
          name="arrow"
          color={Colors.PRIMARY}
          rotate={isRTL() ? "right" : "left"}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={" "}
        centeredTitle=" إيصالاتي"
        isShowHeaderShadow
        authHeader={true}
        style={{
          backgroundColor: Colors.WHITE,
          paddingHorizontal: Spacing.S16,
        }}
        onBack={goBack}
      />
      <View style={{paddingHorizontal: Spacing.S16, marginTop: Spacing.S40}}>
        <Text fontFamily="MEDIUM" fontSize="H2" color="BLACK">
          {"الايصالات"}
        </Text>

        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={renderItem}
          contentContainerStyle={{
            flexGrow: 1,
            // paddingBottom: Spacing.S40 * 3.5,
            paddingTop: Spacing.S16,
          }}
          ItemSeparatorComponent={() => <View style={{height: Spacing.S16}} />}
          keyExtractor={(_, index) => `profile-row-item${index}`}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <ErrorMessageModal
        forwardRef={errorModalRef}
        message={translate("Modal.Error")}
      />
    </View>
  );
};

export default MyReciepts;
