import React from "react";
import {View} from "react-native";
import {Card, RadioButton, RoundedIcon, Text, ViewRow} from "../../atoms";
import {styles} from "./styles";
import {SelectedCheckItemType} from "../../../@types";
import {Spacing} from "../../../styles";

type SelectedItemWithCheckProps = {
  item: SelectedCheckItemType;
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
    <>
      {item?.title && (
        <Text
          fontFamily="MEDIUM"
          fontSize="FS13"
          style={{marginVertical: Spacing.S8}}>
          {item?.title}
        </Text>
      )}
      <Card style={styles.card} onPress={onSelected}>
        <ViewRow style={styles.container}>
          <RoundedIcon
            backgroundColor="PRIMARY"
            icon={item?.icon}
            style={styles.roundedIcon}
            title={item?.name}
            subTitle={item?.desc}
            titleStyle={{marginTop: 0}}
            iconStyle={styles.icon}
            textContainerStyle={styles.textContainer}
          />
          <View style={styles.row}>
            <View>
              {item?.cost && (
                <>
                  <Text>{item?.cost || 500} $</Text>
                  <Text>/ {item?.duration} mins</Text>
                </>
              )}
            </View>
            <RadioButton isChecked={active} onChecked={onSelected} />
          </View>
        </ViewRow>
      </Card>
    </>
  );
};

export default SelectedItemWithCheck;
