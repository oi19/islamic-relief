import {StyleSheet} from "react-native";
import React, {FC} from "react";
import {SelectedOptions} from "../..";
import {
  addDays,
  getDatesInRange,
  getDayString,
  minusDays,
  monthNames,
} from "../../../helpers";
import {Spacing} from "../../../styles";

type Props = {
  onDaySelected: (date: Date) => void;
};

const HorizontalCalender: FC<Props> = ({onDaySelected}) => {
  const dates: any = React.useMemo(() => {
    return getDatesInRange(minusDays(new Date(), 0), addDays(new Date(), 30));
  }, []);

  const calenderDates = dates.map((date: Date, index: number) => {
    const dayName = getDayString(date);
    const dayNumber = date.getDate();
    return {
      name: `${dayName} , ${monthNames[date.getMonth()]}`,
      value: dayNumber,
      id: index, // Assuming id starts from 1
    };
  });

  return (
    <SelectedOptions
      selectedId={0}
      style={styles.selectedOptions}
      type={"date"}
      onSelected={(id: number) => {
        onDaySelected(dates[id]);
      }}
      data={calenderDates}
    />
  );
};

export default HorizontalCalender;

const styles = StyleSheet.create({
  selectedOptions: {
    marginTop: Spacing.S8,
  },
});
