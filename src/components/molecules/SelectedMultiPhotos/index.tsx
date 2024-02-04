import {ListRenderItem, StyleSheet} from "react-native";
import React from "react";
import {FlatList} from "react-native-gesture-handler";
import {DocumentPickerResponse} from "react-native-document-picker";
import {SelectedMultiPhotosItem} from "../../organisms";

type SelectedMultiPhotosProps = {
  listItems: DocumentPickerResponse[];
};
const SelectedMultiPhotos: React.FC<SelectedMultiPhotosProps> = ({
  listItems,
}) => {
  const _renderSelectedItem: ListRenderItem<DocumentPickerResponse> = ({
    item,
    index,
  }) => {
    return <SelectedMultiPhotosItem item={item} index={index} />;
  };
  return (
    <FlatList
      data={listItems}
      scrollEnabled={false}
      horizontal
      keyExtractor={(_, index) => `selected-photo-item${index.toString()}`}
      showsHorizontalScrollIndicator={false}
      renderItem={_renderSelectedItem}
    />
  );
};

export default SelectedMultiPhotos;

const styles = StyleSheet.create({});
