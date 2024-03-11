import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React from "react";
import {View} from "react-native";

import {Images} from "../../assets/images";
import {
  Button,
  CalenderModel,
  GenderModal,
  Header,
  Image,
  ProfileRowCard,
  RoundedIcon,
  Scroll,
  Text,
  ControlledInput,
} from "../../components";
import {genders} from "../../dummyData";
import {
  areObjectsEqual,
  convertObjToFormData,
  formateDate,
  formateImage,
  getValueFromId,
  requestStoragePermission,
  translate,
} from "../../helpers";
import {Colors, Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";
import {TextProps} from "../../components/atoms/Text/Text";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {dispatch, showToast, updateUserData, useAppSelector} from "../../redux";
import {userAccountSchema} from "../../helpers/validationSchema";
import {UserAccountType} from "../../@types";
import {useLoader, useNavigationHooks} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import ErrorMessageModal from "../../components/models/ErrorMessageModal";
import CameraModel, {
  ImageCropResponse,
} from "../../components/models/CameraModel";

const labelStyle: TextProps = {
  fontSize: "FS14",
  color: "BLUE_4A5970",
  fontFamily: "NORMAL",
};
const Account = () => {
  const {profile} = useAppSelector(state => state.userReducer);

  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const accountLoading = useLoader("updateUserProfile");
  const genderModalRef = React.useRef<BottomSheetModal>(null);
  const calenderModelRef = React.useRef<BottomSheetModal>(null);
  const errorModalRef = React.useRef<BottomSheetModal>(null);
  const cameraModelRef = React.useRef<BottomSheetModal>(null);
  const [date, setDate] = React.useState<string | null>(
    profile.birthday || null,
  );
  const [selectedGender, setSelectedGender] = React.useState<number>(
    Number(profile.gender),
  );
  const [image, setImage] = React.useState<
    ImageCropResponse | null | undefined
  >(null);

  const defaultValues = {
    email: profile.email,
    mobile: profile.mobile,
    name: profile.name,
    gender: profile.gender?.toString(),
    birthday: profile.birthday,
  };

  console.log(defaultValues);

  const {
    control,
    setValue,
    handleSubmit,
    clearErrors,
    formState: {errors},
  } = useForm({
    resolver: yupResolver<any>(userAccountSchema),
    defaultValues,
  });

  const onSelectedGender = (genderId: number) => {
    clearErrors("gender");
    setValue("gender", genderId.toString());
    setSelectedGender(genderId);
  };

  const onConfirmDate = (_date: Date) => {
    clearErrors("birthday");
    setValue("birthday", formateDate(_date));
    setDate(formateDate(_date));
  };

  const onImageChange = (selectedImage?: ImageCropResponse) => {
    setImage(selectedImage);
  };

  const onChangeTextHandler = (fieldName: any, text: string) => {
    clearErrors(fieldName);
    setValue(fieldName, text);
  };

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
        <Image
          source={
            image
              ? {uri: image.path}
              : profile.image
              ? {uri: profile.image}
              : Images.default
          }
          style={styles.image}
        />
        <View style={styles.actionsContainer}>
          <RoundedIcon
            onPress={onImageChange}
            size={32}
            style={styles.roundedIcon}
            iconStyle={styles.icon}
            icon="profile"
            backgroundColor="PRIMARY"
          />
          <Text
            onPress={() => {
              requestStoragePermission()
                .then(() => {
                  cameraModelRef?.current?.present();
                })
                .catch(error => {
                  console.log("error", error);
                });
            }}
            fontSize="FS14"
            color="PRIMARY"
            style={styles.changePhoto}>
            {translate("Profile.changePhoto")}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("Profile.account")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />
      {/* Avatar section */}
      {renderAvatar()}

      <View style={styles.container}>
        <Scroll
          ListHeaderComponentStyle={{alignItems: "center"}}
          contentContainerStyle={{
            paddingBottom: Spacing.S40 * 3.5,
          }}>
          <ControlledInput
            label={`${translate("Form.phone")}*`}
            placeholder={`+20 ${translate("Form.phone")}`}
            style={styles.input}
            keyboardType="phone-pad"
            inputContainerStyle={styles.inputContainer}
            labelStyle={labelStyle}
            error={errors?.mobile?.message?.toString()}
            onChangeText={text => onChangeTextHandler("mobile", text)}
            fieldName={"mobile"}
            control={control}
          />

          <ControlledInput
            label={`${translate("Form.email")}*`}
            labelStyle={labelStyle}
            placeholder={translate("Form.enterEmail")}
            style={styles.input}
            inputContainerStyle={styles.inputContainer}
            error={errors?.email?.message?.toString()}
            onChangeText={text => onChangeTextHandler("email", text)}
            fieldName={"email"}
            control={control}
          />

          <ControlledInput
            label={`${translate("Form.fullName")}*`}
            labelStyle={labelStyle}
            placeholder={translate("Form.enterFullName")}
            style={styles.input}
            inputContainerStyle={styles.inputContainer}
            error={errors?.name?.message?.toString()}
            onChangeText={text => onChangeTextHandler("name", text)}
            fieldName={"name"}
            control={control}
          />

          <Text
            fontSize="FS14"
            color="BLUE_4A5970"
            fontFamily="NORMAL"
            style={styles.title}>
            {translate("completePatientDetails.gender")}
          </Text>
          <Button
            type="dropdown"
            placeholder={translate("completePatientDetails.gender")}
            text={getValueFromId(selectedGender || 0, genders)}
            iconStyle={{color: Colors.PRIMARY}}
            style={styles.dropdownButton}
            textStyle={{color: "BLUE_4A5970"}}
            onPress={() => {
              genderModalRef?.current?.present();
            }}
          />
          <Text color="RED" style={styles.error}>
            {errors?.gender?.message?.toString()}
          </Text>

          <Button
            type="border"
            text={date || translate("Form.birthday")}
            textStyle={{color: "BLUE_4A5970"}}
            style={[styles.password, styles.calenderButtonStyle]}
            onPress={() => {
              calenderModelRef.current?.present();
            }}
            iconName="calender"
            iconStyle={{color: Colors.PRIMARY}}
          />
          <Text color="RED" style={styles.error}>
            {errors?.birthday?.message?.toString()}
          </Text>

          <ProfileRowCard
            item={{
              name: translate("Form.password"),
            }}
            style={styles.password}
            handleOnRowPressed={() => {
              navigate("ResetPassword", {
                passwordActionIndicator: "resetPassword",
              });
            }}
          />
        </Scroll>
      </View>

      <Button
        type="standard"
        text={translate("Common.save")}
        style={styles.saveButton}
        onPress={handleSubmit(onSubmit)}
        isLoading={accountLoading}
      />
      <GenderModal
        selectedId={selectedGender}
        onSelect={onSelectedGender}
        forwardRef={genderModalRef}
      />

      <CalenderModel
        handleOnSelectDate={onConfirmDate}
        forwardRef={calenderModelRef}
      />
      <ErrorMessageModal forwardRef={errorModalRef} />
      <CameraModel
        onSetImage={selectedImage => {
          onImageChange(selectedImage);
        }}
        forwardRef={cameraModelRef}
      />
    </View>
  );
};

export default Account;
