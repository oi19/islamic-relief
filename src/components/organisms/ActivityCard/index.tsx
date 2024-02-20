import React from "react";
import {View} from "react-native";
import {doctors} from "../../../dummyData";
import {Colors, Spacing} from "../../../styles";
import {getHeight, getWidth} from "../../../styles/dimensions";
import {Button, Card, RoundedIcon, ViewRow} from "../../atoms";
import {TextWithIcon} from "../../molecules";
import {styles} from "./styles";
import {translate} from "../../../helpers";
import {RenderDoctorCard} from "../../../screens/DoctorProfile";
import {ConfirmModal} from "../../models";
import {BottomSheetModal} from "@gorhom/bottom-sheet";

type ActivityCardProps = {
  item: any;
  index?: number;
};
const ActivityCard: React.FC<ActivityCardProps> = ({item, index}) => {
  const confirmModalRef = React.useRef<BottomSheetModal>(null);
  const isBooked: boolean = false;
  const renderDoctorCard = () => {
    return (
      <View>
        <RenderDoctorCard item={doctors[0]} />
        <RoundedIcon
          size={22}
          style={styles.statusIcon}
          iconStyle={{
            width: getWidth(12),
            height: getHeight(12),
          }}
          backgroundColor="GRAY_F9F9F9"
          icon="home"
        />
      </View>
    );
  };

  const onOpenConfirmModal = () => {
    confirmModalRef.current?.present();
  };

  const onConfirm = () => {
    confirmModalRef.current?.close();
    console.log("confirm pressed");
    console.log("cancel this appointment :" + item?.id + "isConfirmed");
  };

  const onReschadulePress = () => {
    console.log("onReschadulePress ");
  };
  const onBookAgainPress = () => {
    console.log("onBookAgainPress ");
  };
  return (
    <Card style={styles.card}>
      <View style={styles.cardHeader} />
      <View style={styles.cardContainer}>
        {/* render Doctor Card */}
        {renderDoctorCard()}
        <TextWithIcon
          icon="clock"
          iconStyle={{color: Colors.PRIMARY}}
          text="45 mins | October 1/2023 | 6:00 PM - 6:45 PM"
          style={{marginHorizontal: Spacing.S8}}
        />

        <TextWithIcon
          icon="wallet"
          text="Credit Card"
          style={{marginHorizontal: Spacing.S8}}
        />

        <ViewRow style={[styles.rowContainer, {marginVertical: Spacing.S11}]}>
          {true ? (
            <>
              <Button
                style={styles.baseButton}
                type="standard"
                text={translate("Common.reschedule")}
                onPress={onReschadulePress}
              />
              <Button
                style={styles.baseButton}
                type="border"
                text={translate("Common.cancel")}
                onPress={onOpenConfirmModal}
              />
            </>
          ) : (
            <Button
              style={styles.baseButton}
              type="standard"
              text={translate("Common.bookAgain")}
              onPress={() => onBookAgainPress()}
            />
          )}
        </ViewRow>
      </View>
      <ConfirmModal
        message={translate("Model.appointmentCancelMessage")}
        forwardRef={confirmModalRef}
        onConfirm={onConfirm}
      />
    </Card>
  );
};

export default ActivityCard;
