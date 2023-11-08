/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {View} from "react-native";
import {
  Button,
  CheckBox,
  Input,
  Line,
  RoundedIcon,
  SuccessModel,
  Text,
  ViewRow,
} from "../../components";
import {useNavigationHooks} from "../../hooks";
import {
  MainAppStackTypes,
  MainNavigationAllScreensTypes,
} from "../../navigation/navigation-types";
import {Colors, Spacing} from "../../styles";
import {styles} from "./styles";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {RouteProp, useRoute} from "@react-navigation/native";

const Login = () => {
  const {
    params: {navigateTo},
  } = useRoute<RouteProp<MainAppStackTypes, "Login">>();
  const successModalRef = React.useRef<BottomSheetModal>(null);

  const {goBack, navigate} =
    useNavigationHooks<MainNavigationAllScreensTypes>();

  const onOpenSuccessModal = () => {
    successModalRef.current?.present();
  };

  const handleLoginPressed = () => {
    onOpenSuccessModal();
    // navigate("Login", {
    //   navigateTo: undefined,
    // });
  };

  return (
    <View style={styles.rootScreen}>
      <RoundedIcon
        size={35}
        style={styles.closeButton}
        icon="close"
        backgroundColor="PRIMARY"
        onPress={() => goBack()}
        iconStyle={{
          color: Colors.WHITE,
        }}
      />
      <View style={styles.content}>
        <Text fontFamily="MEDIUM" fontSize="H1">
          Create an account or log in
        </Text>
        <Input
          label="Phone"
          placeholder="+20 Mobile Number"
          style={styles.input}
          keyboardType="phone-pad"
          inputContainerStyle={styles.inputContainer}
        />
        <Input
          password
          label="Password"
          placeholder="Enter Your Password"
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
        />
        <ViewRow style={{justifyContent: "space-between"}}>
          <CheckBox text="Remember me" />
          <Button
            text="Forget Password"
            textStyle={{
              fontFamily: "NORMAL",
              fontSize: "FS13",
              color: "BLUE_4A5970",
            }}
          />
        </ViewRow>
        <View style={styles.buttonGroup}>
          <Button
            text="Login"
            type="standard"
            onPress={() => handleLoginPressed()}
            style={styles.button}
          />
          <Button text="Create Account" type="border" style={styles.button} />
        </View>
        <ViewRow style={{justifyContent: "space-between"}}>
          <Line style={styles.line} />
          <Text fontSize="FS14">Or Sign in with</Text>
          <Line style={styles.line} />
        </ViewRow>

        <ViewRow
          style={{justifyContent: "space-around", marginVertical: Spacing.S16}}>
          <Button
            iconName="google"
            iconContainerStyle={{marginLeft: 0}}
            style={styles.socialButton}
          />
          <Button
            iconName="facebook"
            iconContainerStyle={{marginLeft: 0}}
            style={styles.socialButton}
          />
          <Button
            iconName="apple"
            iconContainerStyle={{marginLeft: 0}}
            style={styles.socialButton}
          />
        </ViewRow>
        <Text fontSize="FS13" style={styles.hintText}>
          By Continuing, you agree to Doctors
          <Text fontSize="FS13" color="PRIMARY">
            {" "}
            Terms & Conditions
          </Text>
        </Text>
      </View>
      <SuccessModel
        forwardRef={successModalRef}
        message="Congratulations,Your account created successfully."
        onContinuePress={() => {
          if (navigateTo) {
            navigate("SelectPackage");
            successModalRef.current?.close();
          }
        }}
      />
    </View>
  );
};

export default Login;
