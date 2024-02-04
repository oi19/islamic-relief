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
import {doctors} from "../../dummyData";
import {reviewSummary} from "./data";
import {useNavigationHooks} from "../../hooks";
import {MainNavigationAllScreensTypes} from "../../navigation/navigation-types";
import {translate} from "../../helpers";

const ReviewSummary = () => {
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();

  const successModalRef = React.useRef<BottomSheetModal>(null);
  const confirmCancelRef = React.useRef<BottomSheetModal>(null);

  const handleCancelPress = () => {
    confirmCancelRef?.current?.present();
  };

  const handlePayNowPress = () => {
    successModalRef?.current?.present();
  };
  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("reviewSummary.title")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />

      {/* Main Screen Content */}
      <View style={styles.container}>
        <RenderDoctorCard item={doctors[0]} />
        <Line style={styles.line} />
        <Scroll contentContainerStyle={{paddingBottom: Spacing.S20}}>
          {reviewSummary.map((item: any, index: number) => {
            return (
              <RenderRow
                key={`row-item${index}`}
                title={item?.title}
                value={item?.value}
                line={item?.line}
              />
            );
          })}
          <Line style={styles.line} />
          <ViewRow style={styles.rowContainer}>
            <RoundedIcon
              icon="credit"
              backgroundColor="PRIMARY"
              style={styles.iconContainer}
              title="Credit & Debit Card"
              textContainerStyle={{marginHorizontal: Spacing.S8}}
              titleStyle={styles.iconTitle}
            />
            <Button
              text={translate("Common.change")}
              textStyle={{color: "PRIMARY"}}
            />
          </ViewRow>
          <Line style={styles.line} />

          <ViewRow style={[styles.rowContainer, {marginTop: Spacing.S35}]}>
            <Button
              style={styles.baseButton}
              type="standard"
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
        doctorName="doctorName"
        buttonTitle={translate("Common.viewAppointment")}
        onAnotherButtonPress={() => {
          successModalRef?.current?.close();
          navigate("Home");
        }}
        onContinuePress={() => {
          successModalRef?.current?.close();
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
