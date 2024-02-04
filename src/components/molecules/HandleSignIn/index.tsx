import React from "react";
import {View} from "react-native";
import {Svgs} from "../../../assets";
import {IconsName} from "../../../assets/svgs";
import {useNavigationHooks} from "../../../hooks";
import {MainNavigationAllScreensTypes} from "../../../navigation/navigation-types";
import {Button, Text} from "../../atoms";
import {styles} from "./styles";
import {translate} from "../../../helpers";

type HandleSignInProps = {
  icon: IconsName;
  title?: string;
  message?: string;
};
const HandleSignIn: React.FC<HandleSignInProps> = ({icon, title, message}) => {
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();
  return (
    <View style={styles.root}>
      <Text fontFamily="BOLD" fontSize="H1">
        {title}
      </Text>
      <View style={styles.content}>
        <Svgs name={icon} />
        <Text fontSize="FS14" style={styles.message}>
          {message}
        </Text>
        <Button
          text={translate("Common.loginOrSignup")}
          type="standard"
          onPress={() =>
            navigate("Login", {
              navigateTo: undefined,
            })
          }
        />
      </View>
    </View>
  );
};

export default HandleSignIn;
