import React from "react";
import {FilterType, ServiceType} from "../../../@types";
import {Svgs} from "../../../assets";
import {useNavigationHooks} from "../../../hooks";
import {HomeStackTypes} from "../../../navigation/navigation-types";
import {getWidth} from "../../../styles/dimensions";
import {Card, Text} from "../../atoms";
import {styles} from "./styles";

type ServiceItemProps = {
  item: ServiceType;
  index?: number;
  isOddAndLastItem?: boolean;
};
const ServiceItem: React.FC<ServiceItemProps> = ({item, isOddAndLastItem}) => {
  const {navigate} = useNavigationHooks<HomeStackTypes>();

  return (
    <Card
      onPress={() =>
        navigate("SpecialDetails", {
          name: item?.name,
          filterType: FilterType.Services,
          servicesType: item?.service,
        })
      }
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
