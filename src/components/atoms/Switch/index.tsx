import React, {useState} from "react";
import {View, TouchableOpacity, Animated} from "react-native";
import {styles} from "./styles";
import {scale} from "../../../styles/dimensions";
import {isRTL} from "../../../locals/i18n-config";

type SwitchProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
};

const Switch: React.FC<SwitchProps> = ({value, onValueChange}) => {
  const [active, setActive] = useState(value);
  const isRtlNumber = isRTL() ? -1 : 1;

  const switchTranslateX = useState(
    new Animated.Value(
      active ? scale(23 * isRtlNumber) : scale(-3 * isRtlNumber),
    ),
  )[0];

  const toggleSwitch = () => {
    const newValue = !active;
    setActive(newValue);
    onValueChange(newValue);
    Animated.timing(switchTranslateX, {
      toValue: newValue ? scale(18 * isRtlNumber) : scale(0),
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity onPress={toggleSwitch}>
      <View
        style={[
          styles.container,
          active ? styles.activeContainer : styles.inactiveContainer,
        ]}>
        <Animated.View
          style={[
            styles.switch,
            active ? styles.activeSwitch : styles.inactiveSwitch,
            {
              transform: [{translateX: switchTranslateX}],
            },
          ]}
        />
        {/* <Text style={[styles.label]}>{value ? "online" : "Offline"}</Text> */}
        {/* </Animated.View> */}
      </View>
    </TouchableOpacity>
  );
};

export default Switch;
