import React, {FC} from "react";
import {FlatListProps, ListRenderItem, View} from "react-native";
import {FlatList} from "react-native-gesture-handler";

import {MainNavigationKeys} from "../../../../navigation/navigation-types";
import { TextProps } from "../Text/Text";
import HeaderSection from "../HeaderSection/HeaderSection";
import styles from "./styles";
import {Spacing} from "../../../../styles";

const Section: FC<
  FlatListProps<any> & {
    title?: string;
    description?: string;
    data?: ReadonlyArray<any>;
    renderItem?: ListRenderItem<any> | null | undefined;
    navigateTo?: MainNavigationKeys;
    params?: any;
    textStyle?: TextProps;

    type?: "horizontal" | "vertical";
  }
> = ({
  textStyle,
  title,
  data = [],
  navigateTo,
  params,
  type = "horizontal",
  description,
  ...props
}) => {
  const handleFlatlistType = () => {
    if (type === "horizontal") {
      return (
        <FlatList
          keyExtractor={(item, index) => `keyExtractor_${index}`}
          key={"SectionList"}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment={"start"}
          decelerationRate={0}
          horizontal
          initialNumToRender={100}
          contentContainerStyle={styles.contentContainerStyle}
          data={data}
          ItemSeparatorComponent={() => <View style={{width: Spacing.S8}} />}
          {...props}
        />
      );
    }

    return (
      <FlatList
        keyExtractor={(item, index) => `keyExtractor_${index}`}
        key={"SectionList"}
        showsVerticalScrollIndicator={false}
        decelerationRate={0}
        initialNumToRender={100}
        contentContainerStyle={styles.contentVerticalContainerStyle}
        ItemSeparatorComponent={() => <View style={{height: Spacing.S8}} />}
        data={data}
        {...props}
        style={styles.listVerticalStyle}
      />
    );
  };
  return (
    <View style={styles.sectionContainer}>
      {title && (
        <HeaderSection
          params={params}
          navigateTo={navigateTo}
          title={title}
          textStyle={textStyle}
          style={styles.headerSection}
        />
      )}

      {handleFlatlistType()}
      {props.children}
    </View>
  );
};

export default Section;
