import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Keyboard, ScrollView, View} from "react-native";
import {LoginTypes, UserAccountType} from "../../../@types";

import Button from "../../components/shared/Button/Button";
import Input from "../../components/shared/Input/Input";
import Text from "../../components/shared/Text/Text";
import Line from "../../components/shared/Line";
import ViewRow from "../../components/shared/ViewRow/ViewRow";
import Header from "../../components/shared/Header";
import ErrorMessageModal from "../../../components/models/ErrorMessageModal";
import {
  areObjectsEqual,
  convertObjToFormData,
  formateDate,
  formateImage,
  requestStoragePermission,
  translate,
} from "../../../helpers";
import {
  AccountSignUpSchema,
  userAccountSchema,
} from "../../../helpers/validationSchema";
import {useLoader, useNavigationHooks} from "../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import {
  dispatch,
  showToast,
  updateUserData,
  useAppSelector,
  userLogin,
} from "../../../redux";
import {Colors, Spacing} from "../../../styles";
import {styles} from "./styles";
import CountryModal from "../../components/shared/CountryModal/CountryModal";

import Svgs, {IconsName} from "../../../assets/svgs";
import Image from "../../components/shared/Image";
// import Image from "../../../components";
import {CalenderModel, RoundedIcon} from "../../../components";
import CameraModel, {
  ImageCropResponse,
} from "../../../components/models/CameraModel";
import {TouchableOpacity} from "react-native-gesture-handler";

const socialMediaList: IconsName[] = ["apple", "google", "facebook"];

