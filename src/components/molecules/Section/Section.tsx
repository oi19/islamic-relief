import React, {FC} from "react";
import {ListRenderItem, View, ViewProps} from "react-native";
import {FlatList} from "react-native-gesture-handler";

import {MainNavigationKeys} from "../../../navigation/navigation-types";
import {getWidth} from "../../../styles/dimensions";
import {TextProps} from "../../atoms/Text/Text";
import HeaderSection from "../HeaderSection/HeaderSection";
import styles from "./styles";

const Section: FC<
  ViewProps & {
    title?: string;
    data?: ReadonlyArray<any>;
    renderItem?: ListRenderItem<any> | null | undefined;
    navigateTo?: MainNavigationKeys | null;
    params?: any;
    textStyle?: TextProps;
    snapToInterval?: number;
    numColumns?: number;
    horizontal?: boolean;
  }
> = ({
  textStyle,
  title,
  data,
  navigateTo,
  params,
  renderItem,
  snapToInterval,
  numColumns,
  horizontal,
  ...props
}) => {
  return (
    <View style={styles.sectionContainer}>
      <HeaderSection
        params={params}
        navigateTo={navigateTo}
        title={title}
        textStyle={textStyle}
        // style={styles.headerSection}
      />
      {data && horizontal && (
        <FlatList
          keyExtractor={(item, index) => `keyExtractor_${index}`}
          key={"SectionList"}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment={"start"}
          snapToInterval={snapToInterval || getWidth(343 + 8)}
          decelerationRate={0}
          horizontal={horizontal || false}
          initialNumToRender={100}
          contentContainerStyle={styles.contentContainerStyle}
          data={data}
          renderItem={renderItem}
        />
      )}

      {data && !horizontal && (
        <FlatList
          keyExtractor={(item, index) => `keyExtractor_${index}`}
          key={"SectionList"}
          showsVerticalScrollIndicator={false}
          decelerationRate={0}
          numColumns={numColumns || 1}
          initialNumToRender={100}
          contentContainerStyle={styles.contentVerticalContainerStyle}
          data={data}
          renderItem={renderItem}
          style={styles.listVerticalStyle}
        />
      )}
      {props.children}
    </View>
  );
};

export default Section;
