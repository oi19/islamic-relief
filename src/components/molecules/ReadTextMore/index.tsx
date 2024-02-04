import {StyleSheet, View} from "react-native";
import React from "react";
import {Text} from "../../atoms";
import {Spacing} from "../../../styles";
import {translate} from "../../../helpers";

type ReadTextMoreProps = {
  text?: string;
  title?: string;
};
const ReadTextMore: React.FC<ReadTextMoreProps> = ({title}) => {
  const [showFullText, setShowFullText] = React.useState(false);

  const fullText =
    "Lorem ipsum dolor sit amet consectetur. Lacus sit quis vitae consectetur nulla rutrum. Lorem ipsum dolor sit amet consectetur. Lacus sit quis vitae consectetur nulla rutrum.Lorem ipsum dolor sit amet consectetur. Lacus sit quis vitae consectetur nulla rutrum.Lorem ipsum dolor sit amet consectetur. Lacus sit quis vitae consectetur nulla rutrum.";

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
          {showFullText ? fullText : fullText.slice(0, 100)}
          {"  "}
          <Text
            color="PRIMARY"
            fontSize="FS11"
            style={styles.seeMore}
            onPress={toggleText}>
            {showFullText
              ? translate("Common.readLess")
              : translate("Common.readMore")}
          </Text>
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
