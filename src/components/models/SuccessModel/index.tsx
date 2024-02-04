import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {RefObject} from "react";
import {View} from "react-native";
import {Svgs} from "../../../assets";
import {Button, Text} from "../../atoms";
import BaseModal from "../BaseModal/BaseModal";
import {styles} from "./styles";
import {translate} from "../../../helpers";

type SuccessModelProps = {
  forwardRef: RefObject<BottomSheetModal>;
  message?: string;
  title?: string;
  onContinuePress?: () => void;
  onAnotherButtonPress?: () => void;
  doctorName?: string;
  buttonTitle?: string;
  anotherTitle?: string;
};
const SuccessModel: React.FC<SuccessModelProps> = ({
  forwardRef,
  message,
  title,
  doctorName,
  onContinuePress,
  buttonTitle,
  onAnotherButtonPress,
  anotherTitle,
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
          {title || translate("Model.congratulations")}
        </Text>
        <Text fontSize="FS14" style={styles.message}>
          {message}
        </Text>
        {doctorName && (
          <Text
            fontFamily="MEDIUM"
            color="PRIMARY"
            fontSize="FS16"
            style={styles.doctorName}>
            {doctorName}
          </Text>
        )}
        <Button
          text={buttonTitle || translate("Common.Continue")}
          onPress={onContinuePress}
          type="standard"
          style={styles.okButton}
        />

        {onAnotherButtonPress && (
          <Button
            text={anotherTitle || translate("Common.goHome")}
            onPress={onAnotherButtonPress}
            type="border"
            style={styles.anotherButton}
          />
        )}
      </View>
    </BaseModal>
  );
};

export default SuccessModel;
