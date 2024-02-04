import React, {FC, memo} from "react";
import {View, ViewProps, ViewStyle} from "react-native";
import {Button, Input} from "../../../components";

import {styles} from "./styles";
import {Colors} from "../../../styles";
import {translate} from "../../../helpers";

type SearchBarProps = {
  onComparison?: () => void;
  onFilter?: () => void;
  placeholder?: string;
  onSearch?: (text: string) => void;
  onFocus?: () => void;
  autoFocus?: boolean;
  onReset?: () => void;
  inputStyle?: ViewStyle;
};

const SearchBar: FC<ViewProps & SearchBarProps> = ({
  //   onComparison,
  onReset,
  onFilter,
  placeholder,
  onSearch,
  style,
  onFocus,
  autoFocus,
  inputStyle,
  ...props
}) => {
  return (
    <View {...props} style={[styles.headerContainer, style]}>
      <Input
        onFocus={onFocus}
        autoFocus={autoFocus}
        onChangeText={onSearch}
        placeholder={placeholder || translate("Common.search")}
        inputContainerStyle={{marginTop: 0}}
        style={[styles.searchInput, inputStyle]}
        icon="search"
      />

      {/* {onComparison && <Button onPress={onComparison} iconName="comparison" />} */}
      {onFilter && (
        <Button
          onPress={onFilter}
          iconName="filter"
          // eslint-disable-next-line react-native/no-inline-styles
          iconStyle={{
            width: 30,
            height: 30,
            color: Colors.PRIMARY,
          }}
        />
      )}
      {onReset && <Button onPress={onReset} iconName="reset" />}
    </View>
  );
};

export default memo(SearchBar);
