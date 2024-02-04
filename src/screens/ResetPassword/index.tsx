import React from "react";
import {View} from "react-native";
import {Button, Header, Input} from "../../components";
import {Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";
import {TextProps} from "../../components/atoms/Text/Text";

const labelStyle: TextProps = {
  fontSize: "FS14",
  color: "BLUE_4A5970",
  fontFamily: "NORMAL",
};
const ResetPassword = () => {
  return (
    <View style={styles.rootScreen}>
      <Header
        title={"Reset Password"}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />
      <View style={styles.container}>
        <Input
          password
          label="Old Password*"
          labelStyle={labelStyle}
          placeholder="Enter Old Password"
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
        />

        <Input
          password
          label="New Password*"
          labelStyle={labelStyle}
          placeholder="Enter your New Password"
          style={styles.input}
          keyboardType="phone-pad"
          inputContainerStyle={styles.inputContainer}
        />
        <Button
          type="standard"
          text="Update your Password"
          style={styles.saveButton}
        />
      </View>
    </View>
  );
};

export default ResetPassword;
