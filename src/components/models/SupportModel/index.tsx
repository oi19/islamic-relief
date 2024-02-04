import {View} from "react-native";
import React, {RefObject} from "react";
import {Button, Input, RoundedIcon, Text} from "../../atoms";
import BaseModal from "../BaseModal/BaseModal";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {styles} from "./styles";
import {Colors} from "../../../styles";
import {translate} from "../../../helpers";

type SupportModelProps = {
  forwardRef: RefObject<BottomSheetModal>;
  message?: string;
  title?: string;
  onConfirmPress?: () => void;
};
const SupportModel: React.FC<SupportModelProps> = ({
  forwardRef,
  title,
  message,
  onConfirmPress,
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
            icon="messages"
            iconStyle={{color: Colors.WHITE}}
            title={title || translate("Model.leaveYourMessage")}
            titleStyle={styles.title}
          />
          <Text fontSize="FS14" style={styles.message}>
            {message}
          </Text>

          <Input
            multiline
            numberOfLines={4}
            label={translate("completePatientDetails.writeYourProblem")}
            placeholder={translate("completePatientDetails.writeHere")}
            textAlignVertical="top"
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.problemInputStyle}
            // inputRef={problemInputRef}
          />
          <Button
            text={translate("Common.send")}
            onPress={onConfirmPress}
            type="standard"
            style={styles.okButton}
          />

          <Button
            text={translate("Common.cancel")}
            onPress={() => {
              forwardRef?.current?.close();
            }}
            type="border"
            style={styles.cancelButton}
          />
        </View>
      </View>
    </BaseModal>
  );
};

export default SupportModel;
