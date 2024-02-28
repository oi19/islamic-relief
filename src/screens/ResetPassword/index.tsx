import React from "react";
import {View} from "react-native";
import {Button, Header, Input} from "../../components";
import {Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";
import {TextProps} from "../../components/atoms/Text/Text";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ResetPasswordSchema} from "../../helpers/validationSchema";
import {convertObjToFormData, translate} from "../../helpers";
import {resetPassword} from "../../redux";
import {useLoader, useNavigationHooks} from "../../hooks";
import ErrorMessageModal from "../../components/models/ErrorMessageModal";
import {BottomSheetModal} from "@gorhom/bottom-sheet";

const labelStyle: TextProps = {
  fontSize: "FS14",
  color: "BLUE_4A5970",
  fontFamily: "NORMAL",
};
const ResetPassword = () => {
  const updatePasswordLoading = useLoader("resetPassword");
  const errorModalRef = React.useRef<BottomSheetModal>(null);
  const navigate = useNavigationHooks();
  const {
    handleSubmit,
    clearErrors,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver<any>(ResetPasswordSchema),
  });

  const onSubmit = (data: any) => {
    const _data = convertObjToFormData(data);
    console.log(_data);
    resetPassword(_data, res => {
      if (res.status === 200) {
        navigate.goBack();
      }
    });
  };

  const onChangeTextHandler = (fieldName: any, text: string) => {
    clearErrors(fieldName);
    setValue(fieldName, text);
  };

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
          onChangeText={text => onChangeTextHandler("old_password", text)}
          error={errors?.old_passwrod?.message?.toString()}
        />

        <Input
          password
          label="New Password*"
          labelStyle={labelStyle}
          placeholder="Enter your New Password"
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          onChangeText={text => onChangeTextHandler("password", text)}
          error={errors?.password?.message?.toString()}
        />
        <Button
          type="standard"
          text="Update your Password"
          style={styles.saveButton}
          onPress={handleSubmit(onSubmit)}
          isLoading={updatePasswordLoading}
        />
        <ErrorMessageModal forwardRef={errorModalRef} />
      </View>
    </View>
  );
};

export default ResetPassword;
