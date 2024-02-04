import {FlatList, ListRenderItem} from "react-native";
import React from "react";
import {BottomSheetModal} from "@gorhom/bottom-sheet";

import {ProfileRowCard} from "../../organisms";
import {profileRowType} from "../../../@types";
import {MainAppStackTypes} from "../../../navigation/navigation-types";
import {useNavigationHooks} from "../../../hooks";
import {LanguageModel} from "../../models";
import {Spacing} from "../../../styles";

type ProfileListProps = {
  listItems: profileRowType[];
};

const ProfileList: React.FC<ProfileListProps> = ({listItems}) => {
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const languageModalRef = React.useRef<BottomSheetModal>(null);

  const onLocationRowPressed = () => {};
  const onLanguageRowPressed = () => {
    console.log("Language Model");
    languageModalRef.current?.present();
  };
  const onLogoutRowPressed = () => {};

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
    </>
  );
};

export default ProfileList;
