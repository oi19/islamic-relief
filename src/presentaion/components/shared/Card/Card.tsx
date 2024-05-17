import React, {FC, memo} from "react";
import {TouchableOpacityProps} from "react-native";
import Button from "../Button/Button";
import styles from "./styles";

const Card: FC<TouchableOpacityProps> = ({style, onPress, ...props}) => {
  return (
    <Button
      onPress={onPress}
      style={[styles.cardContainer, style]}
      {...props}
    />
  );
};
export default memo(Card);
