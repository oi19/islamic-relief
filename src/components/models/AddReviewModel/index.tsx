import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {RefObject} from "react";
import {View} from "react-native";

import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import DocumentPicker, {
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from "react-native-document-picker";
import {translate} from "../../../helpers";
import {ReviewSchema} from "../../../helpers/validationSchema";
import {useLoader} from "../../../hooks";
import {addReview, useAppSelector} from "../../../redux";
import {Colors, Spacing} from "../../../styles";
import {scale} from "../../../styles/dimensions";
import {Button, ControlledInput, Rating, Text} from "../../atoms";
import {Scroll} from "../../molecules";
import BaseModal from "../BaseModal/BaseModal";
import {styles} from "./styles";

type AddReviewModelModelProps = {
  forwardRef: RefObject<BottomSheetModal>;
};
const AddReviewModel: React.FC<AddReviewModelModelProps> = ({forwardRef}) => {
  const {
    control,
    setValue,
    handleSubmit,
    clearErrors,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(ReviewSchema),
  });
  const [images, setImages] = React.useState<
    DocumentPickerResponse[] | undefined | null
  >(null);
  const {id} = useAppSelector(state => state.doctorsReducer.doctorProfile);

  const {image, name} = useAppSelector(state => state.userReducer.profile);

  const [rate, setRating] = React.useState<string | null>("");

  const addReviewLoader = useLoader("addReview");

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

  //   {
  //     "created_at":"2024-03-02T15:30:40.000000Z",
  //     "doctor_id":5,
  //     "id":1,
  //     "rate":4,
  //     "review":"It Is Good Doctor",
  //     "updated_at":"2024-03-02T15:30:40.000000Z",
  //     "user_id":23,
  //     "user_image":"doctors/5WOufSjvvfy6xU7p8P4UsCSPRr8hI8kOS85FZ6Fz.jpg",
  //     "user_name":"Abdallah saber user"
  //  }
  // ;

  const onSendReview = async (data: any) => {
    console.warn("Send Review Button is pressed");

    addReview(data, id, res => {
      if (res) {
        console.log(res?.data?.data);

        setTimeout(() => {
          forwardRef.current?.close();
        }, 5);
      }
    });

    console.log("Review Data", data);

    // clear data
    // dispatch logic with callbackfunction to close the modal
  };

  return (
    <BaseModal
      forwardRef={forwardRef}
      snapPoints={["80%"]}
      backgroundStyle={{
        backgroundColor: Colors.GRAY_EEEEEE,
        borderRadius: scale(20),
      }}>
      <Scroll>
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
          <Rating
            size={scale(36)}
            disabled={false}
            rate={Number(rate)}
            onChangeValue={rating => {
              console.log(rating);
              clearErrors("rate");
              setValue("rate", rating);
              setRating(rating);
            }}
          />
          <Text color="RED">{errors?.rate?.message}</Text>
          <Text
            style={styles.shareOpinionText}
            fontSize="FS18"
            color="FONT_07101A">
            {translate("Model.shareYourOpinion")}
          </Text>
          <ControlledInput
            fieldName="review"
            control={control}
            multiline
            numberOfLines={4}
            placeholder={translate("completePatientDetails.writeHere")}
            textAlignVertical="top"
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.problemInputStyle}
            // inputRef={problemInputRef}
          />
          {/* <FlatList
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
        /> */}
          <Button
            type="standard"
            isLoading={addReviewLoader}
            text={translate("Common.sendReview")}
            style={styles.sendReview}
            onPress={handleSubmit(onSendReview)}
          />
        </View>
      </Scroll>
    </BaseModal>
  );
};

export default AddReviewModel;
