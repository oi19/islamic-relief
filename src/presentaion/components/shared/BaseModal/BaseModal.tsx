/* eslint-disable react-native/no-inline-styles */
import React, {FC, memo, RefObject} from "react";
import {BottomSheetBackdrop, BottomSheetModal} from "@gorhom/bottom-sheet";
import {Easing} from "react-native-reanimated";
import {View, ViewProps, ViewStyle} from "react-native";
import Button from "../Button/Button";
import Text from "../Text/Text";
import styles from "./styles";
import {Spacing} from "../../../../styles";
import {isRTL} from "../../../../locals/i18n-config";
import {IconsName} from "../../../../assets/svgs";

const BaseModal: FC<
  ViewProps & {
    forwardRef: RefObject<BottomSheetModal>;
    snapPoints: Array<number | string>;
    title?: string;
    onLeftPress?: () => void;
    leftButtonText?: string;
    onDismiss?: () => void;
    backgroundStyle?: ViewStyle;
    enableDrag?: boolean;
    titleIcon?: IconsName;
  }
> = ({
  forwardRef,
  snapPoints,
  title,
  onLeftPress,
  leftButtonText,
  onDismiss,
  backgroundStyle,
  enableDrag = true,
  titleIcon,
  ...props
}) => {
  const onCancel = () => {
    forwardRef.current?.close();
  };
  return (
    <BottomSheetModal
      onDismiss={onDismiss}
      enableContentPanningGesture={enableDrag}
      enableDismissOnClose
      handleComponent={null}
      backdropComponent={(props: any) => (
        <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />
      )}
      ref={forwardRef}
      animationConfigs={{
        duration: 300,
        easing: Easing.elastic(),
      }}
      index={0}
      backgroundStyle={[styles.backgroundStyle, backgroundStyle]}
      snapPoints={snapPoints || ["50%"]}>
      {title && (
        <View style={styles.header}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Button
              onPress={onCancel}
              style={styles.button}
              iconStyle={{...styles.icon, rotate: isRTL() ? "right" : "left"}}
              iconName={titleIcon || "arrow"}
            />
            <Text fontSize="FS13" fontFamily="MEDIUM" color="GRAY_1E103A">
              {title}
            </Text>
          </View>
          {onLeftPress && (
            <Button
              style={{paddingHorizontal: Spacing.S11}}
              onPress={onLeftPress}
              textStyle={{
                fontSize: "FS14",
                color: "GRAY_676767",
              }}
              textContainerStyle={{
                textDecorationLine: "underline",
              }}
              text={leftButtonText}
            />
          )}
        </View>
      )}
      {props.children}
    </BottomSheetModal>
  );
};

export default memo(BaseModal);
