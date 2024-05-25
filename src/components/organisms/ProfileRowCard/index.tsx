import React from "react";
import {View, ViewStyle} from "react-native";

import {profileRowType} from "../../../@types";
import {Svgs} from "../../../assets";
import {isRTL} from "../../../locals/i18n-config";
import {Colors, Spacing} from "../../../styles";
import {getHeight, scale} from "../../../styles/dimensions";
import {Card, Switch, Text, ViewRow} from "../../atoms";
import {styles} from "./styles";

type ProfileRowCardProps = {
  item: profileRowType;
  index?: number;
  style?: ViewStyle;
  handleOnRowPressed: () => void;
  onToggleHandler?: () => void;
  isToggle?: boolean;
  isSupport: boolean;
};

const ProfileRowCard: React.FC<ProfileRowCardProps> = ({
  item,
  style,
  isToggle,
  handleOnRowPressed,
  onToggleHandler,
  isSupport = false,
}) => {
  return (
    <Card
      onPress={handleOnRowPressed}
      disabled={item.renderRightElement}
      style={[
        styles.card,
        {
          paddingHorizontal: isSupport ? Spacing.S8 : Spacing.S16,
          backgroundColor: item?.renderRightElement
            ? Colors.TRANSPARENT
            : Colors.WHITE,
        },
        style,
      ]}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        {item?.icon && (
          <View
            style={{
              marginEnd: Spacing.S16,
              marginTop: isSupport == true ? getHeight(6) : 0,
            }}>
            <Svgs name={item?.icon} />
          </View>
        )}
        <View>
          <Text color="BLACK" fontSize="FS14" fontFamily="MEDIUM">
            {item?.name}
          </Text>
          {item?.desc ? (
            <Text color="INPUT_TEXT" fontSize="FS10" fontFamily="REGULAR">
              {item?.desc}
            </Text>
          ) : null}
        </View>
      </View>

      {item?.renderRightElement ? (
        <View>
          <Switch
            onValueChange={(value: boolean) => {
              onToggleHandler && onToggleHandler();
              console.warn(value);
            }}
            value={isToggle}
          />
        </View>
      ) : (
        <View style={styles.row}>
          {/* {item?.arrowWithHint && (
            <Text color="BLUE_4A5970">{item?.arrowWithHint}</Text>
          )} */}
          {item?.isShowArrow && (
            <Svgs
              name={"arrow"}
              color={
                item?.arrowColor
                  ? item.arrowColor
                  : item?.isArrowRed
                  ? "red"
                  : Colors.PRIMARY
              }
              rotate={isRTL() ? "right" : "left"}
              width={scale(20)}
              height={scale(20)}
            />
          )}
        </View>
      )}
    </Card>
  );
};

export default ProfileRowCard;
