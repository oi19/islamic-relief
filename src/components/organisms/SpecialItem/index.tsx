import React from "react";
import {Card, Image, Line, Text} from "../../atoms";
import {styles} from "./styles";
import {useNavigationHooks} from "../../../hooks";
import {HomeStackTypes} from "../../../navigation/navigation-types";
import {specialType} from "../../../@types/special-types";
type SpecialItemProps = {
  item: specialType;
  index?: number;
};
const SpecialItem: React.FC<SpecialItemProps> = ({item}) => {
  const {navigate} = useNavigationHooks<HomeStackTypes>();

  return (
    <>
      <Card
        style={styles.itemContainer}
        onPress={() =>
          navigate("SpecialDetails", {
            item,
          })
        }>
        <Image source={item?.photo} resizeMode="contain" style={styles.image} />
        <Text style={styles.name} fontSize="FS14">
          {item?.name}
        </Text>
      </Card>
      <Line style={styles.line} />
    </>
  );
};

export default SpecialItem;
