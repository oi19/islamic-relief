import React, {FC, memo} from "react";
import {View, ViewProps} from "react-native";
import {useNavigationHooks} from "../../../../hooks";
import {
  MainNavigationAllScreensTypes,
  MainNavigationKeys,
} from "../../../../navigation/navigation-types";
import Text from "../Text/Text";
import Button from "../Button/Button";
import {TextProps} from "../Text/Text";
import styles from "./styles";
import {translate} from "../../../../helpers";

const HeaderSection: FC<
  ViewProps & {
    title?: string;
    navigateTo?: MainNavigationKeys | null;
    params?: any;
    textStyle?: TextProps;
  }
> = memo(({title, navigateTo, style, params, textStyle}) => {
  const {navigate} = useNavigationHooks<MainNavigationAllScreensTypes>();
  return (
    <View style={[styles.headerSection, style]}>
      {/* title */}
      <Text
        fontSize="FS18"
        color="FONT_07101A"
        fontFamily="MEDIUM"
        {...textStyle}>
        {title}
      </Text>
      {navigateTo && (
        <Button
          onPress={() => {
            if (navigateTo) {
              navigate(navigateTo, params);
            }
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          textStyle={{
            color: "PRIMARY",
            fontFamily: "NORMAL",
            fontSize: "FS14",
          }}
          textContainerStyle={styles.viewAllButton}
          text={translate("Common.seeAll") || undefined}
        />
      )}
    </View>
  );
});

export default memo(HeaderSection);
