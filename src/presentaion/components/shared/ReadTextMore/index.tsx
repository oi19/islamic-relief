import {StyleSheet, TextStyle, View} from "react-native";
import React from "react";
import Text from "../Text/Text";
import {Spacing} from "../../../../styles";
import {translate} from "../../../../helpers";

type ReadTextMoreProps = {
  text?: string;
  title?: string;
  titleStyle?: TextStyle;
  textStyle?: TextStyle;
  enableReadMore?: boolean;
};
const ReadTextMore: React.FC<ReadTextMoreProps> = ({
  title,
  text,
  titleStyle,
  textStyle,
  enableReadMore,
}) => {
  const [showFullText, setShowFullText] = React.useState(false);

  const isLoadMore = text && text?.length >= 50;

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <View style={styles.textsContainer}>
      {title ? (
        <Text style={[titleStyle]} fontFamily="MEDIUM" fontSize="FS16">
          {title}
        </Text>
      ) : null}
      <View>
        <Text style={[styles.fullText, textStyle]}>
          {isLoadMore ? (
            <>
              {
                <Text fontFamily="MEDIUM" fontSize="FS12" color="INPUT_TEXT">
                  {showFullText ? text : text?.slice(0, 40) + ` ... `}
                </Text>
              }

              <Text
                color="PRIMARY"
                fontSize="FS12"
                fontFamily="MEDIUM"
                style={styles.seeMore}
                disabled={enableReadMore}
                // onPress={() => enableReadMore && toggleText}
              >
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
    // textDecorationLine: "underline",
    paddingStart: Spacing.S11,
  },
  textsContainer: {
    // marginVertical: Spacing.S11,
  },
  fullText: {
    textAlign: "left",
    flexWrap: "wrap",
    marginTop: Spacing.S4,
  },
});
