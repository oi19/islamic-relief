import {ListRenderItem, StyleSheet} from "react-native";
import React from "react";
import {Review} from "../../../@types";
import {ReviewItem} from "../../organisms";
import {FlatList} from "react-native-gesture-handler";
import {Text} from "../../atoms";
import {Spacing} from "../../../styles";
import {translate} from "../../../helpers";

type ReviewsListProps = {
  reviews?: Review[];
};
const ReviewsList: React.FC<ReviewsListProps> = ({reviews}) => {
  const flatListRef = React.useRef<FlatList | null>(null);

  const [showFullList, setShowFullList] = React.useState(false);

  console.log(reviews);

  const isLoadMore = reviews?.length > 4;

  const toggleList = () => {
    setShowFullList(!showFullList);
  };
  const _renderReviewItem: ListRenderItem<Review> = ({item, index}) => {
    return <ReviewItem item={item} index={index} />;
  };
  return (
    <>
      <FlatList
        ref={flatListRef}
        // data={showFullList ? reviews : reviews?.slice(0, 2)}
        data={reviews}
        renderItem={_renderReviewItem}
        keyExtractor={(_, index) => `review-item${index}`}
        showsVerticalScrollIndicator={false}
      />
      {isLoadMore && (
        <Text
          color="PRIMARY"
          fontSize="FS14"
          style={styles.seeMore}
          onPress={toggleList}>
          {showFullList
            ? translate("Common.viewLess")
            : translate("Common.viewMore")}
        </Text>
      )}
    </>
  );
};

export default ReviewsList;

const styles = StyleSheet.create({
  seeMore: {
    textDecorationLine: "underline",
    paddingHorizontal: Spacing.S11,
    marginVertical: Spacing.S20,

    textAlign: "center",
  },
});
