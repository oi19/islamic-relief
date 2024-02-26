import React from "react";
import {View} from "react-native";
import {
  Button,
  CitiesModal,
  Header,
  Line,
  PaginationFlatlist,
  Text,
  TextWithIcon,
} from "../../components";
import {useNavigationHooks} from "../../hooks";
import {MainNavigationAllScreensTypes} from "../../navigation/navigation-types";
import {styles} from "./styles";
import {translate} from "../../helpers";
import {getCities, useAppSelector} from "../../redux";
import {CityTypes} from "../../@types";

const ManuallyLocation: React.FC = () => {
  const {navigate, goBack} =
    useNavigationHooks<MainNavigationAllScreensTypes>();

  // const services = useAppSelector(ci);
  const cities = getCities();

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
