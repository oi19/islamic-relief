import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {RefObject, memo} from "react";
import {Platform, View} from "react-native";
import DatePicker from "react-native-date-picker";

import BaseModal from "../BaseModal/BaseModal";
import {styles} from "./styles";
import {getHeight} from "../../../styles/dimensions";
import {Button, Text} from "../../atoms";
import {translate} from "../../../helpers";
import {Colors} from "../../../styles";

type CalenderModelProps = {
  handleOnSelectTime: (selectedTime: string, timeToBackend: string) => void;
  forwardRef: RefObject<BottomSheetModal>;
};
const TimeModel: React.FC<CalenderModelProps> = ({
  forwardRef,
  handleOnSelectTime,
}) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  return (
    <BaseModal
      backgroundStyle={styles.model}
      snapPoints={[
        getHeight(
          Platform.select({
            android: 330,
            ios: 370,
          }),
        ),
      ]}
      forwardRef={forwardRef}>
      <View style={styles.container}>
        <Text
          style={styles.title}
          fontFamily="MEDIUM"
          fontSize="FS16"
          color="BLUE_4A5970">
          {translate("Common.selectYourTime")}
        </Text>
        <DatePicker
          onDateChange={selectedTime => {
            setSelectedDate(selectedTime);
          }}
          locale={"en"}
          date={selectedDate}
          mode="time"
          theme="light"
          textColor={Colors.BLUE_4A5970}
        />
        <View style={styles.buttonsView}>
          <Button
            onPress={() => {
              const timeToBackend = selectedDate.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false, // This ensures that the time is displayed in 12-hour format with AM/PM
              });
              const timeTitleForButton = selectedDate.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true, // This ensures that the time is displayed in 12-hour format with AM/PM
              });
              handleOnSelectTime(timeTitleForButton, timeToBackend);
            }}
            style={styles.button}
            text={translate("Common.confirm")}
            type="standard"
          />
          <Button
            onPress={() => {
              forwardRef?.current?.close();
            }}
            style={styles.button}
            text={translate("Common.cancel")}
            type="border"
          />
        </View>
      </View>
    </BaseModal>
  );
};

export default memo(TimeModel);
