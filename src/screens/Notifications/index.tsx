import {useFocusEffect} from "@react-navigation/native";
import React from "react";
import {View} from "react-native";

import {Lottie} from "../../assets/lottie";
import {
  HandleEmptyList,
  HandleSignIn,
  Header,
  NotificationsList,
} from "../../components/molecules";
import {translate} from "../../helpers/language";
import {useLoader, useToken} from "../../hooks";
import {getNotifications, useAppSelector} from "../../redux/index";
import {getHeight} from "../../styles/dimensions";
import {Spacing} from "../../styles/index";
import {styles} from "./styles";

const Notifications = () => {
  const {notifications} = useAppSelector(state => state.notificationReducer);
  const notificationsLoader = useLoader("notifications");
  const isLoggin = useToken();

  useFocusEffect(
    React.useCallback(() => {
      getNotifications();
    }, []),
  );

  const renderNotificationsView = () => {
    return (
      <>
        <Header
          title={translate("Notifications.title")}
          style={{height: getHeight(130), paddingTop: Spacing.S20}}
        />
        <NotificationsList notifications={notifications} />
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

  if (!isLoggin) {
    return (
      <HandleSignIn
        title={translate("Notifications.title")}
        icon="emptyNotification"
        message={translate("myActivity.loginMessage")}
      />
    );
  }

  if (notificationsLoader) {
    return renderLoaderNotifications();
  }

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

export default Notifications;
