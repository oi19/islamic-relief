import React, {useState} from "react";
import {View, ViewStyle} from "react-native";

import {styles} from "./styles";
import {
  AppointmentStatus,
  AppointmentsTypes,
  ChatType,
  ServicesIcon,
  ServicesTypesEnums,
} from "../../../@types";
import {useNavigationHooks} from "../../../hooks";
import {
  changeAppointmentStatus,
  getValueFromICreatedObj,
  updateAppointment,
  useDispatch,
} from "../../../redux";
import {
  addMinutesToTime,
  convertTo12HourFormat,
  formattedTime,
  translate,
} from "../../../helpers";
import {Colors, Spacing} from "../../../styles";
import {Button, Card, Image, RoundedIcon, Text, ViewRow} from "../../atoms";
import {getHeight, getWidth} from "../../../styles/dimensions";
import {TextWithIcon} from "../../molecules";
import {Images} from "../../../assets/images";
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";
import {TextProps} from "../../atoms/Text/Text";

const TextStyle: TextProps = {
  fontFamily: "MEDIUM",
  color: "BLUE_4A5970",
  fontSize: "FS16",
};

type RenderCardWithStatusProps = {
  color: string;
  onPress?: () => void;
  buttonName?: string;
};

type AppointmentCardProps = {
  item: AppointmentsTypes;
  index?: number;
  style?: ViewStyle;
  header?: boolean;
  disabled?: boolean;
};

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  item,
  index,
  style,
  header,
  disabled,
}) => {
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState({
    id: null as number | null,
    type: null as "confirm" | "reject" | null,
  });

  const from = formattedTime(item?.from);
  const to = formattedTime(item?.to);

  const handleChangeStatusPress = (status: AppointmentStatus) => {
    const loaderStatus =
      status === AppointmentStatus.Confirmed ? "confirm" : "reject";

    setLoading({id: item?.id, type: loaderStatus});

    changeAppointmentStatus(item.id, {status}, res => {
      if (res.status === 200) {
        dispatch(updateAppointment({status, index}));
      }
    }).finally(() => {
      setLoading({id: null, type: null});
    });
  };

  const renderCardWithStatus = (
    status: AppointmentStatus,
  ): RenderCardWithStatusProps | null => {
    switch (status) {
      case AppointmentStatus.Pending:
        return {
          color: Colors.PRIMARY2,
          buttonName: translate("Common.waiting"),
          // onPress: () => handleChangeStatusPress(AppointmentStatus.Confirmed),
          // onPress: () => handleReschedulePress(),
        };

      case AppointmentStatus.Confirmed:
        return {
          color: Colors.PRIMARY,
          buttonName: translate("myAppointment.accepted"),
          // onPress: () => handleReschedulePress(),
        };

      case AppointmentStatus.Done:
        return {
          color: Colors.GREEN,
          buttonName: translate("myAppointment.completed"),
        };

      case AppointmentStatus.Rejected:
        return {
          color: Colors.RED,
          buttonName: translate("Common.rejected"),
        };

      case AppointmentStatus.Cancelled:
        return {
          color: Colors.GRAY_EEEEEE,
          buttonName: translate("myAppointment.cancelled"),
        };
      default:
        return null;
    }
  };

  const cardItem = renderCardWithStatus(item?.status);

  const isPending = item?.status === AppointmentStatus.Pending;
  const isDone = item?.status === AppointmentStatus.Done;
  const isConfirmed = item?.status === AppointmentStatus.Confirmed;
  const isRejectedOrCancelled =
    item?.status === AppointmentStatus.Rejected || AppointmentStatus.Cancelled;

  const handleChatPress = () => {
    const chatData: ChatType = {
      id: item?.doctor_id,
      name: item?.doctor_name,
    };
    navigate("ChatRoom", {
      chatData,
    });
  };

  const handleVideoPress = () => {
    if (item?.zoom_url) {
      navigate("ZoomRoom", {zoomUrl: item?.zoom_url});
    }
  };

  return (
    <Card
      style={[styles.card, style]}
      disabled={disabled}
      onPress={() => navigate("AppointmentDetails", {appointmentId: item.id})}>
      {header && (
        <View
          style={[
            styles.cardHeader,
            {
              backgroundColor: cardItem?.color,
            },
          ]}
        />
      )}

      <View style={styles.cardContainer}>
        <ViewRow style={styles.userCardContainer}>
          <View>
            <RenderUserCard item={item} />
            <RoundedIcon
              size={22}
              style={styles.statusIcon}
              iconStyle={{
                width: getWidth(12),
                height: getHeight(12),
                color: Colors.PRIMARY,
              }}
              backgroundColor="GRAY_F9F9F9"
              icon={ServicesIcon[item?.service]}
            />
          </View>
          {(!isPending || !isRejectedOrCancelled) && (
            <View style={styles.actionsButton}>
              <Button
                iconName="chat"
                iconStyle={styles.iconStyle}
                iconContainerStyle={styles.iconContainerStyle}
                style={styles.notifications}
                onPress={handleChatPress}
              />

              {item?.service === ServicesTypesEnums.VideoCall && !isDone && (
                <Button
                  iconName="video"
                  iconContainerStyle={styles.iconContainerStyle}
                  style={styles.notifications}
                  onPress={handleVideoPress}
                />
              )}
            </View>
          )}
        </ViewRow>

        <TextWithIcon
          icon="clock"
          iconStyle={{color: Colors.PRIMARY}}
          text={`${45} ${translate("Common.min")} | ${
            item?.date
          } | ${convertTo12HourFormat(from)} - ${convertTo12HourFormat(
            addMinutesToTime(to, 45),
          )}`}
          style={{marginHorizontal: Spacing.S8}}
        />

        <TextWithIcon
          icon="wallet"
          text={item?.payment_method || translate("Common.wallet")}
          style={{marginHorizontal: Spacing.S8}}
        />

        {isPending || isConfirmed ? (
          <ViewRow style={[styles.rowContainer, {marginVertical: Spacing.S11}]}>
            <Button
              style={styles.baseButton}
              isLoading={
                isLoading.id === item.id && isLoading.type === "confirm"
              }
              type="standard"
              text={cardItem?.buttonName}
              textStyle={{fontSize: "FS14"}}
              onPress={() => cardItem?.onPress?.()}
            />
            <Button
              style={styles.baseButton}
              type="border"
              isLoading={
                isLoading.id === item.id && isLoading.type === "reject"
              }
              textStyle={{fontSize: "FS14"}}
              text={translate("Common.cancel")}
              onPress={() =>
                handleChangeStatusPress(AppointmentStatus.Rejected)
              }
            />
          </ViewRow>
        ) : (
          <View style={{width: "100%"}}>
            <Button
              style={styles.showButton}
              text={cardItem?.buttonName}
              textStyle={TextStyle}
            />
          </View>
        )}
      </View>
    </Card>
  );
};

type RenderUserCardProps = {
  item?: AppointmentsTypes;
};

export const RenderUserCard: React.FC<RenderUserCardProps> = ({item}) => (
  <ViewRow>
    <Image
      source={item?.doctor_image ? {uri: item?.doctor_image} : Images.default}
      style={styles.image}
    />

    <View
      style={{
        marginHorizontal: Spacing.S8,
      }}>
      <Text fontSize="FS16" fontFamily="MEDIUM">
        {item?.doctor_name || item?.doctor?.name}
      </Text>
      {/* {item?.user?.gender === 0 ? "Male" : "Female"} */}
      <Text color="GRAY_A7A7A7" fontSize="FS14">
        {item?.specialty_name ||
          getValueFromICreatedObj(item?.doctor?.specialty_id, "specialties")}
      </Text>
    </View>
  </ViewRow>
);

export default React.memo(AppointmentCard);
