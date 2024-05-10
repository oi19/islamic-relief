import React, {memo} from "react";
import {
  FlatList,
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from "react-native";

import {styles} from "./styles";

import {isRTL as rtl} from "../../../../locals/i18n-config";

interface OTPProps {
  length: number;
  onOTPSubmit: (otp: string) => void;
  isLoading: boolean;
}

const OTPInputPanel: React.FC<OTPProps> = ({
  length = 4,
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

  const isRTL = rtl();
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

  const onSubmit = () => {
    unfocusAll();
    onOTPSubmit(otpValues.join(""));
  };

  React.useEffect(() => {
    const isAllBoxesFilled = otpValues.every(value => value !== "");
    if (isAllBoxesFilled) {
      onSubmit();
    }
  }, [otpValues]);

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    const {key} = event.nativeEvent;
    const updatedOTPValues = [...otpValues];

    if (key === "Backspace" && index > 0) {
      // Clear the content of the current box
      updatedOTPValues[index] = "";
      setOTPValues(updatedOTPValues);

      // Move the focus to the previous box
      inputRefs.current[index - 1]?.focus();
    } else if (key.length === 1) {
      // Update the current box value
      updatedOTPValues[index] = key;

      setOTPValues(updatedOTPValues);

      // Move the focus to the next box if available
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const _renderItem = ({index}: {index: number}) => {
    return (
      <TextInput
        key={"OTP_CELL" + index}
        ref={ref => (inputRefs.current[index] = ref || null)}
        style={[styles.input, focusedIndex == index && styles.inputFocused]}
        maxLength={1}
        keyboardType="numeric"
        onFocus={() => handleFocus(index)}
        onBlur={handleBlur}
        value={otpValues[index]}
        editable={!isLoading}
        onKeyPress={event => handleKeyPress(event, index)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={otpValues}
        renderItem={_renderItem}
        keyExtractor={(_, index) => `otp-item-${index.toString()}`}
        contentContainerStyle={styles.otpContainer}
        // horizontal={true}
        inverted={true}
      />
    </View>
  );
};

export default OTPInputPanel;
