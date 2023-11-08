import React, {FC, memo, useState} from "react";
import {TouchableOpacityProps} from "react-native";
import {IconsName} from "../../../assets/svgs";
import styles from "./styles";
import Button from "../Button/Button";

const CheckBox: FC<
  TouchableOpacityProps & {
    checkIcon?: IconsName;
    unCheckIcon?: IconsName;
    text?: string;
    isChecked?: boolean;
  }
> = ({checkIcon, unCheckIcon, text, isChecked, ...props}) => {
  let [_isChecked, setChecked] = useState(isChecked);
  const _checkIcon = checkIcon || "checked";
  const _unCheckIcon = unCheckIcon || "unchecked";
  const onCheck = () => {
    setChecked(!_isChecked);
  };
  return (
    <Button
      {...props}
      onPress={onCheck}
      textContainerStyle={styles.textStyle}
      iconContainerStyle={{marginLeft: 0}}
      iconStyle={styles.icon}
      iconName={_isChecked ? _checkIcon : _unCheckIcon}
      text={text}
      style={[styles.button, props.style]}
      textStyle={{fontSize: "FS13", fontFamily: "NORMAL", color: "BLUE_4A5970"}}
    />
  );
};

export default memo(CheckBox);
