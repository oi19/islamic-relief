import {useFocusEffect} from "@react-navigation/native";
import React, {useMemo} from "react";
import {View} from "react-native";

import {styles} from "./styles";

import {
  HandleEmptyList,
  Header,
  NotificationsList,
} from "../../components/molecules";
import {translate} from "../../helpers/language";
import {getHeight} from "../../styles/dimensions";
import {Spacing} from "../../styles/index";
import {Lottie} from "../../assets/lottie";

import {Tab} from "../../@types";
import {useAppSelector} from "../../redux";

const Points = () => {
  const {notifications} = useAppSelector(state => state.notificationReducer);
  // const notificationsLoader = useLoader("notifications");

  const tabs: Tab[] = useMemo(
    () => [
      {
        title: translate("Points.transactions"),
      },
      {
        title: translate("Points.pointsEarned"),
      },
      {
        title: translate("Points.pointsSpent"),
      },
    ],
    [],
  );

  useFocusEffect(
    React.useCallback(() => {
      // getNotifications();
    }, []),
  );

  const renderNotificationsView = () => {
    return (
      <>
        <Header
          title={translate("Notifications.title")}
          style={{height: getHeight(130), paddingTop: Spacing.S20}}
        />
        <NotificationsList notifications={[]} />
      </>
    );
  };

  const renderLoaderNotifications = () => {
    return (
      <View style={styles.rootScreen}>
        <Header
          title={translate("Notifications.title")}
          style={{height: getHeight(130), paddingTop: Spacing.S20}}
        />
        <View style={styles.center}>
          <Lottie name="loading" />
        </View>
      </View>
    );
  };

  // if (notificationsLoader) {
  //   return renderLoaderNotifications();
  // }

  return (
    <View style={styles.rootScreen}>
      {notifications.length > 0 ? (
        renderNotificationsView()
      ) : (
        <HandleEmptyList
          title={translate("Notifications.title")}
          icon="emptyNotification"
          message={translate("Notifications.emptyMessage")}
        />
      )}
    </View>
  );
};

export default Points;
