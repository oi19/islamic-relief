import {FlatListProps, StyleSheet, View} from "react-native";
import React from "react";
import {FlatList} from "react-native-gesture-handler";
import {Loader} from "..";
import {getHeight} from "../../../styles/dimensions";

type PaginationFlatlistProps = {
  onLoadMore: () => void;
  isLoading?: boolean;
};
const PaginationFlatlist: React.FC<
  FlatListProps<any> & PaginationFlatlistProps
> = ({onLoadMore, isLoading, ...props}) => {
  return (
    <View style={styles.content}>
      <FlatList
        scrollEventThrottle={0.00016}
        onEndReached={() => {
          if (props.data && props.data.length > 0) {
            onLoadMore();
          }
        }}
        onEndReachedThreshold={0.16}
        ListFooterComponent={
          <Loader
            isLoading={isLoading}
            style={{paddingTop: getHeight(20), alignSelf: "center"}}
          />
        }
        showsVerticalScrollIndicator={false}
        style={styles.listStyle}
        contentContainerStyle={styles.listContentContainer}
        {...props}
      />
    </View>
  );
};

export default PaginationFlatlist;

const styles = StyleSheet.create({
  content: {
    width: "100%",
  },
  listContentContainer: {
    paddingBottom: getHeight(60),
  },
  listStyle: {width: "100%", minHeight: "100%"},
});
