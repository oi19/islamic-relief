import {StyleSheet, View} from "react-native";
import React from "react";
import {DocumentPickerResponse} from "react-native-document-picker";

import {Image} from "../../atoms";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";

type SelectedMultiPhotosProps = {
  item: DocumentPickerResponse;
  index?: number;
};

const SelectedMultiPhotosItem: React.FC<SelectedMultiPhotosProps> = ({
  item,
  index,
}) => {
  console.log(item);

  return (
    <View style={styles.itemContainer}>
      <Image
        source={item?.uri ? {uri: item.uri} : undefined}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
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
