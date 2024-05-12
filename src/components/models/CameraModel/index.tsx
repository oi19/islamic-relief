import React, {memo} from "react";
import {View} from "react-native";

import {getHeight, scale} from "../../../styles/dimensions";
import BaseModal from "../BaseModal/BaseModal";
import {Button, Image} from "../../../components/atoms";
import {translate} from "../../../helpers/language";
import {Images} from "../../../assets/images";
import ImagePicker from "react-native-image-crop-picker";
import {styles} from "./styles";
import {TextProps} from "../../../components/atoms/Text/Text";

export type ImageCropResponse = {
  cropRect: {height: number; width: number; x: number; y: number};
  height: number;
  mime?: string;
  modificationDate?: string;
  path: string;
  size?: number;
  width: number;
};

const textButtonStyle: TextProps = {
  fontFamily: "NORMAL",
  color: "BLUE_4A5970",
  fontSize: "FS13",
};

const CameraModal = ({
  onSetImage,
  forwardRef,
}: {
  forwardRef: any;
  setLoading?: (status: boolean) => void;
  onSetImage: (image: ImageCropResponse) => void;
  imageLength?: number;
}) => {
  const onClose = () => {
    forwardRef.current?.close();
  };

  const options: any = {
    cropperCircleOverlay: true,
    mediaType: "photo",
    width: 512,
    height: 512,
    cropping: true,
  };

  const openCamera = async () => {
    forwardRef?.current?.close();
    try {
      const image: any = await ImagePicker.openCamera(options);

      if (image) {
        // Do something with the image
        onSetImage(image);
      }
    } catch (error) {
      console.log("cancelled");
    }
  };

  const launchGallery = async () => {
    forwardRef?.current?.close();

    try {
      const image: any = await ImagePicker.openPicker(options);

      if (image) {
        // Do something with the image
        console.log("Image selected from gallery: ", image);
        onSetImage(image);
      }
    } catch (error) {
      console.log("Error while opening gallery: ", error);
      console.log("cancelled");
    }
  };

  return (
    <BaseModal forwardRef={forwardRef} snapPoints={["30%"]}>
      <View style={styles.searchAndCloseButton}>
        <Button
          iconStyle={styles.closeButtonIcon}
          onPress={onClose}
          iconName="close"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.baseButton}
            textStyle={textButtonStyle}
            onPress={openCamera}
            text={translate("Common.takePhoto")}
            textContainerStyle={{marginTop: getHeight(7)}}>
            <Image
              style={{
                width: scale(60),
                height: scale(60),
              }}
              source={Images.camera}
            />
          </Button>

          <Button
            textContainerStyle={{marginTop: getHeight(7)}}
            style={styles.baseButton}
            onPress={launchGallery}
            textStyle={textButtonStyle}
            text={translate("Common.gallery")}>
            <Image
              style={{
                width: scale(60),
                height: scale(60),
              }}
              source={Images.gallery}
            />
          </Button>
        </View>

        {/* <Button
          onPress={onClose}
          style={{
            marginTop: getHeight(10),
            width: getWidth(250),
          }}
          text={translate("Common.cancel")}
          type="standerGradient"
        /> */}
      </View>
    </BaseModal>
  );
};

export default memo(CameraModal);
