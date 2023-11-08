import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {RefObject} from "react";
import {View} from "react-native";
import {Svgs} from "../../../assets";
import {Button, Text} from "../../atoms";
import BaseModal from "../BaseModal/BaseModal";
import {styles} from "./styles";

type SuccessModelProps = {
  forwardRef: RefObject<BottomSheetModal>;
  message?: string;
  title?: string;
  onContinuePress?: () => void;
};
const SuccessModel: React.FC<SuccessModelProps> = ({
  forwardRef,
  message,
  title,
  onContinuePress,
}) => {
  return (
    <BaseModal
      forwardRef={forwardRef}
      snapPoints={["100%"]}
      enableDrag={false}
      backgroundStyle={styles.model}>
      <View style={styles.root}>
        <Svgs name="successImage" />
        <Text fontSize="FS16" fontFamily="MEDIUM" style={styles.title}>
          {title || "Congratulations"}
        </Text>
        <Text fontSize="FS14" style={styles.message}>
          {message}
        </Text>
        <Button
          text="Continue"
          onPress={onContinuePress}
          type="standard"
          style={styles.okButton}
        />
      </View>
    </BaseModal>
  );
};

export default SuccessModel;
