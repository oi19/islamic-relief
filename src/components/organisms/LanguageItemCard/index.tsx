import React from "react";
import {View} from "react-native";
import Svgs, {IconsName} from "../../../assets/svgs";
import {Colors} from "../../../styles";
import {Card, Line, Text} from "../../atoms";
import {styles} from "./styles";
import {isRTL} from "../../../locals/i18n-config";

export type ItemLanguageType = {
  name?: string;
  onPress: () => void;
  icon?: IconsName;
  checked?: boolean;
};

type LanguageItemCardProps = {
  data: ItemLanguageType[];
};

const LanguageItemCard: React.FC<LanguageItemCardProps> = ({data}) => {
  return (
    <View>
      {data.map((item, index) => {
        return (
          <View key={`${index.toString()}`}>
            <Card onPress={item?.onPress} style={styles.cardContainer}>
              <Text
                fontSize="FS16"
                color={item?.checked ? "PRIMARY" : "GRAY_A7A7A7"}>
                {item?.name}
              </Text>
              <Svgs
                name={item?.checked ? "checked" : "arrow"}
                rotate={isRTL() ? "left" : "right"}
                color={item?.checked ? Colors.PRIMARY : Colors.GRAY_A7A7A7}
              />
            </Card>
            {index !== data.length && <Line style={styles.line} />}
          </View>
        );
      })}
    </View>
  );
};

export default LanguageItemCard;
