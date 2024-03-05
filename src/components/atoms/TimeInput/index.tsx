import {StyleSheet, View, ViewStyle} from "react-native";
import React, {memo, useRef} from "react";
import {Button, Text} from "..";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {convertTo12HourFormat} from "../../../helpers";
import {Colors, Spacing} from "../../../styles";
import {TimeModel} from "../../models";

type TimeInputProps = {
  title?: string;
  placeholder?: string;
  style?: ViewStyle;
  onSelected: (time: string) => void;
  initialValue?: string;
};
const TimeInput: React.FC<TimeInputProps> = ({
  title,
  placeholder,
  onSelected,
  initialValue,
  style,
}) => {
  const timeRef = useRef<BottomSheetModal>(null);

  const [time, setTime] = React.useState<string | undefined>(
    convertTo12HourFormat(initialValue),
  );

  return (
    <View>
      <Text
        fontSize="FS13"
        color="BLUE_4A5970"
        fontFamily="BOLD"
        style={styles.title}>
        {title}
      </Text>
      <Button
        type="dropdown"
        placeholder={placeholder || ""}
        text={time}
        iconStyle={{color: Colors.PRIMARY}}
        style={style}
        textStyle={{color: "BLUE_4A5970"}}
        onPress={() => {
          timeRef?.current?.present();
        }}
      />
      <TimeModel
        forwardRef={timeRef}
        handleOnSelectTime={(selectedTime: string, timeToBackend: string) => {
          onSelected(timeToBackend);
          setTime(selectedTime);
          setTimeout(() => {
            timeRef?.current?.close();
          }, 20);
        }}
      />
    </View>
  );
};

export default memo(TimeInput);

const styles = StyleSheet.create({
  title: {
    textAlign: "left",
    marginTop: Spacing.S8,
    width: "90%",
    marginHorizontal: Spacing.S11,
  },
});
