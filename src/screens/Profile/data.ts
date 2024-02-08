import {profileRowType} from "../../@types";
import {translate} from "../../helpers";
import {isRTL} from "../../locals/i18n-config";

export function getProfileListWithoutLogin(
  location?: string,
  isLogin?: boolean,
) {
  const profileListWithoutLogin: profileRowType[] = [
    {
      name: translate("Profile.location"),
      arrowWithHint: location,
      onPress: "location",
    },

    {
      name: translate("Profile.language"),
      arrowWithHint: isRTL() ? "Ar" : "En",
      onPress: "language",
    },
    {
      name: translate("Profile.help"),
      arrowWithHint: false,
      navigateTo: "Help",
    },
  ];

  const profileListWithLogin: profileRowType[] = [
    profileListWithoutLogin[0],
    {
      name: translate("Profile.notifications"),
      renderRightElement: true,
      onPress: "Notifications",
    },
    profileListWithoutLogin[1],
    {
      name: translate("Profile.manageCards"),
      navigateTo: "ManageCards",
    },
    {
      name: translate("Profile.favorites"),
      navigateTo: "Favorites",
    },
    {
      name: translate("Profile.yourPoints"),
      navigateTo: "YourPoints",
    },
    profileListWithoutLogin[2],
    {
      name: translate("Profile.logout"),
      arrowWithHint: false,
      icon: "logout",
      onPress: "logout",
    },
  ];
  return isLogin ? profileListWithLogin : profileListWithoutLogin;
}
