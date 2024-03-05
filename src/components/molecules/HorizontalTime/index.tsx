import {StyleSheet} from "react-native";
import React, {FC, useMemo} from "react";
import {SelectedOptions, Text} from "../..";
import {convertTo12HourFormat, translate} from "../../../helpers";
import {Spacing} from "../../../styles";
import {Slots} from "../../../@types";
import {getClinicSlots} from "../../../redux";
import {useLoader} from "../../../hooks";
import {Lottie} from "../../../assets";
import {scale} from "../../../styles/dimensions";

type Props = {
  onTimeSelected: (time: string) => void;
  selectedDay: any;
  clinicId?: number;
};
const HorizontalTime: FC<Props> = ({onTimeSelected, selectedDay, clinicId}) => {
  const [timeSlots, setTimeSlots] = React.useState<Slots[]>([]);

  const slotsLoader = useLoader("clinicSlots");

  React.useEffect(() => {
    getClinicSlots(
      {
        clinic_id: clinicId,
        date: selectedDay,
      },
      res => {
        setTimeSlots(res?.data?.data);
      },
    );
  }, [clinicId, selectedDay]);

  const formattedTimeSlots: any = useMemo(() => {
    if (Object.keys(timeSlots).length === 0) {
      return [];
    } else {
      return timeSlots?.map((slot, index) => {
        const startTime = slot.start_time;
        return {
          name: convertTo12HourFormat(startTime),
          value: startTime,
          id: index,
        };
      });
    }
  }, [timeSlots]);

  if (formattedTimeSlots.length === 0 && !slotsLoader) {
    return <Text>{translate("myAppointment.emptySlots")}</Text>;
  }

  return (
    <>
      {slotsLoader ? (
        <Lottie
          name="loading"
          style={{
            width: scale(100),
            height: scale(100),
          }}
        />
      ) : (
        <SelectedOptions
          style={styles.selectedOptions}
          onSelected={(id: number) => {
            onTimeSelected(formattedTimeSlots[id]?.value);
          }}
          data={formattedTimeSlots}
        />
      )}
    </>
  );
};

export default HorizontalTime;

const styles = StyleSheet.create({
  selectedOptions: {
    marginTop: Spacing.S8,
  },
});
