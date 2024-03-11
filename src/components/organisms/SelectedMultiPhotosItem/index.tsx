import {StyleSheet} from "react-native";
import React from "react";

import {Card, Image} from "../../atoms";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";

type SelectedMultiPhotosProps = {
  item: any;
  index?: number;
  onPress?: () => void;
  isLoading?: boolean;
};

const SelectedMultiPhotosItem: React.FC<SelectedMultiPhotosProps> = ({
  item,
  onPress,
}) => {
  const uri = item?.uri ? item.uri : item.path;
  return (
    <Card onPress={onPress} style={styles.itemContainer}>
      <Image
        source={uri ? {uri} : undefined}
        style={styles.image}
        resizeMode="cover"
      />
    </Card>
  );
};

export default SelectedMultiPhotosItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: getWidth(104),
    height: getHeight(104),
    borderRadius: scale(10),
    backgroundColor: Colors.GRAY_A7A7A7,
    overflow: "hidden",
    marginHorizontal: Spacing.S8,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
