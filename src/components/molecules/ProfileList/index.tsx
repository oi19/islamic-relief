import {FlatList, ListRenderItem} from "react-native";
import React from "react";
import {BottomSheetModal} from "@gorhom/bottom-sheet";

import {ProfileRowCard} from "../../organisms";
import {CityType, profileRowType} from "../../../@types";
import {MainAppStackTypes} from "../../../navigation/navigation-types";
import {useLoader, useNavigationHooks} from "../../../hooks";
import {CitiesModal, ConfirmModal, LanguageModel} from "../../models";
import {Spacing} from "../../../styles";
import {logout, userLogout} from "../../../redux";
import {translate} from "../../../helpers";

type ProfileListProps = {
  listItems: profileRowType[];
  selectedCity?: CityType;
  onSelectedCity: (selectedCity: CityType) => void;
};

const ProfileList: React.FC<ProfileListProps> = ({
  listItems,
  selectedCity,
  onSelectedCity,
}) => {
  const {navigate, goBack} = useNavigationHooks<MainAppStackTypes>();
  const languageModalRef = React.useRef<BottomSheetModal>(null);
  const citiesModalRef = React.useRef<BottomSheetModal>(null);
  const logoutModalRef = React.useRef<BottomSheetModal>(null);

  const logoutLoading = useLoader("logout");

  const onLocationRowPressed = () => {
    citiesModalRef.current?.present();
  };
  const onLanguageRowPressed = () => {
    languageModalRef.current?.present();
  };
  const onLogoutRowPressed = () => {
    logoutModalRef.current?.present();
  };

  const handleOnRowPressed = (item: profileRowType) => {
    const itemPressedOrNavigate = item?.navigateTo;

    if (itemPressedOrNavigate) {
      navigate(item.navigateTo);
      return;
    }

    switch (item?.onPress) {
      case "location":
        onLocationRowPressed();
        break;
      case "language":
        onLanguageRowPressed();
        break;
      case "logout":
        onLogoutRowPressed();
        break;
      default:
        console.log("Will Add This Action Soon");
        break;
    }
  };

  const _renderProfileItem: ListRenderItem<profileRowType> = ({
    item,
    index,
  }) => {
    return (
      <ProfileRowCard
        item={item}
        index={index}
        handleOnRowPressed={() => handleOnRowPressed(item)}
      />
    );
  };
  return (
    <>
      <FlatList
        data={listItems}
        renderItem={_renderProfileItem}
        contentContainerStyle={{
          paddingBottom: Spacing.S40 * 3.5,
        }}
        keyExtractor={(_, index) => `profile-row-item${index}`}
        showsVerticalScrollIndicator={false}
      />
      <LanguageModel forwardRef={languageModalRef} />
      <CitiesModal
        forwardRef={citiesModalRef}
        onSelect={onSelectedCity}
        selectedId={selectedCity?.id?.toString()}
      />
      <ConfirmModal
        forwardRef={logoutModalRef}
        onConfirm={() => {
          userLogout(res => {
            if (res.status === 200) {
              setTimeout(() => {
                logoutModalRef.current?.close();
              }, 10);
              goBack();
            }
          });
        }}
        title={translate("Profile.logout")}
        isLoading={logoutLoading}
        confirmText={translate("Profile.logout")}
        message={translate("Model.logoutMessage")}
      />
    </>
  );
};

export default ProfileList;
