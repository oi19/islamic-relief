import messaging, {
  FirebaseMessagingTypes,
} from "@react-native-firebase/messaging";
import notifee, {AndroidImportance} from "@notifee/react-native";
import {PermissionsAndroid} from "react-native";
import {isAndroid, isIos} from "../helpers/utils";
import {useDispatch} from "../redux/index";
import {useNavigationHooks} from "./navigation-hooks";

type RemoteMessage = FirebaseMessagingTypes.RemoteMessage;

const requestUserPermission = async () => {
  if (isIos) {
    // Request iOS permission
    const authorizationStatus = await messaging().requestPermission();

    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      console.log("User has notification permissions enabled.");
    } else if (
      authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
    ) {
      console.log("User has provisional notification permissions.");
    } else {
      console.log("User has notification permissions disabled");
    }
  } else if (isAndroid) {
    // Request Android permission (For API level 33+, for 32 or below is not required)
    const res = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    )
      .then(response => response)
      .catch(err => console.log(err));
  }
};
const usePushNotification = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigationHooks();

  const onNotifeeMessageReceived = async (message: RemoteMessage) => {
    const channelId = await notifee.createChannel({
      id: "default",
      name: "Default Channel",
      importance: AndroidImportance.HIGH,
    });

    notifee.displayNotification({
      id: message.messageId || "",
      title: message.notification?.title || "",
      body: message.notification?.body || "",
      data: message.data,
      android: {
        smallIcon: "ic_launcher", // optional, defaults to 'ic_launcher'.
        importance: AndroidImportance.HIGH,
        channelId,
        pressAction: {
          id: "default",
        },
      },
    });
  };

  const getFCMToken = async (): Promise<string | null> => {
    if (isIos) {
      console.log("APNS Token:", await messaging().getAPNSToken());
    }
    const fcmToken = await messaging().getToken();

    if (fcmToken) {
      console.log("Your Firebase Token is:", fcmToken);
      return fcmToken;
    }
    console.log("Failed", "No token received");
    return null;
  };

  const listenToForegroundNotifications = async () => {
    const unsubscribe = messaging().onMessage(async (remoteMessage: any) => {
      console.log(
        "A new message arrived! (FOREGROUND)",
        JSON.stringify(remoteMessage),
      );
      // playSound('notification.mp3');
      onNotifeeMessageReceived(remoteMessage);

      // if (remoteMessage.data.type === 'new-message') {
      //   dispatch(activeChat(true));
      // } else if (remoteMessage.data.type === 'add-coins') {
      //   dispatch(
      //     addCoins({
      //       coins: remoteMessage.data.coins ? Number(remoteMessage.data.coins) : 0,
      //       points: remoteMessage.data.points ? Number(remoteMessage.data.points) : 0,
      //     }),
      //   );
      // } else {
      //   dispatch(addNotification(remoteMessage?.data));
      // }
    });
    return unsubscribe;
  };

  const listenToBackgroundNotifications = async () => {
    const unsubscribe = messaging().setBackgroundMessageHandler(
      async (remoteMessage: any) => {
        console.log(
          "A new message arrived! (BACKGROUND)",
          JSON.stringify(remoteMessage),
        );
      },
    );
    return unsubscribe;
  };

  const onNotificationOpenedAppFromBackground = async () => {
    const unsubscribe = messaging().onNotificationOpenedApp(
      async (remoteMessage: any) => {
        console.log(
          "App opened from BACKGROUND by tapping notification:",
          JSON.stringify(remoteMessage),
        );
        //   navigation.navigate("Notifications");
      },
    );
    return unsubscribe;
  };

  const onNotificationOpenedAppFromQuit = async () => {
    const message = await messaging().getInitialNotification();

    if (message) {
      console.log(
        "App opened from QUIT by tapping notification:",
        JSON.stringify(message),
      );
      // if (message.data.type === "new-message") {
      //   navigation.navigate(
      //     "PrivetChat",
      //     JSON.parse(message?.data?.user || "{}"),
      //   );
      //   return;
      // }
      // if (message.data.type === "add-coins") {
      //   navigation.navigate("Wallet");
      //   return;
      // }
      // navigation.navigate("Notifications");
    }
  };

  return {
    requestUserPermission,
    getFCMToken,
    listenToForegroundNotifications,
    listenToBackgroundNotifications,
    onNotificationOpenedAppFromBackground,
    onNotificationOpenedAppFromQuit,
  };
};

export {usePushNotification, requestUserPermission};
