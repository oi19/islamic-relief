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
import {ChatRoomList} from "../../components/molecules";
import {convertObjToFormData, formateImage, isIos} from "../../helpers/utils";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {RouteProp, useFocusEffect, useRoute} from "@react-navigation/native";

import {
  clearOldMessages,
  sendMessage,
  useAppSelector,
  useDispatch,
} from "../../redux/index";
import {Colors} from "../../styles/index";
import {styles} from "./styles";
import {translate} from "../../helpers/language";
import {useNavigationHooks} from "../../hooks/navigation-hooks";
import {isRTL} from "../../locals/i18n-config";
import {usePusher} from "../../hooks/usePusher";
import {getRoomMessages, sendChatMessage} from "../../redux/actions/chatAction";

export default function ChatRoom() {
  const {
    params: {chatData},
  } = useRoute<RouteProp<MainAppStackTypes, "ChatRoom">>();

  const {goBack} = useNavigationHooks();

  const flatlistRef = useRef<FlatList>(null);
  const dispatch = useDispatch();

  const {id} = useAppSelector(state => state.userReducer.profile);
  const [message, setMessage] = React.useState("");
  const [image, setImage] = React.useState<{
    selectedImage: DocumentPickerResponse | null;
    visible: boolean;
  }>({
    selectedImage: null,
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
      setImage({...image, visible: false});
    });
  };

  const onEvent = React.useCallback(
    (event: {data: string; eventName: string}) => {
      const data = JSON.parse(event?.data);

      if (event.eventName === "my-message") {
        console.log("event", data);
        dispatch(sendMessage(data));
      }
    },
    [dispatch],
  );

  const {connect} = usePusher({
    apiKey: "05bd953fa0bb9fb00879",
    channelName: "message-channel",
    onEvent: onEvent,
  });

  const getAllMessage = React.useCallback(
    async (page: number) => {
      await getRoomMessages(page, chatData?.id);
    },
    [chatData?.id],
  );

  useFocusEffect(
    React.useCallback(() => {
      dispatch(clearOldMessages());
    }, [dispatch]),
  );

  React.useEffect(() => {
    connect();
    getAllMessage(1);
  }, [connect, getAllMessage, id]);

  const handleOnSend = async () => {
    if (message.length > 0 || image?.selectedImage) {
      const messageBody = {
        receiver_id: chatData?.id,
        content: message || null,
        receiver_type: "Doctor",

        image: image ? formateImage(image?.selectedImage?.fileCopyUri) : null,
      };
      const _data = convertObjToFormData(messageBody);

      await sendChatMessage(_data, () => {
        flatlistRef?.current?.scrollToOffset({offset: 0, animated: true});
        setMessage("");
        setImage({
          selectedImage: null,
          visible: false,
        });
      });
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

  const pickPicture = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: "fullScreen",
        copyTo: "cachesDirectory",
        type: types.images,
      });
      if (pickerResult?.fileCopyUri) {
        setImage({
          selectedImage: pickerResult,
          visible: true,
        });
        fadeIn();
      }
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
          <ChatRoomList
            flatlistRef={flatlistRef}
            patientName={chatData?.name}
          />
        </View>
        {image.visible && (
          <Animated.View
            style={{
              opacity: fadeAnim,
            }}>
            <ViewRow style={styles.imageContainer}>
              <Image
                source={{uri: image.selectedImage?.fileCopyUri}}
                style={styles.selectedImage}
              />
              <View>
                <Button
                  iconName="close"
                  onPress={() => {
                    fadeOut(); // Trigger fade out animation when closing the image container
                  }}
                  style={styles.closeButton}
                />
              </View>
            </ViewRow>
          </Animated.View>
        )}

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
            onPress={pickPicture}
            iconStyle={{
              color: Colors.PRIMARY,
            }}
            iconContainerStyle={styles.iconContainer}
          />
        </ViewRow>
      </View>
    </KeyboardAvoidingView>
  );
}
