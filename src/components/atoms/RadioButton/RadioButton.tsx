import React, {FC, memo} from "react";
import {TouchableOpacityProps, View} from "react-native";
import Text from "../Text/Text";
import styles from "./styles";
import Button from "../Button/Button";

const RadioButton: FC<
  TouchableOpacityProps & {
    text?: string;
    isChecked?: boolean;
    onChecked: () => void;
  }
> = ({text, onChecked, isChecked, ...props}) => {
  return (
    <Button {...props} onPress={onChecked}>
      <View style={styles.container}>
        {isChecked && <View style={styles.checkedView} />}
      </View>
      <Text style={styles.text} fontSize="FS11">
        {text}
      </Text>
    </Button>
  );
};

export default memo(RadioButton);
