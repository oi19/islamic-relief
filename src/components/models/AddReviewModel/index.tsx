import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {RefObject} from "react";
import {View} from "react-native";

import DocumentPicker, {
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from "react-native-document-picker";
import {FlatList} from "react-native-gesture-handler";
import {translate} from "../../../helpers";
import {Colors, Spacing} from "../../../styles";
import {scale} from "../../../styles/dimensions";
import {
  Button,
  Card,
  Input,
  Rating,
  RoundedIcon,
  Text,
  ViewRow,
} from "../../atoms";
import {SelectedMultiPhotos} from "../../molecules";
import BaseModal from "../BaseModal/BaseModal";
import {styles} from "./styles";

type AddReviewModelModelProps = {
  forwardRef: RefObject<BottomSheetModal>;
};
const AddReviewModel: React.FC<AddReviewModelModelProps> = ({forwardRef}) => {
  const [images, setImages] = React.useState<
    DocumentPickerResponse[] | undefined | null
  >(null);

  const handleError = (err: unknown) => {
    if (isCancel(err)) {
      console.warn("cancelled");
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        "multiple pickers were opened, only the last will be considered",
      );
    } else {
      throw err;
    }
  };

  const handleUploadDocuments = async () => {
    try {
      DocumentPicker.pick({
        allowMultiSelection: true,
        type: [types.images],
      })
        .then(setImages)
        .catch(handleError);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <BaseModal
      forwardRef={forwardRef}
      snapPoints={["75%"]}
      backgroundStyle={{
        backgroundColor: Colors.GRAY_EEEEEE,
        borderRadius: scale(20),
      }}>
      <View style={styles.container}>
        <Text
          style={{
            marginVertical: Spacing.S20,
          }}
          fontSize="FS18"
          color="FONT_07101A"
          fontFamily="MEDIUM">
          {translate("Model.whatIsRate")}
        </Text>
        <Rating size={scale(36)} />
        <Text
          style={styles.shareOpinionText}
          fontSize="FS18"
          color="FONT_07101A">
          {translate("Model.shareYourOpinion")}
        </Text>
        <Input
          multiline
          numberOfLines={4}
          placeholder={translate("completePatientDetails.writeHere")}
          textAlignVertical="top"
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.problemInputStyle}
          // inputRef={problemInputRef}
        />
        <FlatList
          data={null}
          renderItem={null}
          showsHorizontalScrollIndicator={false}
          horizontal
          ListHeaderComponent={
            <ViewRow style={{paddingHorizontal: Spacing.S20}}>
              {images && <SelectedMultiPhotos listItems={images} />}
              <Card
                onPress={() => {
                  handleUploadDocuments();
                }}
                style={styles.cameraButton}>
                <RoundedIcon
                  icon="camera"
                  backgroundColor="PRIMARY"
                  title={translate("Common.addPhotos")}
                  iconStyle={{
                    color: Colors.WHITE,
                  }}
                />
              </Card>
            </ViewRow>
          }
        />
        <Button
          type="standard"
          text={translate("Common.sendReview")}
          style={styles.sendReview}
        />
      </View>
    </BaseModal>
  );
};

export default AddReviewModel;
