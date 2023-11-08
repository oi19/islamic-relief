import React, {memo, RefObject} from "react";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import BaseModal from "../BaseModal/BaseModal";
import {getHeight} from "../../../styles/dimensions";
import {Button, Text} from "../../atoms";
import {View} from "react-native";
import styles from "./styles";
import {translate} from "../../../helpers";

const ConfirmModal = ({
  forwardRef,
  onConfirm,
  confirmText,
  message,
  title,
  isLoading,
}: {
  forwardRef: RefObject<BottomSheetModal>;
  onConfirm: () => void;
  confirmText?: string;
  message?: string;
  title?: string;
  isLoading?: boolean;
}) => {
  const onClose = () => {
    forwardRef.current?.close();
  };
  return (
    <BaseModal
      title={title || "Cancel This Section"}
      snapPoints={[getHeight(170)]}
      forwardRef={forwardRef}>
      <View style={styles.container}>
        <Text fontSize="FS14" style={styles.message}>
          {message || "Are you sure you want to cancel this session?"}
        </Text>
        <View style={styles.buttonsView}>
          <Button
            onPress={onClose}
            style={styles.button}
            text={translate("no")}
            type="border"
          />
          <Button
            isLoading={isLoading}
            onPress={onConfirm}
            style={styles.button}
            text={confirmText || "Cancel"}
            type="standard"
          />
        </View>
      </View>
    </BaseModal>
  );
};
export default memo(ConfirmModal);
