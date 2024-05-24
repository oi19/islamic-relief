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
  formateImage,
  requestStoragePermission,
  translate,
} from "../../../helpers";
import {AccountSignUpSchema} from "../../../helpers/validationSchema";
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
import {RoundedIcon} from "../../../components";
import CameraModel, {
  ImageCropResponse,
} from "../../../components/models/CameraModel";

const socialMediaList: IconsName[] = ["apple", "google", "facebook"];

const PersonalInfo = () => {
  const {profile} = useAppSelector(state => state.userReducer);
  const {goBack, navigate} =
    useNavigationHooks<MainNavigationAllScreensTypes>();

  const errorModalRef = React.useRef<BottomSheetModal>(null);
  const countryModalRef = React.useRef<BottomSheetModal>(null);
  const cameraModelRef = React.useRef<BottomSheetModal>(null);

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<string>("+20");
  const [mobileOrEmailFieldInput, setMobileOrEmailFieldInput] =
    useState<string>();
  const loginLoader = useLoader("login");

  const [image, setImage] = React.useState<
    ImageCropResponse | null | undefined
  >(null);

  const {
    setValue,
    handleSubmit,
    clearErrors,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(AccountSignUpSchema),
  });

  const defaultValues = {
    email: profile.email,
    mobile: profile.mobile,
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

  const onLoginSubmit = (data: LoginTypes) => {
    // userLogin(data, res => {
    // if (res) {
    navigate("TabsBottomStack");
    // }
    // });
  };

  // const onChangeTextHandler = (
  //   fieldName: "identifier" | "password" | "password_confirmation",
  //   text: string,
  // ) => {
  //   clearErrors();
  //   if (fieldName == "identifier") {
  //     mobileOrEmailInputChecker(fieldName, text);
  //     return;
  //   }
  //   setValue(fieldName, text);
  // };

  // const mobileOrEmailInputChecker = (
  //   fieldName: "identifier",
  //   fieldInput: any,
  // ) => {
  //   let checkedInput = fieldInput;
  //   const str = String(fieldInput);
  //   const containsOnlyNumbers = /^\d+$/.test(str);
  //   if (containsOnlyNumbers && str !== "") {
  //     console.log("Input contains only numbers");
  //     checkedInput = countryCode + fieldInput;
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //     console.log(
  //       "Input contains characters or a combination of characters and numbers",
  //     );
  //   }
  //   setValue(fieldName, checkedInput);
  //   setMobileOrEmailFieldInput(fieldInput);
  // };

  // const loginPressed = () => {
  //   clearErrors();
  //   goBack();
  // };

  // const onCountryModalSelect = (item: any) => {
  //   setCountryCode(item?.countryCode);
  //   setValue("identifier", countryCode);
  //   onCloseCountryModal();
  // };

  // const onCloseCountryModal = () => {
  //   countryModalRef.current?.close();
  // };
  // const onOpenCountryModal = () => {
  //   countryModalRef.current?.present();
  // };
  const onSubmit = (data: UserAccountType) => {
    const isEqual = areObjectsEqual(data, defaultValues);
    if (isEqual) {
      dispatch(showToast(translate("Model.nothingToUpdate")));
      return;
    }
    const _data = convertObjToFormData(data);
    if (image) {
      _data.append("image", formateImage(image?.path));
    }
    updateUserData(_data, res => {
      if (res.status === 200) {
        dispatch(showToast(translate("Model.updateDoctorMessage")));
      }
    });
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
              keyboardType={isMobile ? "phone-pad" : "default"}
              isMobile={isMobile}
              inputContainerStyle={styles.inputContainer}
              // onChangeText={text => onChangeTextHandler("identifier", text)}
              error={errors?.identifier?.message?.toString()}
              // countryButtonHandler={onOpenCountryModal}
              countryCode={countryCode}
              value={mobileOrEmailFieldInput}
            />
            {isMobile === false ? (
              <>
                <Input
                  key={"signup_password"}
                  password
                  placeholder={"الجنسية"}
                  style={styles.input}
                  inputContainerStyle={styles.inputContainer}
                  // onChangeText={text => onChangeTextHandler("password", text)}
                  error={errors?.password?.message?.toString()}
                />
                <Input
                  key={"signup_password_confirmation"}
                  password
                  placeholder={"تأكيد كلمة المرور "}
                  style={styles.input}
                  inputContainerStyle={styles.inputContainer}
                  // onChangeText={text =>
                  //   onChangeTextHandler("password_confirmation", text)
                  // }
                  error={errors?.password_confirmation?.message?.toString()}
                />
              </>
            ) : null}
          </View>
        </View>
        <Button
          text={"انشاء حساب"}
          type="standard"
          // onPress={handleSubmit(handleLoginPressed)}
          style={styles.button}
          textStyle={{fontSize: "FS16"}}
        />
      </KeyboardAwareScrollView>
      <CountryModal
        forwardRef={countryModalRef}
        // onSelect={item => onCountryModalSelect(item)}
        selectedId={0}
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
