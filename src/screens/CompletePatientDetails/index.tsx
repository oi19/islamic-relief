import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React from "react";
import {View} from "react-native";
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from "react-native-document-picker";

import {
  Button,
  GenderModal,
  Header,
  Input,
  Text,
  WarningMessageModel,
} from "../../components";
import {genders} from "../../dummyData";
import {getValueFromId, translate} from "../../helpers";
import {Colors, Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {useNavigationHooks} from "../../hooks";

const CompletePatientDetails = () => {
  const genderModalRef = React.useRef<BottomSheetModal>(null);
  const warningModalRef = React.useRef<BottomSheetModal>(null);
  const {navigate} = useNavigationHooks<MainAppStackTypes>();

  const [result, setResult] = React.useState<
    | Array<DocumentPickerResponse>
    | DocumentPickerResponse
    | DirectoryPickerResponse
    | undefined
    | null
  >();
  const [selectedGender, setSelectedGender] = React.useState<number>(1);
  const [selectedAge, setSelectedAge] = React.useState<number>(1);
  const [selectedBookingReason, setSelectedBookingReason] =
    React.useState<any>();

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
        type: types.pdf,
      });
      setResult(pickerResult);
    } catch (e) {
      handleError(e);
    }
  };

  const onSelectedGender = (genderId: number) => {
    console.log("gender id", `${genderId}`);
    setSelectedGender(genderId);
  };

  const onNextPress = () => {
    if (!(selectedGender || selectedBookingReason || result || selectedAge)) {
      warningModalRef?.current?.present();
      return;
    }
    console.warn("submittedSuccessfully");
    navigate("PaymentMethods");
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("completePatientDetails.title")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />

      {/* Main Screen Content */}
      <View style={styles.container}>
        <Text fontSize="FS14" fontFamily="MEDIUM" style={styles.title}>
          {translate("completePatientDetails.bookingFor")}{" "}
        </Text>
        <Button
          type="dropdown"
          text={selectedBookingReason.name}
          placeholder={translate("completePatientDetails.bookingFor")}
          iconStyle={{color: Colors.PRIMARY}}
          style={styles.dropdownButton}
          onPress={index => {
            setSelectedBookingReason(index);
          }}
        />
        <Text fontSize="FS14" fontFamily="MEDIUM" style={styles.title}>
          {translate("completePatientDetails.gender")}
        </Text>
        <Button
          type="dropdown"
          placeholder="Gender"
          text={getValueFromId(selectedGender, genders)}
          iconStyle={{color: Colors.PRIMARY}}
          style={styles.dropdownButton}
          onPress={() => {
            genderModalRef?.current?.present();
          }}
        />
        <View style={styles.ageContainer}>
          <Input
            label={translate("completePatientDetails.yourAge")}
            placeholder="Enter your age"
            keyboardType="number-pad"
          />
        </View>

        <Button
          disabled={false}
          type="border"
          text={
            // result?.name ||
            translate("completePatientDetails.uploadDocuments")
          }
          iconName="upload"
          onPress={() => handleUploadDocuments()}
          style={styles.uploadButton}
          textStyle={{fontFamily: "NORMAL", color: "FONT_07101A"}}
        />
        <View>
          <Input
            multiline
            numberOfLines={4}
            label={translate("completePatientDetails.writeYourProblem")}
            placeholder={translate("completePatientDetails.writeHere")}
            textAlignVertical="top"
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.problemInputStyle}
            keyboardType="default"
            // inputRef={problemInputRef}
          />
        </View>
        <Button
          disabled={false}
          type="standard"
          text={translate("Common.next")}
          onPress={onNextPress}
          style={styles.nextButton}
        />
      </View>
      <GenderModal
        selectedId={selectedGender.toString()}
        onSelect={id => {
          onSelectedGender(id);
        }}
        forwardRef={genderModalRef}
      />
      <WarningMessageModel
        forwardRef={warningModalRef}
        title={translate("Model.warningTitle")}
        message={translate("Model.allFieldsAreRequired")}
        onContinuePress={() => {
          warningModalRef.current?.close();
        }}
      />
    </View>
  );
};

export default CompletePatientDetails;
