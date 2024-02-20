import React, {useMemo, useRef, useState} from "react";
import {View} from "react-native";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {
  ActivityList,
  Button,
  DoctorsList,
  HandleSignIn,
  Header,
  SuccessModel,
  SupportModel,
  TabsView,
} from "../../components";
import {styles} from "./styles";
import {TabOptionType} from "../../@types";
import {getHeight, getWidth, scale} from "../../styles/dimensions";
import {Spacing} from "../../styles";
import {translate} from "../../helpers";
import {doctors} from "../../dummyData";

const MyActivity = () => {
  const supportModalRef = useRef<BottomSheetModal>(null);
  const successModalRef = useRef<BottomSheetModal>(null);

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const tabs: TabOptionType[] = useMemo(
    () => [
      {
        name: translate("myActivity.all"),
        content: <DoctorsList listItems={doctors} />,
      },
      {
        name: translate("myActivity.upcoming"),
      },
      {
        name: translate("myActivity.completed"),
      },
      {
        name: translate("myActivity.cancelled"),
      },
    ],
    [],
  );

  const onOpenWarningModal = () => {
    supportModalRef.current?.present();
  };

  const handleSupportConfirmPress = () => {
    // Handle support confirmation logic
    console.log("Your problem was sent successfully to support");
    supportModalRef.current?.close();

    // replace this code with bussiness logic code for posting the support message
    setTimeout(() => {
      successModalRef.current?.present();
    }, 300);
  };

  const handleSuccessContinuePress = () => {
    // Handle success continue press
    successModalRef.current?.close();
  };

  return (
    <View style={styles.rootScreen}>
      {false ? (
        <HandleSignIn
          title={translate("myActivity.title")}
          icon="bigDocument"
          message={translate("myActivity.loginMessage")}
        />
      ) : (
        <View style={styles.rootScreen}>
          <Header
            title={translate("myActivity.title")}
            style={{height: getHeight(120), paddingTop: Spacing.S20}}
          />
          <TabsView
            data={tabs}
            buttonStyle={{height: getHeight(30), width: getWidth(80)}}
            onSelected={(index: number) => {
              console.log(index);
              setSelectedTab(index);
            }}
          />
          <View style={styles.container}>
            <ActivityList listItems={[1, 2, 3, 445, 9]} />
          </View>
        </View>
      )}

      <Button
        iconName="contactSupport"
        iconContainerStyle={{marginLeft: 0}}
        style={styles.supportButton}
        onPress={onOpenWarningModal}
        textStyle={{
          fontSize: "FS11",
          fontFamily: "NORMAL",
          color: "FONT_07101A",
        }}
        text={translate("myActivity.support")}
        iconStyle={{
          width: scale(30),
          height: scale(30),
        }}
      />

      <SupportModel
        forwardRef={supportModalRef}
        message={translate("myActivity.supportMessage")}
        onConfirmPress={handleSupportConfirmPress}
      />

      <SuccessModel
        forwardRef={successModalRef}
        onContinuePress={handleSuccessContinuePress}
      />
    </View>
  );
};

export default MyActivity;
