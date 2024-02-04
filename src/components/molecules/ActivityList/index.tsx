import {FlatList, ListRenderItem, StyleSheet} from "react-native";
import React from "react";
import {ActivityCard} from "../../organisms";
import {Spacing} from "../../../styles";

type ActivityListProps = {
  listItems: any[];
};
const ActivityList: React.FC<ActivityListProps> = ({listItems}) => {
  const _renderActivityItem: ListRenderItem<any> = ({item, index}) => {
    return <ActivityCard item={item} index={index} />;
  };
  return (
    <FlatList
      data={listItems}
      renderItem={_renderActivityItem}
      keyExtractor={(_, index) => `activity-item${index}`}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: Spacing.S40 * 3,
      }}
    />
  );
};

export default ActivityList;

const styles = StyleSheet.create({});
