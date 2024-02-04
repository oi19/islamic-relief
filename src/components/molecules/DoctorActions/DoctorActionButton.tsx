import {StyleSheet, View, ViewStyle} from "react-native";
import React from "react";
import {Button, Text} from "../../atoms";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Colors, Spacing} from "../../../styles";
import {IconsName} from "../../../assets/svgs";

type DoctorActionButtonProps = {
  title?: string;
  onPress?: () => void;
  style?: ViewStyle;
  icon: IconsName;
};
const DoctorActionButton: React.FC<DoctorActionButtonProps> = ({
  title,
  onPress,
  style,
  icon,
}) => {
  return (
    <Button style={[style]} onPress={onPress}>
      <View style={{zIndex: 1002}}>
        <Button
          iconName={icon}
          disabled
          iconContainerStyle={{marginLeft: 0}}
          style={styles.notifications}
          iconStyle={styles.icon}
        />
      </View>

      <View style={styles.actionTitle}>
        <Text color="WHITE" fontSize="FS11">
          {title}
        </Text>
      </View>
    </Button>
  );
};

export default DoctorActionButton;

const styles = StyleSheet.create({
  notifications: {
    width: scale(40),
    height: scale(40),
    backgroundColor: Colors.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(25),
    marginVertical: Spacing.S8,
    borderWidth: 2,
    borderColor: Colors.GRAY_EEEEEE,
  },
  actionTitle: {
    width: getWidth(80),
    height: getHeight(25),
    backgroundColor: Colors.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    right: "10%",
  },
  icon: {
    color: Colors.WHITE,
  },
});
