import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React from "react";
import {View} from "react-native";
import DocumentPicker, {
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from "react-native-document-picker";

import {Images} from "../../assets/images";
import {
  Button,
  CalenderModel,
  GenderModal,
  Header,
  Image,
  Input,
  ProfileRowCard,
  RoundedIcon,
  Scroll,
  Text,
} from "../../components";
import {genders} from "../../dummyData";
import {formateDate, getValueFromId, translate} from "../../helpers";
import {Colors, Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";
import {TextProps} from "../../components/atoms/Text/Text";

const labelStyle: TextProps = {
  fontSize: "FS14",
  color: "BLUE_4A5970",
  fontFamily: "NORMAL",
};
const Account = () => {
  const genderModalRef = React.useRef<BottomSheetModal>(null);
  const calenderModelRef = React.useRef<BottomSheetModal>(null);

  const [selectedGender, setSelectedGender] = React.useState<number>(1);

  const [image, setImage] = React.useState<
    DocumentPickerResponse | undefined | null
  >(null);

  const [date, setDate] = React.useState<string | null>(null);

  const handleError = (err: unknown) => {
    if (isCancel(err)) {
      console.warn("cancelled");
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        "multiple pickers were opened, only the last will be considered",
      );
    } else {
      throw err;
    }
  };

  const handleUploadDocuments = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: "fullScreen",
        copyTo: "cachesDirectory",
        type: types.images,
      });
      setImage(pickerResult);
    } catch (e) {
      handleError(e);
    }
  };

  const onSelectedGender = (genderId: number) => {
    console.log("gender id", `${genderId}`);
    setSelectedGender(genderId);
  };

  const renderAvatar = () => {
    return (
      <View style={styles.avatarContainer}>
        <Image
          source={image ? {uri: image?.fileCopyUri} : Images.default}
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
            icon="delete"
            backgroundColor="PRIMARY"
          />
          <Text
            onPress={() => {
              console.log("change Photo");
              handleUploadDocuments();
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

  const onConfirmDate = (_date: Date) => {
    //  setFieldValue("birthdate", moment(_date).format("YYYY-MM-DD"));
    console.log(_date);
    setDate(formateDate(_date));
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
          <Input
            label={`${translate("Form.phone")}*`}
            placeholder={`+20 ${translate("Form.phone")}`}
            style={styles.input}
            keyboardType="phone-pad"
            inputContainerStyle={styles.inputContainer}
            labelStyle={labelStyle}
          />

          <Input
            label={`${translate("Form.email")}*`}
            labelStyle={labelStyle}
            placeholder={translate("Form.enterEmail")}
            style={styles.input}
            inputContainerStyle={styles.inputContainer}
          />

          <Input
            label={`${translate("Form.fullName")}*`}
            labelStyle={labelStyle}
            placeholder={translate("Form.enterFullName")}
            style={styles.input}
            inputContainerStyle={styles.inputContainer}
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

          <ProfileRowCard
            item={{
              name: translate("Form.password"),
              navigateTo: "ResetPassword",
            }}
            style={styles.password}
            handleOnRowPressed={() => {}}
          />
        </Scroll>
        {/* <Button type="standard" text="Save" /> */}
      </View>

      <Button
        type="standard"
        text={translate("Common.save")}
        style={styles.saveButton}
      />
      <GenderModal
        selectedId={selectedGender.toString()}
        onSelect={id => {
          onSelectedGender(id);
        }}
        forwardRef={genderModalRef}
      />

      <CalenderModel
        handleOnSelectDate={onConfirmDate}
        forwardRef={calenderModelRef}
      />
    </View>
  );
};

export default Account;
