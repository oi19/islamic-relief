import React, {FC, memo, useState} from "react";
import {ViewProps} from "react-native";
import {Colors} from "../../../styles";
import {scale} from "../../../styles/dimensions";
import Button from "../Button/Button";
import styles from "./styles";

const FavoriteButton: FC<
  ViewProps & {
    isFavorite?: boolean;
    onPress: Function;
  }
> = ({isFavorite, onPress, ...props}) => {
  let [_isFavorite, setFavorite] = useState(isFavorite);

  const onFavorite = () => {
    onPress();
    setFavorite(!_isFavorite);
  };

  return (
    <Button
      onPress={onFavorite}
      containerStyle={[styles.container, props.style]}
      style={styles.button}
      iconName="favorite"
      iconStyle={{
        width: scale(38),
        height: scale(38),
        color: _isFavorite ? Colors.PRIMARY : undefined,
      }}
    />
  );
};

export default memo(FavoriteButton);
