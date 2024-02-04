import React from "react";
import {TouchableOpacity} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {IconsName} from "../../../assets/svgs";
import {Colors} from "../../../styles";
import {RoundedIcon} from "../../atoms";
import {styles} from "./styles";
type TabIconProps = {
  icon: IconsName;
  onPress?: () => void;
};

const TabIcon: React.FC<TabIconProps> = ({icon, onPress}) => {
  const scale = useSharedValue(1);
  const [active, setActive] = React.useState(false);

  const onPressIn = () => {
    scale.value = withSpring(0.98, {
      damping: 10,
      mass: 1,
      stiffness: 500,
    });
  };
  const onPressOut = () => {
    scale.value = withSpring(1, {
      damping: 10,
      mass: 1,
      stiffness: 500,
    });
  };

  const animatedScale = useAnimatedStyle(() => {
    return {transform: [{scale: scale.value}]};
  });
  return (
    <Animated.View style={animatedScale}>
      <TouchableOpacity
        activeOpacity={0.91}
        onPress={() => {
          setActive(!active);
          if (onPress) {
            onPress();
          }
        }}
        onPressIn={onPressIn}
        onPressOut={onPressOut}>
        <RoundedIcon
          icon={icon}
          iconStyle={{color: active ? Colors.BLACK : Colors.WHITE}}
          size={45}
          style={styles.roundedIcon}
          backgroundColor={active ? "WHITE" : "PRIMARY1"}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default TabIcon;
