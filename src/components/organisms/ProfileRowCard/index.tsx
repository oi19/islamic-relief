import React from "react";
import {View, ViewStyle} from "react-native";

import {profileRowType} from "../../../@types";
import {Svgs} from "../../../assets";
import {isRTL} from "../../../locals/i18n-config";
import {Colors} from "../../../styles";
import {scale} from "../../../styles/dimensions";
import {Card, Switch, Text} from "../../atoms";
import {styles} from "./styles";

type ProfileRowCardProps = {
  item: profileRowType;
  index?: number;
  style?: ViewStyle;
  handleOnRowPressed: () => void;
};

const ProfileRowCard: React.FC<ProfileRowCardProps> = ({
  item,
  style,
  handleOnRowPressed,
}) => {
  return (
    <Card
      onPress={handleOnRowPressed}
      style={[
        styles.card,
        {
          backgroundColor: item?.renderRightElement
            ? Colors.TRANSPARENT
            : Colors.WHITE,
        },
        style,
      ]}>
      <Text color="BLUE_4A5970" fontSize="FS16" fontFamily="REGULAR">
        {item?.name}
      </Text>

      {item?.renderRightElement ? (
        <View>
          <Switch
            onValueChange={(value: boolean) => {
              console.log(value);
            }}
            value={false}
          />
        </View>
      ) : (
        <View style={styles.row}>
          {item?.arrowWithHint && (
            <Text color="BLUE_4A5970">{item?.arrowWithHint}</Text>
          )}
          <Svgs
            name={item?.icon || "arrow"}
            color={Colors.PRIMARY}
            rotate={isRTL() ? "left" : "right"}
            width={scale(15)}
            height={scale(15)}
          />
        </View>
      )}
    </Card>
  );
};

export default ProfileRowCard;
