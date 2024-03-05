import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React from "react";
import {View} from "react-native";
import DocumentPicker, {
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from "react-native-document-picker";

import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {FlatList} from "react-native-gesture-handler";
import {BookingForEnums} from "../../@types";
import {
  Button,
  Card,
  ControlledInput,
  DropdownListModel,
  GenderModal,
  Header,
  RoundedIcon,
  Scroll,
  SelectedMultiPhotos,
  Text,
  ViewRow,
  WarningMessageModel,
} from "../../components";
import {bookings, genders} from "../../dummyData";
import {getValueFromId, translate} from "../../helpers";
import {
  createItselfAppointmentSchema,
  createOtherAppointmentSchema,
} from "../../helpers/validationSchema";
import {useNavigationHooks} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {setPatientDetailsForm, useDispatch} from "../../redux";
import {Colors, Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";

const CompletePatientDetails = () => {
  const genderModalRef = React.useRef<BottomSheetModal>(null);
  const warningModalRef = React.useRef<BottomSheetModal>(null);
  const bokingRef = React.useRef<BottomSheetModal>(null);

  const {navigate} = useNavigationHooks<MainAppStackTypes>();

  const dispatch = useDispatch();

  const [selectedGender, setSelectedGender] = React.useState<number>(-1);
  const [selectedBooking, setSelectedBooking] = React.useState<number>(-1);

  const [images, setImages] = React.useState<
    DocumentPickerResponse[] | undefined | null
  >(null);

  const {
    control,
    setValue,
    handleSubmit,
    clearErrors,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(
      selectedBooking === BookingForEnums.Itself
        ? createItselfAppointmentSchema
        : createOtherAppointmentSchema,
    ),
  });

  console.log(errors);

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
      DocumentPicker.pick({
        allowMultiSelection: true,
        type: [types.images],
      })
        .then(result => {
          setImages(result);
        })
        .catch(handleError);
    } catch (e) {
      handleError(e);
    }
  };

  const onSelectedGender = (genderId: number) => {
    console.log("gender id", `${genderId}`);
    setSelectedGender(genderId);
  };

  const onNextPress = async (data: any) => {
    if (images) {
      const filePaths: string[] = images.map(response => response.uri);
      data.files = filePaths;
    }

    dispatch(setPatientDetailsForm(data));
    console.log(data);
    console.warn("submittedSuccessfully");
    navigate("PaymentMethods");
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("completePatientDetails.title")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />
      <Scroll>
        {/* Main Screen Content */}
        <View style={styles.container}>
          <Text fontSize="FS14" fontFamily="MEDIUM" style={styles.title}>
            {translate("completePatientDetails.bookingFor")}{" "}
          </Text>
          <Button
            type="dropdown"
            text={getValueFromId(selectedBooking, bookings)}
            placeholder={translate("completePatientDetails.bookingFor")}
            iconStyle={{color: Colors.PRIMARY}}
            style={styles.dropdownButton}
            onPress={() => {
              bokingRef?.current?.present();
            }}
          />
          <Text color="RED">{errors?.is_myself?.message}</Text>

          {/* If Create Appoinments to Others */}
          {selectedBooking === BookingForEnums.Other && (
            <>
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
              <Text color="RED">{errors?.gender?.message}</Text>
              <ControlledInput
                fieldName="age"
                control={control}
                label={translate("completePatientDetails.yourAge")}
                placeholder={translate("completePatientDetails.yourAge")}
                keyboardType="number-pad"
                style={styles.input}
              />

              <ControlledInput
                fieldName="name"
                control={control}
                label={translate("Form.fullName")}
                placeholder={translate("Form.enterFullName")}
                style={styles.input}
              />
            </>
          )}

          <View>
            <ControlledInput
              fieldName="notes"
              control={control}
              multiline
              numberOfLines={4}
              label={translate("completePatientDetails.writeYourProblem")}
              placeholder={translate("completePatientDetails.writeHere")}
              textAlignVertical="top"
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.problemInputStyle}
              keyboardType="default"
              style={styles.input}
            />
          </View>

          <Text fontSize="FS14" fontFamily="MEDIUM" style={styles.title}>
            {translate("completePatientDetails.uploadDocuments")}
          </Text>
          <FlatList
            data={null}
            renderItem={null}
            showsHorizontalScrollIndicator={false}
            horizontal
            ListHeaderComponent={
              <ViewRow style={{paddingHorizontal: Spacing.S20}}>
                {images && <SelectedMultiPhotos listItems={images} />}
                <Card
                  onPress={() => {
                    handleUploadDocuments();
                  }}
                  style={styles.cameraButton}>
                  <RoundedIcon
                    icon="camera"
                    backgroundColor="PRIMARY"
                    title={translate("Common.addPhotos")}
                    iconStyle={{
                      color: Colors.WHITE,
                    }}
                  />
                </Card>
              </ViewRow>
            }
          />

          <Button
            disabled={false}
            type="standard"
            text={translate("Common.next")}
            onPress={handleSubmit(onNextPress)}
            style={styles.nextButton}
          />
        </View>
      </Scroll>
      <GenderModal
        selectedId={selectedGender}
        onSelect={id => {
          setValue("gender", id);
          onSelectedGender(id);
        }}
        forwardRef={genderModalRef}
      />

      <DropdownListModel
        snapPoints="20%"
        listItem={bookings}
        forwardRef={bokingRef}
        onSelect={item => {
          clearErrors("is_myself");
          setValue("is_myself", item?.id);
          setSelectedBooking(item?.id);
        }}
        selectedId={selectedBooking}
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
