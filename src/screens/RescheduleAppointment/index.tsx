import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {RouteProp, useRoute} from "@react-navigation/native";
import React, {useRef} from "react";
import {BackHandler, View} from "react-native";

import {styles} from "./styles";
import {MyAppointmentStackTypes} from "../../navigation/navigation-types";
import {useLoader, useNavigationHooks} from "../../hooks";
import {rescheduleAppointment, showToast, useDispatch} from "../../redux";
import {
  addMinutesToTime,
  convertTo12HourFormat,
  formateDate,
  formattedTime,
  translate,
} from "../../helpers";
import {
  Button,
  CalenderModel,
  Text,
  TextWithIcon,
  TimeInput,
} from "../../components";
import {RenderUserCard} from "../../components/organisms/AppointmentCard";
import {Colors, Spacing} from "../../styles";

const RescheduleAppointment = () => {
  const {
    params: {appointment},
  } = useRoute<RouteProp<MyAppointmentStackTypes, "RescheduleAppointment">>();
  const {goBack} = useNavigationHooks();

  const calenderModelRef = useRef<BottomSheetModal>(null);

  const dispatch = useDispatch();
  const [date, setDate] = React.useState<any>(appointment?.date);
  const [time, setTime] = React.useState<any>({
    timeShow: formattedTime(appointment?.from),
    timeToBackend: appointment?.from,
  });

  const to = formattedTime(appointment?.from);
  const rescheduleLoader = useLoader("rescheduleAppointment");

  // Handle Back Of Default user
  React.useEffect(() => {
    const backAction = () => {
      goBack();
      return true; // Prevent default behavior (i.e., don't exit the app)
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, [goBack]);

  const onConfirmDate = (_date: Date) => {
    setDate(formateDate(_date));
  };

  const handleOnSavePress = () => {
    rescheduleAppointment(
      {
        date,
        time: time?.timeToBackend,
      },
      appointment?.id,
      res => {
        if (res.status === 200) {
          console.log(res.data?.data);
          dispatch(showToast(translate("Model.rescheduledSuccessfully")));
        }
      },
    );
  };

  return (
    <View style={styles.rootScreen}>
      <Text fontFamily="BOLD" fontSize="H1">
        {translate("Common.reschedule")}
      </Text>
      <View style={styles.content}>
        <RenderUserCard item={appointment} />
        <TextWithIcon
          icon="clock"
          iconStyle={{color: Colors.PRIMARY}}
          text={`${45} min | ${date} | ${convertTo12HourFormat(
            time?.timeShow,
          )} - ${convertTo12HourFormat(addMinutesToTime(time?.timeShow, 45))}`}
          style={{marginHorizontal: Spacing.S8}}
        />
        <TimeInput
          placeholder={convertTo12HourFormat(to)}
          onSelected={selectedTime => {
            setTime({
              timeShow: selectedTime,
              timeToBackend: selectedTime,
            });
          }}
          style={{
            backgroundColor: Colors.WHITE,
          }}
        />

        <Button
          type="border"
          text={date}
          textStyle={{color: "BLUE_4A5970"}}
          style={styles.calenderButtonStyle}
          onPress={() => {
            calenderModelRef.current?.present();
          }}
          iconName="calender"
          iconStyle={{color: Colors.PRIMARY}}
        />
      </View>
      <Button
        type="standard"
        onPress={handleOnSavePress}
        isLoading={rescheduleLoader}
        text={translate("Common.save")}
        style={styles.saveButton}
      />
      <CalenderModel
        handleOnSelectDate={onConfirmDate}
        forwardRef={calenderModelRef}
        title={translate("Common.chooseDate")}
        isNotBirthdayCalender
      />
    </View>
  );
};

export default RescheduleAppointment;
