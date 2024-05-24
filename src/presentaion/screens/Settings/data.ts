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
      name: "معلومات شخصية",
      desc: "اسم الصورة الشخصية",
      arrowWithHint: location,
      onPress: "PersonalInfo",
      navigateTo: "PersonalInfo",
      isShowArrow: true,
    },
    {
      name: "تغيير كلمة المرور",
      desc: "اختر كلمة مرور لحماية حسابك",
      // renderRightElement: true,
      onPress: "Notifications",
      isShowArrow: true,
    },
    {
      name: "غير رقم الهاتف",
      navigateTo: "Favorites",
      isShowArrow: true,
    },
    {
      name: "تغيير البريد الإلكتروني",
      desc: "التبرعات العامة صدقة كفارات",
      arrowWithHint: false,
      navigateTo: "Help",
      isShowArrow: true,
    },

    {
      name: "لغة التطبيق",
      arrowWithHint: isRTL() ? "Ar" : "En",
      desc: isRTL() ? "العربية" : "En",
      onPress: "language",
      isShowArrow: true,
    },

    // profileListWithoutLogin[1],
    {
      name: "بطاقة ائتمان",
      desc: "أضف بطاقة ائتمان",
      navigateTo: "ManageCards",
      isShowArrow: true,
    },

    {
      name: "حذف الحساب",
      desc: "سوف يتم حذف الحساب نهائيا",
      navigateTo: "Points",
      isShowArrow: true,
      isArrowRed: true,
    },
    // profileListWithoutLogin[2],
  ];
  return profileListWithLogin;
}
