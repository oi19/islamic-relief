import React from "react";
import {View} from "react-native";
import {Card, RadioButton, RoundedIcon, Text, ViewRow} from "../../atoms";
import {styles} from "./styles";

type SelectedItemWithCheckProps = {
  item: any;
  index?: number;
  onSelected: () => void;
  active?: boolean;
};
const SelectedItemWithCheck: React.FC<SelectedItemWithCheckProps> = ({
  item,
  active,
  onSelected,
}) => {
  return (
    <Card style={styles.card} onPress={onSelected}>
      <ViewRow style={styles.container}>
        <RoundedIcon
          backgroundColor="PRIMARY"
          icon="video"
          style={styles.roundedIcon}
          title="Video Call"
          subTitle="Video Call with doctor"
          titleStyle={{marginTop: 0}}
          iconStyle={styles.icon}
          textContainerStyle={styles.textContainer}
        />
        <View>
          <Text>500 $</Text>
          <Text>/ 45 mins</Text>
        </View>
        <RadioButton isChecked={active} onChecked={onSelected} />
      </ViewRow>
    </Card>
  );
};

export default SelectedItemWithCheck;