const PersonalInfo = () => {
  const {profile} = useAppSelector(state => state.userReducer);
  const {goBack, navigate} =
    useNavigationHooks<MainNavigationAllScreensTypes>();

  const errorModalRef = React.useRef<BottomSheetModal>(null);
  const countryModalRef = React.useRef<BottomSheetModal>(null);
  const cameraModelRef = React.useRef<BottomSheetModal>(null);
  const calenderModelRef = React.useRef<BottomSheetModal>(null);

  const [countryCode, setCountryCode] = useState<string>("+20");
  const [selectedCountry, setSelectedCountry] = useState<any>();
  const loginLoader = useLoader("login");

  const [image, setImage] = React.useState<
    ImageCropResponse | null | undefined
  >(null);

  const [date, setDate] = React.useState<string | null>(
    profile.birthday || null,
  );

  const {
    setValue,
    handleSubmit,
    clearErrors,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(userAccountSchema),
  });

  const defaultValues = {
    name: profile.name,
    gender: profile.gender?.toString(),
    birthday: profile.birthday,
  };

  const handleLoginPressed = async (data: LoginTypes) => {
    Keyboard.dismiss();

    onLoginSubmit(data);
  };

  const onImageChange = (selectedImage?: ImageCropResponse) => {
    setImage(selectedImage);
  };

  const onCameraPressIconPress = () => {
    requestStoragePermission()
      .then(() => {
        cameraModelRef?.current?.present();
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  const onSubmit = (data: any) => {
    const isEqual = areObjectsEqual(data, defaultValues);
    if (isEqual) {
      // dispatch(showToast(translate("Model.nothingToUpdate")));

      return;
    }
    const _data = convertObjToFormData(data);
    if (image) {
      _data.append("image", formateImage(image?.path));
    }
    goBack();
    updateUserData(_data, res => {
      if (res.status === 200) {
        goBack();
        // dispatch(showToast(translate("Model.updateDoctorMessage")));
      }
    });
  };

  const onConfirmDate = (_date: Date) => {
    clearErrors("birthday");
    setValue("birthday", formateDate(_date));
    setDate(formateDate(_date));
  };

  const onConfirmConutry = (_country: any) => {
    clearErrors("nationality");
    setValue("nationality", _country?.name);
    setSelectedCountry(_country);
  };

  const renderAvatar = () => {
    return (
      <View style={styles.avatarContainer}>
        {image ? (
          <Image
            source={{uri: image.path} || {uri: profile.image}}
            style={styles.image}
          />
        ) : (
          <Svgs
            circleBackground="#F4F4F4"
            width={140}
            height={140}
            name="profileUserIcon"
          />
        )}
        <View style={styles.actionsContainer}>
          <RoundedIcon
            onPress={onCameraPressIconPress}
            size={32}
            // style={styles.roundedIcon}
            iconStyle={styles.icon}
            icon="camera"
            backgroundColor="PRIMARY"
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={" "}
        centeredTitle="معلومات شخصية"
        isShowHeaderShadow
        authHeader={true}
        onBack={goBack}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={styles.content}
        contentContainerStyle={{
          justifyContent: "space-between",
          flexGrow: 1,
        }}>
        <View>
          {renderAvatar()}
          <Text
            fontFamily="MEDIUM"
            fontSize="FS24"
            style={{alignSelf: "center"}}>
            {"اختيار  الصورة الشخصية"}
          </Text>
          <View style={{marginTop: Spacing.S40}}>
            <Input
              key={"signup_mobile"}
              placeholder={"الاسم كامل"}
              style={styles.input}
              keyboardType={"default"}
              inputContainerStyle={styles.inputContainer}
              onChangeText={text => {
                clearErrors();
                setValue("name", text);
              }}
              error={errors?.name?.message?.toString()}
              // countryButtonHandler={onOpenCountryModal}
              // value={mobileOrEmailFieldInput}
            />

            <Button
              type="border"
              style={[
                styles.inputContainer,
                {
                  justifyContent: "flex-start",
                  backgroundColor: Colors.INPUT_BACKGROUND,
                  borderColor: Colors.INPUT_BORDER,
                  marginTop: Spacing.S16,
                },
              ]}
              onPress={() => {
                countryModalRef.current?.present();
              }}>
              <Input
                key={"signup_password_confirmation"}
                placeholder={"الجنسية"}
                style={{flex: 1}}
                readOnly={true}
                value={selectedCountry?.name}
                // inputContainerStyle={{flex: 1}}
              />
            </Button>
            {errors.nationality?.message ? (
              <Text color="RED" fontFamily="MEDIUM" style={styles.error}>
                {errors?.nationality?.message?.toString()}
              </Text>
            ) : null}
            <Button
              type="border"
              style={[
                styles.inputContainer,
                {
                  justifyContent: "flex-start",
                  backgroundColor: Colors.INPUT_BACKGROUND,
                  borderColor: Colors.INPUT_BORDER,
                  marginTop: Spacing.S16,
                },
              ]}
              onPress={() => {
                calenderModelRef.current?.present();
              }}>
              <Input
                key={"signup_password_confirmation"}
                placeholder={"تاريخ الميلاد"}
                style={{flex: 1}}
                readOnly={true}
                value={date && date?.toString()}
                // inputContainerStyle={{flex: 1}}
              />
            </Button>
            {errors.birthday?.message ? (
              <Text color="RED" fontFamily="MEDIUM" style={styles.error}>
                {errors?.birthday?.message?.toString()}
              </Text>
            ) : null}
          </View>
        </View>
        <Button
          text={"حفظ"}
          type="standard"
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
          textStyle={{fontSize: "FS16"}}
        />
      </KeyboardAwareScrollView>

      <CalenderModel
        handleOnSelectDate={onConfirmDate}
        forwardRef={calenderModelRef}
      />
      <CountryModal
        onSelect={onConfirmConutry}
        forwardRef={countryModalRef}
        selectedCountry={selectedCountry}
      />
      <ErrorMessageModal
        forwardRef={errorModalRef}
        message={translate("Modal.Error")}
      />
      <CameraModel onSetImage={onImageChange} forwardRef={cameraModelRef} />
      {/* {<BlurProgressView loadingDisabled={true} />} */}
    </View>
  );
};

export default PersonalInfo;
