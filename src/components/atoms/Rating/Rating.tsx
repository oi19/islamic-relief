/* eslint-disable react-native/no-inline-styles */
import React, {FC, memo} from "react";
import {Button} from "../../atoms";
import {scale} from "../../../styles/dimensions";
import {View, ViewProps} from "react-native";
import {Spacing} from "../../../styles";

const Rating: FC<
  ViewProps & {
    rate?: number;
    disabled?: boolean;
    size?: number;
    onChangeValue?: (value: string) => void;
  }
> = ({
  disabled = true,
  rate = 1,
  size = scale(7),
  onChangeValue = () => {},
  ...props
}) => {
  return (
    <View style={[{flexDirection: "row"}, props.style]}>
      {Array(5)
        .fill({})
        .map((item, index) => (
          <Button
            onPress={() => onChangeValue(`${index + 1}`)}
            key={`rating_${index}`}
            style={{
              marginVertical: 0,
              backgroundColor: "white",
            }}
            disabled={disabled}
            iconName="activeStar"
            iconContainerStyle={
              {
                // backgroundColor: "red",
                // marginLeft: 0,
                // paddingVertical: 10,
                // marginEnd: Spacing.S20,
              }
            }
            iconStyle={{
              color: index < rate ? "#ffc107" : "white",
              width: 20,
              height: 20,
            }}
          />
        ))}
    </View>
  );
};

export default memo(Rating);
