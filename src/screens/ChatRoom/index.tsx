import React, {useRef} from "react";
import {Animated, FlatList, KeyboardAvoidingView, View} from "react-native";
import DocumentPicker, {
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from "react-native-document-picker";

import {Images} from "../../assets/images";
import {Button, Image, Input, Text, ViewRow} from "../../components/atoms";
import {ChatRoomList, SelectedMultiPhotos} from "../../components/molecules";
import {convertObjToFormData, formatImage, isIos} from "../../helpers/utils";
// import { usePusher } from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {RouteProp, useRoute} from "@react-navigation/native";
// import { getRoomMessages, sendChatMessage } from "../../redux/actions/chatAction";
// import { sendMessage } from "../../redux/reducers/chatsReducer";
import {useDispatch} from "../../redux/index";
import {Colors} from "../../styles/index";
import {styles} from "./styles";
import {translate} from "../../helpers/language";
import {useNavigationHooks} from "../../hooks/navigation-hooks";
import {isRTL} from "../../locals/i18n-config";

export default function ChatRoom() {
  const {
    params: {chatData},
  } = useRoute<RouteProp<MainAppStackTypes, "ChatRoom">>();

  const {goBack} = useNavigationHooks<MainAppStackTypes>();

  const flatlistRef = useRef<FlatList>(null);
  const dispatch = useDispatch();

  // const {id} = useAppSelector(state => state.doctorReducer.profile);
  const [message, setMessage] = React.useState("");
  const [images, setImages] = React.useState<{
    selectedImages: Array<DocumentPickerResponse> | undefined | null;
    visible: boolean;
  }>({
    selectedImages: null,
    visible: false,
  });

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setImages({...images, visible: false});
    });
  };

  const onEvent = React.useCallback(
    (event: {data: string; eventName: string}) => {
      const data = JSON.parse(event?.data);

      if (event.eventName === "my-event") {
        console.log("event", data);

        // dispatch(sendMessage(data));
      }
    },
    [],
  );

  // const {connect} = usePusher({
  //   apiKey: "05bd953fa0bb9fb00879",
  //   channelName: "my-channel",
  //   onEvent: onEvent,
  // });

  const getAllMessage = React.useCallback(async (page: number) => {
    // await getRoomMessages(page, chatData?.id);
  }, []);

  // React.useEffect(() => {
  //   connect();
  //   getAllMessage(1);
  // }, [connect, getAllMessage, id]);

  const handleOnSend = async () => {
    // console.warn("send Button Pressed");

    if (
      message.length > 0 ||
      (images.selectedImages && images.selectedImages?.length > 0)
    ) {
      const messageBody = {
        receiver_id: chatData?.id,
        content: message,
        receiver_type: "User",
        image: images ? formatImage(images?.selectedImages) : null,
      };
      setMessage("");
      setImages({
        selectedImages: null,
        visible: false,
      });
      const _data = convertObjToFormData(messageBody);
      // await sendChatMessage(_data, () => {
      //   flatlistRef?.current?.scrollToOffset({offset: 0, animated: true});
      //   setMessage("");
      //   setImage({
      //     selectedImages: null,
      //     visible: false,
      //   });
      // });
    }
  };

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
      const pickedImages = await DocumentPicker.pick({
        allowMultiSelection: true,
        presentationStyle: "fullScreen",
        copyTo: "cachesDirectory",
        type: [types.images],
      });
      // if (pickedImages && pickedImages[0]?.fileCopyUri) {
      setImages({
        selectedImages: pickedImages,
        visible: true,
      });
      fadeIn();
      // }
    } catch (e) {
      handleError(e);
    }
  };

  const renderHeader = () => {
    return (
      <ViewRow style={styles.header}>
        <Button
          iconName="arrow"
          iconStyle={{
            rotate: isRTL() ? "right" : "left",
          }}
          onPress={() => goBack()}
        />
        <ViewRow style={styles.headerInfoContainer}>
          <Image source={Images.default} style={styles.image} />
          <Text fontFamily="MEDIUM" color="WHITE" fontSize="FS16">
            {chatData?.name}
          </Text>
        </ViewRow>
      </ViewRow>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={isIos ? "padding" : "height"}>
      <View style={styles.rootScreen}>
        {renderHeader()}
        <View style={styles.rootScreen}>
          <ChatRoomList flatlistRef={flatlistRef} />
        </View>
        <View style={styles.bottomSectionContainer}>
          {images.selectedImages && images.visible ? (
            <Animated.View
              style={{
                opacity: fadeAnim,
              }}>
              <Button
                iconName="close"
                onPress={() => {
                  fadeOut(); // Trigger fade out animation when closing the image container
                }}
                style={styles.closeButton}
                iconStyle={{
                  color: Colors.BLACK,
                }}
              />
              <FlatList
                data={null}
                renderItem={null}
                showsHorizontalScrollIndicator={false}
                horizontal
                ListHeaderComponent={
                  <View style={styles.imageContainer}>
                    <SelectedMultiPhotos listItems={images.selectedImages} />
                  </View>
                }
              />
            </Animated.View>
          ) : null}
          <ViewRow style={styles.inputContainer}>
            <Button
              iconName="send"
              onPress={handleOnSend}
              iconStyle={{
                color: Colors.PRIMARY,
              }}
              iconContainerStyle={styles.iconContainer}
            />
            <Input
              onChangeText={setMessage}
              value={message}
              inputContainerStyle={styles.input}
              placeholder={translate("completePatientDetails.writeHere")}
              placeholderTextColor={Colors.FONT_07101A}
            />
            <Button
              iconName="plus"
              onPress={handleUploadDocuments}
              iconStyle={{
                color: Colors.GRAY_CBCBCB,
              }}
              iconContainerStyle={styles.iconContainer}
            />
          </ViewRow>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
