import React, {FC, memo, useState} from "react";
import {
  TextInput,
  Keyboard,
  TextInputProps,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import {Svgs} from "../../../assets";
import {IconsName} from "../../../assets/svgs";
// import {isRTL} from "../../../local/i18n";
import {Colors, Spacing} from "../../../styles";
import {scale} from "../../../styles/dimensions";
import Button from "../Button/Button";
import Text, {TextProps} from "../Text/Text";
import styles from "./styles";
import {isRTL} from "../../../locals/i18n-config";

type InputProps = {
  password?: boolean;
  dismissKeyboard?: boolean;
  icon?: IconsName;
  inputStyle?: StyleProp<TextStyle>;
  error?: string;
  leftText?: string;
  label?: string;
  labelStyle?: TextProps;
  inputContainerStyle?: ViewStyle;
  inputRef?: React.RefObject<TextInput>;
};
const Input: FC<TextInputProps & InputProps> = ({
  password,
  dismissKeyboard,
  icon,
  style,
  error,
  leftText,
  label,
  inputContainerStyle,
  inputRef,
  labelStyle,
  ...props
}) => {
  let [showPassword, setShowPassword] = useState(password);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={[style]}>
      {label && (
        <Text fontSize="FS14" fontFamily="MEDIUM" {...labelStyle}>
          {label}
        </Text>
      )}
      <View
        style={StyleSheet.flatten([
          styles.inputContainer,
          inputContainerStyle,
        ])}>
        {icon && (
          <Svgs
            width={scale(18)}
            height={scale(18)}
            color={Colors.GRAY_292D32}
            name={icon}
          />
        )}

        <TextInput
          placeholderTextColor={Colors.GRAY_CBCBCB}
          onSubmitEditing={() => {
            if (dismissKeyboard) {
              Keyboard.dismiss();
            }
          }}
          {...props}
          ref={inputRef}
          secureTextEntry={showPassword}
          style={[
            styles.inputStyle,
            {textAlign: isRTL() ? "right" : "left"},
            props.inputStyle,
          ]}
        />

        {leftText && (
          <Text
            color="PRIMARY"
            fontSize="FS11"
            style={{paddingHorizontal: Spacing.S16}}>
            {leftText}
          </Text>
        )}

        {password && (
          <Button
            onPress={onShowPassword}
            iconStyle={styles.passwordIcon}
            iconName={showPassword ? "showPassword" : "hidePassword"}
            style={styles.passwordButton}
          />
        )}
      </View>
      {error && (
        <Text color="RED" style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default memo(Input);
