/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {ListRenderItem, TouchableOpacity, ViewStyle} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import {styles} from "./styles";
import {TabOptionType} from "../../../@types";
import { TextProps } from "../../atoms/Text/Text";
import { Button } from "../../atoms";
import { ButtonProps } from "../../atoms/Button/Button";

type TabsViewProps = {
  data: TabOptionType[];
  onSelected?: (index: number) => void;
  buttonStyle?: ViewStyle;
  customizedBasedButtonStyle?:ViewStyle,
  selectedButtonStyle?:ViewStyle,
  buttonType?: ButtonProps["type"]
  buttonTextStyle?: TextProps,
  customizedContentListStyle?:ViewStyle
};

const NotificationTabsView: React.FC<TabsViewProps> = ({data,customizedBasedButtonStyle,buttonStyle,buttonType,buttonTextStyle ,selectedButtonStyle,customizedContentListStyle,onSelected}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onTabPressed = (index: number) => {
    if (onSelected) {
      onSelected(index);
    }
    setSelectedIndex(index);
  };

  const _tabViewRenderItem: ListRenderItem<TabOptionType> = ({ item, index }) => {
    const isSelected = index === selectedIndex;

    return (
      <Button
        type={buttonType ? buttonType : isSelected ? "standard" : "border"}
        text={item?.name}
        style={[customizedBasedButtonStyle?customizedBasedButtonStyle:styles.baseButton,buttonStyle,isSelected && selectedButtonStyle]}
        textStyle={{
          fontFamily: "MEDIUM",
          fontSize: "FS16",
          color: isSelected && buttonTextStyle?.color ? buttonTextStyle.color: isSelected ?  "WHITE" : "GRAY_A7A7A7",
        }}
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
      contentContainerStyle={customizedContentListStyle ? customizedContentListStyle : styles.contentListStyle}
      showsHorizontalScrollIndicator={false}
      renderItem={_tabViewRenderItem}
    />
  );
};

export default NotificationTabsView;
