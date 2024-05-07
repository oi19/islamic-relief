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
import {Svgs} from "../../../../assets";
import {IconsName} from "../../../../assets/svgs";
// import {isRTL} from "../../../local/i18n";
import {Colors, Spacing} from "../../../../styles";
import {scale} from "../../../../styles/dimensions";
import Button from "../Button/Button";
import Text, {TextProps} from "../Text/Text";
import styles from "./styles";
import {isRTL} from "../../../../locals/i18n-config";
import {Controller} from "react-hook-form";
import {Line} from "../../../../components";

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
  value?: string;
  onChangeText?: (text: string) => void;
  isMobile?: boolean;
  countryCode?: number | string;
  countryButtonHandler?: (item: any) => void;
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
  value,
  onChangeText,
  isMobile,
  countryCode = "+20",
  countryButtonHandler,
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
          isMobile && {flexDirection: "row-reverse"},
        ])}>
        {icon && (
          <Svgs
            width={scale(18)}
            height={scale(18)}
            color={Colors.GRAY_292D32}
            name={icon}
          />
        )}
        {isMobile ? (
          <>
            <Button
              onPress={countryButtonHandler}
              iconStyle={styles.passwordIcon}
              style={styles.mobileNumberButton}>
              <Svgs
                width={scale(20)}
                height={scale(20)}
                color={Colors.GRAY_292D32}
                name="arrow"
                style={{transform: [{rotate: "90deg"}], marginHorizontal: 10}}
              />

              <Text fontSize="FS14" fontFamily="MEDIUM" {...labelStyle}>
                {countryCode}
              </Text>
            </Button>

            <Line
              type="vertical"
              style={{
                backgroundColor: "#8C8C8C",
                height: "35%",
              }}
            />
          </>
        ) : null}

        <TextInput
          placeholderTextColor={Colors.INPUT_TEXT}
          onSubmitEditing={() => {
            if (dismissKeyboard) {
              Keyboard.dismiss();
            }
          }}
          {...props}
          value={value}
          ref={inputRef}
          secureTextEntry={showPassword}
          onChangeText={onChangeText}
          style={[
            styles.inputStyle,
            {textAlign: isRTL() && !isMobile ? "right" : "left"},
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

type ControlledInput = TextInputProps &
  InputProps & {
    fieldName: string;
    control: any;
  };

const ControlledInput = ({
  fieldName,
  control,
  ...inputProps
}: ControlledInput) => {
  return (
    <Controller
      control={control}
      name={fieldName}
      render={({field: {value, onChange}, fieldState: {error}}) => (
        <Input
          {...inputProps}
          value={value}
          onChangeText={onChange}
          error={error?.message?.toString()}
        />
      )}
    />
  );
};

export {ControlledInput};

export default memo(Input);
