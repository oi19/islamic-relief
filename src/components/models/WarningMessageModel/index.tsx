import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {RefObject} from "react";
import {View} from "react-native";
import {Button, RoundedIcon, Text} from "../../atoms";
import BaseModal from "../BaseModal/BaseModal";
import {styles} from "./styles";
import {translate} from "../../../helpers";

type WarningMessageModelProps = {
  forwardRef: RefObject<BottomSheetModal>;
  message?: string;
  title?: string;
  onContinuePress?: () => void;
};
const WarningMessageModel: React.FC<WarningMessageModelProps> = ({
  forwardRef,
  title,
  message,
  onContinuePress,
}) => {
  return (
    <BaseModal
      forwardRef={forwardRef}
      snapPoints={["100%"]}
      backgroundStyle={styles.model}>
      <View style={styles.root}>
        <View style={styles.container}>
          <RoundedIcon
            style={styles.roundedIcon}
            backgroundColor="PRIMARY"
            icon="warning"
            title={title || translate("Model.warningTitle")}
            titleStyle={styles.title}
          />
          <Text fontSize="FS14" style={styles.message}>
            {message}
          </Text>
          <Button
            text={translate("Common.ok")}
            onPress={onContinuePress}
            type="standard"
            style={styles.okButton}
          />
        </View>
      </View>
    </BaseModal>
  );
};

export default WarningMessageModel;
