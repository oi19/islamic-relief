/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {FlatList, TextInput, View} from "react-native";
import {styles} from "./styles";

interface OTPProps {
  length?: number;
  onOTPSubmit: (otp: string) => void;
  isLoading: boolean;
}

const OTPInputPanel: React.FC<OTPProps> = ({
  length = 5,
  onOTPSubmit,
  isLoading,
}) => {
  const [otpValues, setOTPValues] = React.useState<string[]>(
    Array(length).fill(""),
  );
  const inputRefs = React.useRef<Array<TextInput | null>>(
    Array.from({length}, () => null),
  );

  const [focusedIndex, setFocusedIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0]?.focus();
    }
  }, []);

  const unfocusAll = () => {
    inputRefs.current.forEach(ref => {
      if (ref) {
        ref.blur();
      }
    });
  };

  const handleFocus = (index: number) => {
    // Clear the content of the focused box and the next boxes
    const updatedOTPValues = [...otpValues];
    for (let i = index; i < length; i++) {
      updatedOTPValues[i] = "";
    }
    setOTPValues(updatedOTPValues);
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(null);
  };

  const handleKeyPress = (text: string, index: number) => {
    const updatedOTPValues = [...otpValues];
    updatedOTPValues[index] = text;
    setOTPValues(updatedOTPValues);

    // Check if all OTP boxes are filled
    const isAllBoxesFilled = updatedOTPValues.every(value => value !== "");

    // If all boxes are filled, submit OTP
    if (isAllBoxesFilled) {
      unfocusAll();
      onOTPSubmit(updatedOTPValues.join(""));
    } else if (text !== "" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const _renderItem = ({index}: {index: number}) => (
    <TextInput
      ref={ref => (inputRefs.current[index] = ref || null)}
      style={[
        styles.input,
        focusedIndex === index ? styles.inputFocused : undefined,
      ]}
      maxLength={1}
      keyboardType="numeric"
      onChangeText={text => handleKeyPress(text, index)}
      onFocus={() => handleFocus(index)}
      onBlur={handleBlur}
      value={otpValues[index]}
      editable={!isLoading}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Array.from({length})}
        renderItem={_renderItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.otpContainer}
        horizontal
      />
      {isLoading && <View style={styles.disableClicks} />}
    </View>
  );
};

export default OTPInputPanel;
