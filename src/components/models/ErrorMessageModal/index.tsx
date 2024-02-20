import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {RefObject} from "react";
import {View} from "react-native";
import {styles} from "./styles";
import {hideErrorModel, useAppSelector, useDispatch} from "../../../redux";
import BaseModal from "../BaseModal/BaseModal";
import {Button, RoundedIcon, Text} from "../../atoms";
import {translate} from "../../../helpers/language";

type ErrorMessageModalProps = {
  forwardRef: RefObject<BottomSheetModal>;
  message?: string;
  title?: string;
  onContinuePress?: () => void;
};
const ErrorMessageModal: React.FC<ErrorMessageModalProps> = ({
  forwardRef,
  title,
  onContinuePress,
}) => {
  const dispatch = useDispatch();
  const {visibleErrorModel, message} = useAppSelector(
    state => state.globalReduce,
  );
  React.useEffect(() => {
    if (visibleErrorModel) {
      forwardRef?.current?.present();
    }
  }, [forwardRef, visibleErrorModel]);

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
            onPress={() => {
              dispatch(hideErrorModel());

              setTimeout(() => {
                forwardRef?.current?.close();
              }, 5);
            }}
            type="standard"
            style={styles.okButton}
          />
        </View>
      </View>
    </BaseModal>
  );
};

export default ErrorMessageModal;
