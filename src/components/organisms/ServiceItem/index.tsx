import {StyleSheet} from "react-native";
import React from "react";
import {Card, Text} from "../../atoms";
import {Svgs} from "../../../assets";
import {ServiceType} from "../../../@types";
import {getHeight, getWidth} from "../../../styles/dimensions";
import {Spacing} from "../../../styles";

type ServiceItemProps = {
  item: ServiceType;
  index?: number;
  isOddAndLastItem?: boolean;
};
const ServiceItem: React.FC<ServiceItemProps> = ({item, isOddAndLastItem}) => {
  return (
    <Card
      style={[
        styles.cardContainer,
        {
          width: isOddAndLastItem ? getWidth(300) : getWidth(140),
        },
      ]}>
      <Svgs name={item?.photo} width={95} height={73} />
      <Text fontSize="FS14" fontFamily="MEDIUM">
        {item?.name}
      </Text>
    </Card>
  );
};

export default ServiceItem;

const styles = StyleSheet.create({
  cardContainer: {
    height: getHeight(130),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: Spacing.S8,
    marginLeft: Spacing.S16,
  },
});
