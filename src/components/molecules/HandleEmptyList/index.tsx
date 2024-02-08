import React from "react";
import {View} from "react-native";

import {Text} from "../../atoms";
import {styles} from "./styles";
import Svgs, {IconsName} from "../../../assets/svgs";

type HandleEmptyListProps = {
  icon: IconsName;
  title?: string;
  message?: string;
  loading?: boolean;
};
const HandleEmptyList: React.FC<HandleEmptyListProps> = ({
  icon,
  title,
  message,
}) => {
  return (
    <View style={styles.root}>
      <Text fontFamily="BOLD" fontSize="H1">
        {title}
      </Text>
      <View style={styles.content}>
        <Svgs name={icon} />
        <Text fontSize="FS14" style={styles.message}>
          {message}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(HandleEmptyList);
