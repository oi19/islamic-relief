import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {RefObject, memo} from "react";
import {Platform, View} from "react-native";
import DatePicker from "react-native-date-picker";

import {translate} from "../../../helpers";
import {Colors} from "../../../styles";
import {getHeight} from "../../../styles/dimensions";
import {Button, Text} from "../../atoms";
import BaseModal from "../BaseModal/BaseModal";
import {styles} from "./styles";
import {isRTL} from "../../../locals/i18n-config";

type CalenderModelProps = {
  handleOnSelectDate: (date: Date) => void;
  forwardRef: RefObject<BottomSheetModal>;
};
const CalenderModel: React.FC<CalenderModelProps> = ({
  forwardRef,
  handleOnSelectDate,
}) => {
  const [date, setDate] = React.useState(new Date());

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
          {translate("Profile.selectYourBirthday")}
        </Text>
        <DatePicker
          minimumDate={new Date(new Date().setFullYear(1960))}
          maximumDate={
            new Date(new Date().setFullYear(new Date().getFullYear() - 10))
          }
          onDateChange={selectedDate => {
            setDate(selectedDate);
          }}
          locale={isRTL() ? "ar" : "en"}
          date={date}
          mode="date"
          theme="light"
          textColor={Colors.BLUE_4A5970}
        />
        <View style={styles.buttonsView}>
          <Button
            onPress={() => {
              handleOnSelectDate(date);
              setTimeout(() => {
                forwardRef?.current?.close();
              }, 10);
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

export default memo(CalenderModel);
