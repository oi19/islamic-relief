import {StyleSheet} from "react-native";
import {Colors, Spacing, Typography} from "../../../../styles";
import {getHeight, getWidth, scale} from "../../../../styles/dimensions";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: Spacing.S16,
  },

  disableClicks: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: Colors.TRANSPARENT,
  },
  headerStyle: {
    height: getHeight(120),
    paddingTop: Spacing.S20,
  },
  otpContainer: {
    width: "100%",
    justifyContent: "space-between",
  },
  inputContainer:{
    borderColor:Colors.GRAY_CBCBCB,
    borderWidth: 1,
    width: getWidth(70),
    height: 60,
    marginVertical: Spacing.S8,
    padding:Spacing.S8,
    textAlign: "center",
    borderRadius: Spacing.S16,
    backgroundColor: Colors.INPUT_BACKGROUND,

  },
  input: {
  textAlign: "center",
    color: Colors.PRIMARY,
    fontFamily: Typography.BOLD,
    fontSize: Typography.FS24

  },
  inputFocused: {
    borderColor: Colors.PRIMARY,
  },
 
    scrollViewContainerStyle:
    {
        flexGrow: 1,
        justifyContent: 'center',
    },
    entryInstructionStyle: {
        fontSize: 16,
        // color: theme.color.fieldLabelColor,
        // fontFamily: theme.font.getFontForLang(lang).mediumFont,
        textAlign: 'left',
        marginTop: 30
    },
    headerTitleContainerStyle: {
        marginTop: 38,
        marginHorizontal: 16,

    },
    ButtonContainer: {
        left: 0,
        right: 0,
        bottom: 35,
        height: 71,
        // shadowColor: theme.color.buttonShadowColor,
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 12,
        shadowOpacity: 20,
        marginHorizontal: 16
    },
    resendCodeContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    resendCodeButtonContainer: {
        marginTop: 8
    },


    otpCode: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },

    resendCodeText: {
        fontSize: 16,
        textAlign: "center",
        // color: theme.color.commonInputFieldBorderFocusColor,
        // fontFamily: theme.font.getFontForLang(lang).mediumFont,
    },
    resendCodeTextWithError: {
        fontSize: 16,
        textAlign: "center",
        // color: theme.color.commonInputFieldLabelColor,
        // fontFamily: theme.font.getFontForLang(lang).mediumFont,
    },
    resendCodeInText: {
        fontSize: 16,
        textAlign: "center",
        // color: theme.color.fieldLabelColor,
        // fontFamily: theme.font.getFontForLang(lang).mediumFont,
    },
    resendCodeNumber: {
        marginHorizontal: 8,
        fontSize: 16,
        textAlign: "center",
        // color: theme.color.commonInputFieldBorderFocusColor,
        // fontFamily: theme.font.getFontForLang(lang).mediumFont,
    },
    codeInputStyle: {
        borderWidth: 1,
        borderRadius: 8,
        height: 60,
        width: getWidth(70),
        fontSize: 20,
        textAlign: "center",
        color: Colors.PRIMARY,
        backgroundColor: Colors.INPUT_BACKGROUND,
        borderColor: Colors.INPUT_BORDER,
        fontFamily: Typography.BOLD,
        overflow: "hidden",
        paddingTop: 3,
    },
    codeInputErrorStyle: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "red",
        backgroundColor: "red",
        color: "red",
        height: 44,
        width: 44,
        fontSize: 20,
        textAlign: "center",
        fontFamily: Typography.BOLD,
        overflow: "hidden",
        paddingTop: 3,

    },
    otpDirectionStyle: {
        flexDirection: "row-reverse"
    },
    codeFieldContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: "row-reverse",

    },
    mobileNumberStyle: {
        fontSize: 16,
        fontFamily: Typography.MEDIUM,
        color: Colors.INPUT_BACKGROUND,

    },
    warningMessageContainerStyle: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    warningMessage: {
        marginTop: 10,
        color: "red",
        textAlign: 'center'
    }
});
