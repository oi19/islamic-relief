import React from "react";
import {View} from "react-native";
import {Button, Header, Line, Text, TextWithIcon} from "../../components";
import {useNavigationHooks} from "../../hooks";
import {MainNavigationAllScreensTypes} from "../../navigation/navigation-types";
import {styles} from "./styles";
import {translate} from "../../helpers";

const ManuallyLocation: React.FC = () => {
  const {navigate, goBack} =
    useNavigationHooks<MainNavigationAllScreensTypes>();

  return (
    <View style={styles.rootScreen}>
      <Header
        type="animatedHeader"
        title={translate("AllowLocation.enterLocationManually")}
        onReset={() => {}}
        onSearch={() => {}}
        onBack={() => goBack()}
      />
      {/* Main Screen Content */}
      <View style={styles.container}>
        <TextWithIcon
          type="large"
          icon="location"
          text={translate("AllowLocation.useCurrentLocation")}
          onPress={() => {}}
        />
        <Line style={styles.line} />
        <Text fontSize="FS14">Search Result</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type="standard"
          text={translate("Common.Continue")}
          onPress={() => navigate("TabsBottomStack")}
        />
      </View>
    </View>
  );
};

export default ManuallyLocation;
