import {RouteProp, useFocusEffect, useRoute} from "@react-navigation/native";
import React from "react";
import {View} from "react-native";
import {BottomSheetModal} from "@gorhom/bottom-sheet";

import {Images} from "../../assets/images";
import {
  AddReviewModel,
  Button,
  DoctorAction,
  Header,
  HeaderSection,
  HorizontalCalender,
  HorizontalTime,
  Image,
  Line,
  ReadTextMore,
  ReviewsList,
  RoundedIcon,
  Scroll,
  Section,
  Text,
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
import {useLoader, useNavigationHooks, useToken} from "../../hooks";
import {Doctor} from "../../@types";
import {formateDate, translate} from "../../helpers";
import FavoriteButton from "../../components/atoms/FavoriteButton/FavoriteButton";
import useNativeShare from "../../hooks/useNativeShare";
import {
  addFavourite,
  getDoctorProfile,
  removeFavourite,
  setDoctorProfile,
  useAppSelector,
  useDispatch,
} from "../../redux";
import {Lottie} from "../../assets";
import {
  addToFavourite,
  removeFromFavourite,
} from "../../redux/actions/favouriteAction";

const DoctorProfile = () => {
  const {
    params: {id},
  } = useRoute<RouteProp<HomeStackTypes, "DoctorProfile">>();

  console.log("Id From ");

  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const warningModalRef = React.useRef<BottomSheetModal>(null);
  const addReviewModalRef = React.useRef<BottomSheetModal>(null);
  const isLogged = useToken();
  const dispatch = useDispatch();

  const profileLoader = useLoader("doctorProfile");

  const {doctorProfile} = useAppSelector(state => state.doctorsReducer);

  const [appointment, setAppointment] = React.useState<{
    date: string;
    time: string;
  }>({
    date: formateDate(new Date()),
    time: "",
  });

  const {shareContent} = useNativeShare();

  const handleShare = () => {
    shareContent({
      title: "Check out this link!",
      message: "https://reactnative.dev/docs/share?language=typescript",
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      if (id) {
        getDoctorProfile(id);
      }
    }, [id]),
  );

  const onOpenWarningModal = () => {
    warningModalRef.current?.present();
  };

  const handleMakeAppointment = () => {
    if (!appointment?.date || !appointment?.time) {
      onOpenWarningModal();
      return;
    }
    if (isLogged) {
      navigate("SelectPackage", {
        appointment,
      });
    } else {
      navigate("Login", {
        navigateTo: undefined,
      });
    }
    // logic bussiness
    // dispatch action and add date & time to store
  };

  const onFavouritePress = async (value?: boolean) => {
    //dispatch action logic updating isFavourite props
    console.log("like button  is pressed", value);
    if (value) {
      addToFavourite(id, () => {
        dispatch(setDoctorProfile({is_favourite: true, ...doctorProfile}));
      });
    } else {
      removeFromFavourite(id, () => {
        dispatch(setDoctorProfile({is_favourite: false, ...doctorProfile}));
      });
    }
  };

  const renderHeaderSideIcons = () => {
    return (
      <View style={styles.headerSideIconsContainer}>
        <Button
          iconName="share"
          iconStyle={styles.shareIconStyle}
          onPress={() => {
            //open share ModalhandleShare
            // console.warn("share button is pressed");
            handleShare();
          }}
        />
        <FavoriteButton
          isFavorite={Boolean(doctorProfile?.is_favourite)}
          defaultColor={Colors.WHITE}
          style={styles.favouriteIconStyle}
          onPress={onFavouritePress}
        />
      </View>
    );
  };

  // {/* Doctor Information section */}

  // Doctor Actions section
  const renderActionButton = () => (
    <ViewRow
      style={{
        paddingHorizontal: Spacing.S16,
      }}>
      <DoctorAction icon="messages" title={translate("Common.messages")} />
      <DoctorAction
        icon="video"
        title={translate("Common.videoCall")}
        style={styles.videoActionButton}
      />
      <DoctorAction
        icon="phone"
        title={translate("Common.call")}
        style={styles.callActionButton}
      />
    </ViewRow>
  );

  // {/* Doctor statices section */}
  const renderStatisticsSection = () => (
    <ViewRow style={styles.statices}>
      <RoundedIcon
        icon="patients"
        title="100+"
        subTitle={translate("Common.patients")}
        textContainerStyle={styles.center}
      />
      <RoundedIcon
        icon="bag"
        title={doctorProfile?.experience?.toString()}
        subTitle={translate("Common.yearsExp.")}
        textContainerStyle={styles.center}
      />
      <RoundedIcon
        icon="inactiveStar"
        iconStyle={{
          color: Colors.PRIMARY,
        }}
        title={doctorProfile?.rating?.toString()}
        textContainerStyle={styles.center}
        subTitle={translate("Common.rating")}
      />
      <RoundedIcon
        icon="review"
        title={doctorProfile?.reviews?.length.toString()}
        subTitle={translate("Common.review")}
        textContainerStyle={styles.center}
      />
    </ViewRow>
  );
  // {/* Booking Appointments Doctor section */}

  const renderBookingAppointmentSection = () => (
    <>
      <HeaderSection
        title={translate("Search.bookAppointment")}
        textStyle={{fontFamily: "NORMAL", color: "GRAY_474C5C"}}
      />
      <Section title={translate("Common.day")} textStyle={{fontSize: "FS16"}}>
        <HorizontalCalender
          onDaySelected={date => {
            const selectedDay = formateDate(date);
            setAppointment({time: "", date: selectedDay});
          }}
        />
      </Section>
      <Section title={translate("Common.time")} textStyle={{fontSize: "FS16"}}>
        <HorizontalTime
          onTimeSelected={(time: string) => {
            setAppointment({...appointment, time});
          }}
          selectedDay={appointment?.date}
          clinicId={doctorProfile?.clinics?.[0]?.id}
        />
      </Section>
      <Button
        type="standard"
        text={translate("DoctorProfile.makeAppointment")}
        onPress={() => handleMakeAppointment()}
        style={styles.makeAppointmentButton}
      />
    </>
  );

  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("DoctorProfile.title")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
        renderHeaderSideIcons={renderHeaderSideIcons}
      />
      {profileLoader ? (
        <View style={styles.center}>
          <Lottie name="loading" />
        </View>
      ) : (
        <View style={styles.container}>
          <Scroll>
            <RenderDoctorCard item={doctorProfile} />
            {/* {renderDoctorCard()} */}
            {renderActionButton()}

            <Line style={styles.line} />

            {renderStatisticsSection()}

            {/* About Doctor section */}
            <ReadTextMore
              text={doctorProfile?.desc}
              title={translate("Common.about")}
            />
            <ReadTextMore
              text={doctorProfile?.sub_specialty}
              title={translate("DoctorProfile.sub-specialties")}
            />
            <ReadTextMore
              text={doctorProfile?.experience?.toString()}
              title={translate("DoctorProfile.experience")}
            />
            <Line style={styles.line} />
            {/* About Doctor section */}
            <ViewRow>
              <RoundedRowIcon
                icon="wallet"
                title={`${doctorProfile?.clinics?.[0]?.price} ${translate(
                  "Common.egp",
                )}`}
                subTitle={translate("DoctorProfile.consultationFees")}
              />
              <View style={{marginHorizontal: Spacing.S20}}>
                <RoundedRowIcon
                  icon="clock"
                  title={`${doctorProfile?.clinics?.[0]?.duration} ${translate(
                    "Common.min",
                  )}`}
                  subTitle={translate("DoctorProfile.waitingTime")}
                />
              </View>
            </ViewRow>
            <Line style={styles.line} />

            {renderBookingAppointmentSection()}
            {/* Latest Reviews */}
            <ViewRow style={{justifyContent: "space-between"}}>
              <HeaderSection
                title={translate("DoctorProfile.latestReviews")}
                textStyle={{fontSize: "FS16"}}
                style={{width: "50%"}}
              />

              {isLogged && (
                <Button
                  onPress={() => {
                    addReviewModalRef?.current?.present();
                  }}>
                  <Text
                    style={{textDecorationLine: "underline"}}
                    fontSize="FS13"
                    color="PRIMARY"
                    fontFamily="REGULAR">
                    + {translate("DoctorProfile.addReview")}
                  </Text>
                </Button>
              )}
            </ViewRow>

            <ReviewsList reviews={doctorProfile?.reviews} />
          </Scroll>
        </View>
      )}

      <WarningMessageModel
        forwardRef={warningModalRef}
        message={translate("Model.dateAndTimeMessage")}
        onContinuePress={() => {
          warningModalRef.current?.close();
        }}
      />
      <AddReviewModel forwardRef={addReviewModalRef} />
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
    <RoundedIcon
      icon={icon}
      iconStyle={{color: Colors.PRIMARY}}
      backgroundColor="TRANSPARENT"
    />
    <View>
      <Text color="GRAY_A7A7A7">{title}</Text>
      {subTitle ? <Text color="GRAY_A7A7A7">{subTitle}</Text> : null}
    </View>
  </View>
);

type RenderDoctorCardProps = {
  item: Doctor;
};
export const RenderDoctorCard: React.FC<RenderDoctorCardProps> = ({item}) => (
  <ViewRow>
    <Image
      source={item?.image ? {uri: item?.image} : Images.default}
      style={styles.image}
    />

    <View
      style={{
        marginHorizontal: Spacing.S8,
      }}>
      <Text fontSize="FS16" fontFamily="MEDIUM">
        {item?.name}
      </Text>

      <Text color="GRAY_A7A7A7" fontSize="FS16">
        {item?.main_specialty}
      </Text>
    </View>
  </ViewRow>
);
