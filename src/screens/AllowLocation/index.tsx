import React from "react";
import {View} from "react-native";
import {Svgs} from "../../assets";
import {Button, Text} from "../../components";
import {useNavigationHooks} from "../../hooks";
import {MainNavigationAllScreensTypes} from "../../navigation/navigation-types";
import {getHeight, getWidth} from "../../styles/dimensions";
import {styles} from "./styles";
import {translate} from "../../helpers";

const AllowLocation = () => {
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();

  return (
    <View style={styles.rootScreen}>
      <View style={styles.locationIconContainer}>
        <Svgs name="location" width={getWidth(36)} height={getHeight(36)} />
      </View>
      <View style={styles.textContainer}>
        <Text
          color="FONT_07101A"
          fontSize="H1"
          fontFamily="BOLD"
          style={styles.baseText}>
          {translate("AllowLocation.whatIsYourLocation")}
        </Text>
        <Text
          color="FONT_07101A"
          fontFamily="NORMAL"
          fontSize="FS13"
          style={[styles.baseText, styles.subTitle]}>
          {translate("AllowLocation.allowLocationMessage")}
        </Text>
      </View>

      <View>
        <Button
          type="standard"
          text={translate("AllowLocation.allowLocationAccess")}
          style={styles.allowLocation}
        />

        <Button
          type="border"
          text={translate("AllowLocation.allowOnce")}
          onPress={() => navigate("ManuallyLocation")}
          textStyle={{color: "BLACK"}}
        />
        <Button
          type="default"
          text={translate("Common.skip")}
          onPress={() => navigate("TabsBottomStack")}
          textStyle={{color: "BLACK"}}
          style={styles.allowLocation}
        />
      </View>
    </View>
  );
};

export default AllowLocation;
