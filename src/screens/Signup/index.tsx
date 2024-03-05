import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React from "react";
import {View} from "react-native";

import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import Text, {TextProps} from "../../components/atoms/Text/Text";
import {userRegisterSchema} from "../../helpers/validationSchema";
import {registerUserForm} from "../../redux";
import CameraModel, {
  ImageCropResponse,
} from "../../components/models/CameraModel";
import {
  Button,
  CalenderModel,
  ControlledInput,
  GenderModal,
  Image,
  Input,
  RoundedIcon,
  Scroll,
  SuccessModel,
} from "../../components";
import {styles} from "./styles";
import {Images} from "../../assets/images";
import {
  convertObjToFormData,
  formateDate,
  formateImage,
  getValueFromId,
  requestStoragePermission,
  translate,
} from "../../helpers";
import {DoctorRegisterTypes} from "../../@types";
import {Colors, Spacing} from "../../styles";
import {genders} from "../../dummyData";
import {useLoader, useNavigationHooks} from "../../hooks";
import {MainNavigationAllScreensTypes} from "../../navigation/navigation-types";

export const labelStyle: TextProps = {
  fontSize: "FS14",
  color: "BLUE_4A5970",
  fontFamily: "NORMAL",
};

const Signup = () => {
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();

  const {
    setValue,
    control,
    handleSubmit,
    clearErrors,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(userRegisterSchema),
  });

  const genderModalRef = React.useRef<BottomSheetModal>(null);
  const calenderModelRef = React.useRef<BottomSheetModal>(null);
  const cameraModelRef = React.useRef<BottomSheetModal>(null);
  const successModalRef = React.useRef<BottomSheetModal>(null);

  const [selectedGender, setSelectedGender] = React.useState<number>(-1);
  const [image, setImage] = React.useState<ImageCropResponse | null>(null);
  const [date, setDate] = React.useState<string | null>(null);

  const registerLoader = useLoader("registerUserForm");

  const onSelectedGender = (genderId: number) => {
    clearErrors("gender");
    setValue("gender", genderId.toString());
    setSelectedGender(genderId);
  };

  const renderAvatar = () => {
    return (
      <View style={styles.avatarContainer}>
        <Image
          source={image ? {uri: image?.path} : Images.default}
          style={styles.image}
        />
        <View style={styles.actionsContainer}>
          <RoundedIcon
            onPress={() => {
              console.log("delete Photo");
            }}
            size={32}
            style={styles.roundedIcon}
            iconStyle={styles.icon}
            icon="upload"
            backgroundColor="TRANSPARENT"
          />
          <Text
            onPress={() => {
              // handleUploadDocuments();
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
          <Text color="RED" style={[styles.error, styles.imageError]}>
            {errors?.image?.message}
          </Text>
        </View>
      </View>
    );
  };

  const onConfirmDate = (_date: Date) => {
    clearErrors("birthday");
    setValue("birthday", formateDate(_date));
    setDate(formateDate(_date));
  };

  const onOpenSuccessModal = () => {
    successModalRef.current?.present();
  };

  const onSubmit = async (data: DoctorRegisterTypes) => {
    // if (errors?.image) {
    //   dispatch(showErrorModel(errors?.image?.message));
    //   return;
    // }
    const _data = convertObjToFormData({
      ...data,
      image: formateImage(data?.image),
    });
    registerUserForm(_data, res => {
      if (res) {
        onOpenSuccessModal();
      }
    });
  };

  return (
    <View style={styles.rootScreen}>
      <Text
        style={{marginHorizontal: Spacing.S20}}
        fontFamily="BOLD"
        fontSize="H1">
        {translate("Form.createAccount")}
      </Text>
      <Scroll
        ListHeaderComponentStyle={{alignItems: "center"}}
        contentContainerStyle={{paddingBottom: Spacing.S56}}>
        {renderAvatar()}

        <ControlledInput
          fieldName="mobile"
          control={control}
          label={`${translate("Form.mobile")}*`}
          placeholder={`+20 ${translate("Form.mobile")}`}
          style={styles.input}
          keyboardType="phone-pad"
          inputContainerStyle={styles.inputContainer}
          labelStyle={labelStyle}
          maxLength={11}
          // error={errors?.mobile?.message}
          // onChangeText={text => setValue("mobile", text)}
          // defaultValue={doctorRegister?.mobile}
        />

        <ControlledInput
          fieldName="email"
          control={control}
          label={`${translate("Form.email")}*`}
          labelStyle={labelStyle}
          placeholder={translate("Form.enterEmail")}
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
        />

        <ControlledInput
          fieldName="name"
          control={control}
          label={`${translate("Form.name")}*`}
          labelStyle={labelStyle}
          placeholder={translate("Form.enterFullName")}
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
        />

        <ControlledInput
          control={control}
          fieldName="password"
          label={`${translate("Form.password")}*`}
          labelStyle={labelStyle}
          password
          placeholder={translate("Form.enterPassword")}
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          // error={errors?.password?.message}
          // onChangeText={text => setValue("password", text)}

          // defaultValue={doctorRegister?.password}
        />

        <Input
          label={`${translate("Form.password_confirmation")}*`}
          labelStyle={labelStyle}
          password
          placeholder={translate("Form.enterPassword")}
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          error={errors?.password_confirmation?.message}
          onChangeText={text => setValue("password_confirmation", text)}

          // defaultValue={doctorRegister?.password_confirmation}
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
          text={getValueFromId(selectedGender, genders)}
          iconStyle={{color: Colors.PRIMARY}}
          style={styles.dropdownButton}
          textStyle={{color: "BLUE_4A5970"}}
          onPress={() => {
            genderModalRef?.current?.present();
          }}
        />
        <Text color="RED" style={styles.error}>
          {errors?.gender?.message}
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
          {errors?.birthday?.message}
        </Text>

        <Button
          type="standard"
          isLoading={registerLoader}
          onPress={handleSubmit(onSubmit)}
          text={translate("Common.save")}
          style={styles.saveButton}
        />
      </Scroll>

      <GenderModal
        selectedId={selectedGender}
        onSelect={id => {
          onSelectedGender(id);
        }}
        forwardRef={genderModalRef}
      />

      <CalenderModel
        handleOnSelectDate={onConfirmDate}
        forwardRef={calenderModelRef}
      />
      <CameraModel
        onSetImage={selectedImage => {
          console.log(selectedImage);
          clearErrors("image");
          setValue("image", selectedImage?.path);
          setImage(selectedImage);
        }}
        forwardRef={cameraModelRef}
      />
      <SuccessModel
        forwardRef={successModalRef}
        message={translate("Model.congratulationsMessage")}
        onContinuePress={() => {
          navigate("TabsBottomStack");
          setTimeout(() => {
            successModalRef.current?.close();
          }, 5);
        }}
      />
    </View>
  );
};

export default Signup;
