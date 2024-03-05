/* eslint-disable react-native/no-inline-styles */
import {View} from "react-native";
import React from "react";
import {BottomSheetModal} from "@gorhom/bottom-sheet";

import {
  Button,
  ConfirmModal,
  Header,
  Line,
  RoundedIcon,
  Scroll,
  SuccessModel,
  Text,
  ViewRow,
} from "../../components";
import {getHeight} from "../../styles/dimensions";
import {Spacing} from "../../styles";
import {styles} from "./styles";
import {RenderDoctorCard} from "../DoctorProfile";

import {reviewSummary} from "./data";
import {useLoader, useNavigationHooks} from "../../hooks";
import {MainNavigationAllScreensTypes} from "../../navigation/navigation-types";
import {convertObjToFormData, formateImage, translate} from "../../helpers";
import {createAppointment, useAppSelector} from "../../redux";
import {BookingForEnums, CreateAppointmentTypes} from "../../@types";

const ReviewSummary = () => {
  const successModalRef = React.useRef<BottomSheetModal>(null);
  const confirmCancelRef = React.useRef<BottomSheetModal>(null);

  const {replace, goBack} = useNavigationHooks<MainNavigationAllScreensTypes>();

  const {appointment, patientsDetails, doctorProfile} = useAppSelector(
    state => state.doctorsReducer,
  );

  const createAppointmentLoader = useLoader("createAppointment");

  const handleCancelPress = () => {
    confirmCancelRef?.current?.present();
  };

  const handlePayNowPress = () => {
    const {clinics, id} = doctorProfile;
    const {date, time, service} = appointment;
    const data: CreateAppointmentTypes = {
      clinic_id: clinics?.[0]?.id,
      doctor_id: id,
      date,
      time,
      is_myself: patientsDetails?.is_myself?.toString(),
      notes: patientsDetails?.notes,
      service: service?.service,
    };
    if (patientsDetails?.is_myself === BookingForEnums.Other) {
      data.name = patientsDetails?.name;
      data.age = patientsDetails?.age;
      data.gender = patientsDetails?.gender?.toString();
    }
    console.log("Submitted Data", data);

    const _data = convertObjToFormData(data);

    if (patientsDetails?.files) {
      patientsDetails?.files.forEach(image => {
        _data.append("files[]", formateImage(image));
      });
    }

    createAppointment(_data, res => {
      if (res) {
        successModalRef?.current?.present();
      }
    });
  };
  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("reviewSummary.title")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />

      {/* Main Screen Content */}
      <View style={styles.container}>
        <RenderDoctorCard item={doctorProfile} />
        <Line style={styles.line} />
        <Scroll contentContainerStyle={{paddingBottom: Spacing.S20}}>
          {reviewSummary(appointment, patientsDetails).map(
            (item: any, index: number) => {
              return (
                <RenderRow
                  key={`row-item${index}`}
                  title={item?.title}
                  value={item?.value}
                  line={item?.line}
                />
              );
            },
          )}
          <Line style={styles.line} />
          <ViewRow style={styles.rowContainer}>
            <RoundedIcon
              icon="cash"
              backgroundColor="PRIMARY"
              style={styles.iconContainer}
              title={translate("paymentMethods.cash")}
              textContainerStyle={{marginHorizontal: Spacing.S8}}
              titleStyle={styles.iconTitle}
            />
            <Button
              text={translate("Common.change")}
              textStyle={{color: "PRIMARY"}}
              onPress={() => goBack()}
            />
          </ViewRow>
          <Line style={styles.line} />

          <ViewRow style={[styles.rowContainer, {marginTop: Spacing.S35}]}>
            <Button
              style={styles.baseButton}
              type="standard"
              isLoading={createAppointmentLoader}
              text={translate("Common.payNow")}
              onPress={() => handlePayNowPress()}
            />
            <Button
              style={styles.baseButton}
              type="border"
              text={translate("Common.cancel")}
              onPress={() => handleCancelPress()}
            />
          </ViewRow>
        </Scroll>
      </View>
      <ConfirmModal
        forwardRef={confirmCancelRef}
        onConfirm={() => {}}
        confirmText={translate("Common.ok")}
        message={translate("Model.appointmentCancelMessage")}
      />
      <SuccessModel
        forwardRef={successModalRef}
        message={translate("Model.successfullyBooked")}
        doctorName={doctorProfile?.name}
        buttonTitle={translate("Common.viewAppointment")}
        onAnotherButtonPress={() => {
          replace("TabsBottomStack", {
            screen: "HomeStack",
          });
          setTimeout(() => {
            successModalRef?.current?.close();
          }, 5);
        }}
      />
    </View>
  );
};

export default ReviewSummary;

type RenderRowProps = {
  title: string;
  value: string;
  line?: boolean;
};

const RenderRow: React.FC<RenderRowProps> = ({title, value, line}) => {
  return (
    <>
      <ViewRow style={styles.rowContainer}>
        <Text fontSize="FS14" color="GRAY_A7A7A7">
          {title}
        </Text>
        <Text fontSize="FS14" color="FONT_07101A">
          {value}
        </Text>
      </ViewRow>
      {line && <Line style={styles.line} />}
    </>
  );
};
