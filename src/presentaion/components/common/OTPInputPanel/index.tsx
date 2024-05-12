import React, { useEffect, useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, ScrollView, StatusBar, Platform, BackHandler, DeviceEventEmitter, Keyboard } from 'react-native';
import { useSelector } from 'react-redux';
import { AsyncStorageKeys } from '../../../../helpers';
import {styles} from './styles';
import { useNavigation } from '@react-navigation/native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell, } from 'react-native-confirmation-code-field';
import BlurProgressView from '../../common/blur-activity-indicator/BlurProgressView';
// import { setRegistrationAccessToken } from '../../../application/redux/actions/registrationDataAction';
import { useDispatch } from 'react-redux';
// import { resetVerificationFlowToken } from '../../../application/redux/actions/verificationTokenActions';
// import { clearStackHistory } from '../../../navigation/rootNavigator';
import AsyncStorage from '@react-native-community/async-storage';
// import { setCurrentUser } from '../../../application/redux/actions/userActions';
import { resetCredentials } from '../../../../services/keychain';
import { changeNumberLanguage } from '../../../../helpers';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface OTPProps {
  length: number;
  onOTPSubmit: (otp: string) => void;
  isLoading: boolean;
}

const OTPInputPanel: React.FC<OTPProps> = ({
  length = 4,
  onOTPSubmit,
  isLoading,})=>{
    let navigation = useNavigation()
    let dispatch = useDispatch()
    // const { completionHandler, navigationHandler, resendHandler, tokenHandler, phoneNumber } = route.params
    const [otpValue, setOTPValue] = useState<string>('');
    const ref = useBlurOnFulfill({ value: otpValue, cellCount: 4 });
    const [inputprops, getCellOnLayoutHandler] = useClearByFocusCell({
        value: otpValue,
        setValue: setOTPValue,
    });
 

    // const suspendedUserHanlder = async () => {
    //     DeviceEventEmitter.emit(EVENTS.LOGOUT)
    //     await AsyncStorage.removeItem(AsyncStorageKeys.USER_KEY);
    //     await resetCredentials();
    //     // dispatch(setCurrentUser(null))
    // }

    const handleChangeText = (text: string) => {
            setOTPValue(changeNumberLanguage(text, "en"))
    }

    const validateOtpCode = (code: string) => {
        if (code.length > 3) {
          Keyboard.dismiss()
          onOTPSubmit(code)
        }
    }

    useEffect(() => {
        validateOtpCode(otpValue)
    }, [otpValue])

    return (

           
           
                    <View style={[styles.otpCode,styles.otpDirectionStyle ]}>
                        <CodeField
                            ref={ref}
                            {...inputprops}
                            caretHidden={false}
                            value={changeNumberLanguage(otpValue, "en")}
                            onChangeText={handleChangeText}
                            autoFocus={true}
                            cellCount={4}
                            rootStyle={styles.codeFieldContainer}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                             <View style={[styles.inputContainer]}>

<Text
                                    key={index}
                                    style={[styles.input]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : '-')}
                                </Text> 

                             </View>
                              

                            )}
                        />
                     </View>
                   
               
    );
}
export default OTPInputPanel;
