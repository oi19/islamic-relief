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
      name: "تقاريري السنوية",
      desc: "عرض التقارير السنوية",
      arrowWithHint: location,
      onPress: "location",
      icon: "reportIcon",
      isShowArrow: true,
    },
    {
      name: "إيصالاتي",
      desc: "التبرعات العامة",
      // renderRightElement: true,
      icon: "recieptIcon",
      onPress: "Notifications",
      navigateTo: "MyReciepts",
      isShowArrow: true,
    },
    {
      name: "التبرعات الدورية",
      desc: "يوميا اسبوعيا شهريا كل جمعة",
      navigateTo: "Favorites",
      icon: "regularFundsIcon",
      isShowArrow: true,
    },
    {
      name: "عن الإغاثة الاسلامية",
      desc: "تعرف على المزيد من المعلومات عن الاغاثة الاسلامية",
      arrowWithHint: false,
      navigateTo: "Help",
      icon: "about",
      isShowArrow: true,
    },

    {
      name: "لغة التطبيق",
      arrowWithHint: isRTL() ? "Ar" : "En",
      desc: isRTL() ? "العربية" : "En",
      onPress: "language",
      icon: "langIcon",
      isShowArrow: true,
    },

    // profileListWithoutLogin[1],
    {
      name: "قيم التطبيق",
      desc: "قيمنا في المتجر",
      // navigateTo: "ManageCards",
      icon: "rateIcon",
      onPress: "review",
      isShowArrow: true,
    },

    {
      name: "شارك التطبيق",
      desc: "كن دالا على الخير وعرف الناس بخدمتنا",
      navigateTo: "Points",
      icon: "shareIcon",
      isShowArrow: true,
    },
    // profileListWithoutLogin[2],

    {
      name: "خدمة العملاء",
      desc: "تواصل معنا عبر الواتس او الرد الالي",
      arrowWithHint: false,
      icon: "supportIcon",
      onPress: "logout",
      isShowArrow: true,
    },
    {
      name: translate("Profile.logout"),
      arrowWithHint: false,
      icon: "logoutIcon",
      onPress: "logout",
    },
  ];
  return profileListWithLogin;
}
