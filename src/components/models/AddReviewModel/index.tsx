import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {RefObject} from "react";
import {Image, ImageBackground, View} from "react-native";

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
import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import {Button, ControlledInput, Line, Rating, Text} from "../../atoms";
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
  const {doctorProfile} = useAppSelector(state => state.doctorsReducer);

  const [rate, setRating] = React.useState<string | null>("");

  const addReviewLoader = useLoader("addReview");

  const handleError = (err: unknown) => {
    if (isCancel(err)) {
      console.log("cancelled");
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.log(
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

  const onSendReview = async (data: any) => {
    console.log("Send Review Button is pressed");

    if (doctorProfile?.id) {
      addReview(data, doctorProfile?.id, res => {
        if (res) {
          console.log(res?.data?.data);

          setTimeout(() => {
            forwardRef.current?.close();
          }, 5);
        }
      });

      console.log("Review Data", data);
    }

    // clear data
    // dispatch logic with callbackfunction to close the modal
  };

  return (
    <BaseModal
      forwardRef={forwardRef}
      snapPoints={["100%"]}
      backgroundStyle={{
        backgroundColor: Colors.TRANSPARENT,
      }}>
      <View style={styles.root}>
        <View style={styles.container}>
          <View
            style={{
              width: getWidth(60),
              height: getHeight(60),
              justifyContent: "center",
              backgroundColor: Colors.PRIMARY,
              borderRadius: scale(18),
              marginTop: Spacing.S20,
            }}>
            <ImageBackground
              resizeMode="contain"
              style={{
                height: getHeight(40),
              }}
              source={require("../../../assets/images/logo_white.png")}
            />
          </View>
          <Text
            style={{
              marginVertical: Spacing.S20,
              paddingHorizontal: scale(60),
              textAlign: "center",
            }}
            fontSize="FS14"
            color="FONT_07101A"
            fontFamily="MEDIUM">
            قيم تطبيق الإغاثة الاسلامية على متجر ابل ستور
          </Text>
          <Line style={{height: 2}} />
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
          <Line style={{height: 2}} />
          <Button
            // type="standard"
            // isLoading={addReviewLoader}
            // text={ translate("Common.sendReview")}
            text={"ليس الان"}
            textStyle={{
              color: "PRIMARY",
              fontFamily: "MEDIUM",
              fontSize: "FS16",
            }}
            style={styles.sendReview}
            onPress={() => {
              forwardRef.current?.close();
            }}
          />
        </View>
      </View>
    </BaseModal>
  );
};

export default AddReviewModel;
