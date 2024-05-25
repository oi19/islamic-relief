import {profileRowType} from "../../../@types";
import {translate} from "../../../helpers";
import {isRTL} from "../../../locals/i18n-config";

export function getProfileListWithoutLogin(
  location?: string,
  isLogin?: boolean,
) {
  // const profileListWithoutLogin: profileRowType[] = [
  //   {
  //     name: translate("Profile.location"),
  //     arrowWithHint: location,
  //     onPress: "location",
  //     icon: "reportIcon",
  //   },

  //   {
  //     name: translate("Profile.language"),
  //     arrowWithHint: isRTL() ? "Ar" : "En",
  //     onPress: "language",
  //     icon: "langIcon",
  //   },
  //   {
  //     name: translate("Profile.help"),
  //     arrowWithHint: false,
  //     navigateTo: "Help",
  //     icon: "about",
  //   },
  // ];

  const profileListWithLogin: profileRowType[] = [
    // profileListWithoutLogin[0],
    {
      name: "واتس اب",
      icon: "whatsApp",
      arrowWithHint: location,
      onPress: "PersonalInfo",
      navigateTo: "PersonalInfo",
      isShowArrow: true,
    },
    {
      name: "اتصل بنا",
      icon: "contactUs",
      navigateTo: "ChangePassword",
      onPress: "changePassword",
      isShowArrow: true,
    },
    {
      name: "شات",
      icon: "chatIcon",
      navigateTo: "ChangeMobileNumber",
      isShowArrow: true,
    },
    // profileListWithoutLogin[2],
  ];
  return profileListWithLogin;
}
