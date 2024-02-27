import React, {useRef} from "react";
import {Keyboard, Linking, View} from "react-native";
import {styles} from "./styles";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {useLoader} from "../../hooks";
import {translate} from "../../helpers";
import {showToast} from "../../redux";
import {Header, ProfileRowCard, SupportModel} from "../../components";
import {getHeight} from "../../styles/dimensions";
import {Spacing} from "../../styles";

const Help = () => {
  const supportModalRef = useRef<BottomSheetModal>(null);

  const sendLoader = useLoader("sendNotes");
  const [message, setMessage] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  const onOpenWarningModal = () => {
    setError("");
    supportModalRef.current?.present();
  };

  // const onSendConfirm = () => {
  //   Keyboard.dismiss();
  //   if (message) {
  //     sendNotes({notes: message}, () => {
  //       dispatch(showToast(translate("Model.messageSend")));
  //       setTimeout(() => {
  //         supportModalRef.current?.close();
  //       }, 10);
  //     });
  //   } else {
  //     setError(translate("Model.vaildMessage"));
  //   }
  // };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("Profile.help")}
        style={{height: getHeight(130), paddingTop: Spacing.S20}}
      />
      <View style={styles.content}>
        <ProfileRowCard
          item={{
            name: translate("Profile.sendtoUs"),
          }}
          handleOnRowPressed={onOpenWarningModal}
        />
        <ProfileRowCard
          item={{
            name: translate("Profile.callUs"),
          }}
          handleOnRowPressed={() => {
            Linking.openURL(`tel:${1667755}`);
          }}
        />
      </View>
      <SupportModel
        forwardRef={supportModalRef}
        message={translate("myAppointment.supportMessage")}
        onConfirmPress={() => {}}
        onMessageChange={setMessage}
        errorMessage={error}
        isLoading={sendLoader}
      />
    </View>
  );
};

export default Help;
