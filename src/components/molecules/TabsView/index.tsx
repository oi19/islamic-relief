/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {ListRenderItem} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import {Button} from "../../atoms";
import {styles} from "./styles";
import {TabOptionType} from "../../../@types";

type TabsViewProps = {
  data: TabOptionType[];
  onSelected?: (index: number) => void;
};

const TabsView: React.FC<TabsViewProps> = ({data, onSelected}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onTabPressed = (index: number) => {
    if (onSelected) {
      onSelected(index);
    }
    setSelectedIndex(index);
  };

  const _tabViewRenderItem: ListRenderItem<TabOptionType> = ({item, index}) => {
    const isSelected = index === selectedIndex;

    return (
      <Button
        text={item?.name}
        type={isSelected ? "standard" : "border"}
        textStyle={{fontFamily: "NORMAL", fontSize: "FS10"}}
        style={styles.baseButton}
        onPress={() => {
          onTabPressed(index);
        }}
      />
    );
  };
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item, index) => `tabView-item${index.toString()}`}
      style={styles.listStyle}
      contentContainerStyle={styles.contentListStyle}
      showsHorizontalScrollIndicator={false}
      renderItem={_tabViewRenderItem}
    />
  );
};

export default TabsView;
