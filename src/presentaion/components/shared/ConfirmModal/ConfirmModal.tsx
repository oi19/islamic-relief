import React, {memo, RefObject} from "react";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import BaseModal from "../BaseModal/BaseModal";
import {getHeight} from "../../../styles/dimensions";
import {Button, RoundedIcon, Text} from "../../atoms";
import {View} from "react-native";
import styles from "./styles";
import {translate} from "../../../helpers";
import {Spacing} from "../../../styles";

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
    <BaseModal snapPoints={[getHeight(200)]} forwardRef={forwardRef}>
      <View style={styles.container}>
        <Text
          style={styles.cancelTile}
          fontFamily="MEDIUM"
          fontSize="FS16"
          color="BLUE_4A5970">
          {title || translate("Model.cancelModelTitle")}
        </Text>
        <Text fontSize="FS14" color="BLUE_4A5970" style={styles.message}>
          {message || "Are you sure you want to cancel this session?"}
        </Text>
        <View style={styles.buttonsView}>
          <Button
            onPress={onClose}
            style={styles.button}
            text={translate("Common.no")}
            type="border"
          />
          <Button
            isLoading={isLoading}
            onPress={onConfirm}
            style={styles.button}
            text={confirmText || translate("Common.ok")}
            type="standard"
          />
        </View>
      </View>
    </BaseModal>
  );
};

export default memo(ConfirmModal);
