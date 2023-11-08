import {RouteProp, useRoute} from "@react-navigation/native";
import React from "react";
import {View} from "react-native";
import {BottomSheetModal} from "@gorhom/bottom-sheet";

import {Images} from "../../assets/images";
import {
  Button,
  DoctorAction,
  Header,
  HeaderSection,
  Image,
  Line,
  ReadTextMore,
  ReviewsList,
  RoundedIcon,
  Scroll,
  Section,
  SelectedOptions,
  Text,
  TextWithIcon,
  ViewRow,
  WarningMessageModel,
} from "../../components";
import {
  HomeStackTypes,
  MainAppStackTypes,
} from "../../navigation/navigation-types";
import {Colors, Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";
import {IconsName} from "../../assets/svgs";
import {Reviews} from "../../dummyData";
import {useNavigationHooks} from "../../hooks";

const DoctorProfile = () => {
  const {
    params: {item},
  } = useRoute<RouteProp<HomeStackTypes, "DoctorProfile">>();
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const [appointment, setAppointment] = React.useState<{
    dayId: number;
    timeId: number;
  }>({
    dayId: -1,
    timeId: -1,
  });
  const warningModalRef = React.useRef<BottomSheetModal>(null);

  const onOpenWarningModal = () => {
    warningModalRef.current?.present();
  };

  const handleMakeAppointment = () => {
    if (appointment?.dayId === -1 || appointment?.timeId === -1) {
      onOpenWarningModal();
      return;
    }
    navigate("Login", {
      navigateTo: "SelectPackage",
    });
  };

  // {/* Doctor Information section */}

  const renderDoctorCard = () => (
    <ViewRow>
      <Image source={Images.default} style={styles.image} />

      <View
        style={{
          marginHorizontal: Spacing.S8,
        }}>
        <Text fontSize="FS16" fontFamily="MEDIUM">
          {item?.name}
        </Text>

        <Text color="GRAY_A7A7A7" fontSize="FS16">
          {item?.specialty}
        </Text>

        <TextWithIcon
          icon="location"
          text={`${item?.duration} Min , ${item?.distance} KM`}
          style={{marginHorizontal: Spacing.S8}}
        />
      </View>
    </ViewRow>
  );
  // Doctor Actions section

  const renderActionButton = () => (
    <ViewRow
      style={{
        paddingHorizontal: Spacing.S16,
      }}>
      <DoctorAction icon="messages" title="Messages" />
      <DoctorAction
        icon="video"
        title="Video call"
        style={styles.videoActionButton}
      />
      <DoctorAction icon="phone" title="call" style={styles.callActionButton} />
    </ViewRow>
  );

  // {/* Doctor statices section */}

  const renderStatisticsSection = () => (
    <ViewRow style={styles.statices}>
      <RoundedIcon icon="patients" title="100+" subTitle="Patients" />
      <RoundedIcon icon="bag" title="10+" subTitle="Years Exp." />
      <RoundedIcon
        icon="inactiveStar"
        iconStyle={{
          color: Colors.PRIMARY,
        }}
        title="4.9+"
        subTitle="Rating"
      />
      <RoundedIcon icon="review" title="30" subTitle="Reviews" />
    </ViewRow>
  );
  // {/* Booking Appointments Doctor section */}

  const renderBookingAppointmentSection = () => (
    <>
      <HeaderSection
        title="Book Appointment"
        textStyle={{fontFamily: "NORMAL", color: "GRAY_474C5C"}}
        navigateTo="AllowLocation"
      />
      <Section title="Day" textStyle={{fontSize: "FS16"}}>
        <SelectedOptions
          style={styles.selectedOptions}
          type={"date"}
          onSelected={(id: number) =>
            setAppointment({...appointment, dayId: id})
          }
          data={[
            {name: "Mon", value: "14", id: 1},
            {name: "Sun", value: "13", id: 2},
            {name: "Sat", value: "12", id: 3},
            {name: "Fri 17", value: "17", id: 4},
          ]}
        />
      </Section>
      <Section title="Time" textStyle={{fontSize: "FS16"}}>
        <SelectedOptions
          style={styles.selectedOptions}
          onSelected={(id: number) =>
            setAppointment({...appointment, timeId: id})
          }
          data={[
            {name: "7:00  PM", value: "14", id: 1},
            {name: "8:00  PM", value: "13", id: 2},
            {name: "10:00 PM", value: "12", id: 3},
            {name: "11:00 PM", value: "17", id: 4},
          ]}
        />
      </Section>
      <Button
        type="standard"
        text="Make Appointment"
        onPress={() => handleMakeAppointment()}
        style={styles.makeAppointmentButton}
      />
    </>
  );

  return (
    <View style={styles.rootScreen}>
      <Header
        title={"Doctor Profile"}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />
      <View style={styles.container}>
        <Scroll>
          {renderDoctorCard()}
          {renderActionButton()}

          <Line style={styles.line} />

          {renderStatisticsSection()}

          {/* About Doctor section */}
          <ReadTextMore title="About" />
          <ReadTextMore title="Sub-specialties" />
          <ReadTextMore title="Experience" />
          <Line style={styles.line} />
          {/* About Doctor section */}
          <ViewRow>
            <RoundedRowIcon
              icon="wallet"
              title="500 EGP"
              subTitle="Consultation Fees"
            />
            <View style={{marginHorizontal: Spacing.S20}}>
              <RoundedRowIcon
                icon="wallet"
                title="500 EGP"
                subTitle="Consultation Fees"
              />
            </View>
          </ViewRow>
          <Line style={styles.line} />

          {renderBookingAppointmentSection()}
          {/* Latest Reviews */}
          <HeaderSection
            title="Latest Reviews"
            textStyle={{fontSize: "FS16"}}
          />
          <ReviewsList reviews={Reviews} />
        </Scroll>
      </View>
      <WarningMessageModel
        forwardRef={warningModalRef}
        message="Please make sure to select date and time."
        onContinuePress={() => {
          warningModalRef.current?.close();
        }}
      />
    </View>
  );
};

export default DoctorProfile;

type RoundedRowIcon = {
  icon: IconsName;
  title: string;
  subTitle?: string;
};
export const RoundedRowIcon: React.FC<RoundedRowIcon> = ({
  icon,
  title,
  subTitle,
}) => (
  <View style={styles.row}>
    <RoundedIcon icon={icon} backgroundColor="TRANSPARENT" />
    <View>
      <Text color="GRAY_A7A7A7">{title}</Text>
      {subTitle ? <Text color="GRAY_A7A7A7">{subTitle}</Text> : null}
    </View>
  </View>
);
