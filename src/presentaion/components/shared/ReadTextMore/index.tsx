import {StyleSheet, View} from "react-native";
import React from "react";
import Text from "../Text/Text";
import {Spacing} from "../../../../styles";
import {translate} from "../../../../helpers";

type ReadTextMoreProps = {
  text?: string;
  title?: string;
};
const ReadTextMore: React.FC<ReadTextMoreProps> = ({title, text}) => {
  const [showFullText, setShowFullText] = React.useState(false);

  const isLoadMore = text && text?.length >= 125;

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <View style={styles.textsContainer}>
      <Text fontFamily="MEDIUM" fontSize="FS16">
        {title}
      </Text>
      <View>
        <Text style={styles.fullText}>
          {isLoadMore ? (
            <>
              {showFullText ? text : text?.slice(0, 100)}
              <Text
                color="PRIMARY"
                fontSize="FS11"
                style={styles.seeMore}
                onPress={toggleText}>
                {showFullText
                  ? translate("Common.readLess")
                  : translate("Common.readMore")}
              </Text>
            </>
          ) : (
            text
          )}
          {"  "}
        </Text>
      </View>
    </View>
  );
};

export default ReadTextMore;

const styles = StyleSheet.create({
  seeMore: {
    textDecorationLine: "underline",
    paddingHorizontal: Spacing.S11,
  },
  textsContainer: {
    marginVertical: Spacing.S11,
  },
  fullText: {
    textAlign: "left",
    width: "95%",
    marginTop: Spacing.S11,
  },
});
