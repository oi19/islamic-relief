import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {HandleSignIn} from "../../components";
import {translate} from "../../helpers";
import {Colors, Spacing} from "../../styles";

const Notifications = () => {
  return (
    <View style={styles.rootScreen}>
      <HandleSignIn
        title={translate("Notifications.title")}
        icon="emptyNotification"
        message={translate("Notifications.notificationsLoginMessage")}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.GRAY_EEEEEE,
    paddingHorizontal: Spacing.S20,
    justifyContent: "center",
  },
});
