import React from "react";
import {View} from "react-native";
import {
  Button,
  Card,
  Image,
  RadioButton,
  RoundedIcon,
  Text,
  ViewRow,
} from "../../atoms";
import {styles} from "./styles";
import {SelectedCheckPaymentCardType} from "../../../@types";
import {Colors, Spacing} from "../../../styles";
import {translate} from "../../../helpers";

type SelectedPaymentCardWithCheckProps = {
  item: SelectedCheckPaymentCardType;
  index?: number;
  onSelected: () => void;
  active?: boolean;
  onSetAsDefaultPressed: () => void;
  onEditPressed: () => void;
};

const SelectedPaymentCardWithCheck: React.FC<
  SelectedPaymentCardWithCheckProps
> = ({item, active, onSelected, onSetAsDefaultPressed, onEditPressed}) => {
  return (
    <>
      <Card style={styles.card} onPress={onSelected}>
        <ViewRow style={styles.container}>
          {/* <View>
            {item?.image ? (
              <Image source={{uri: item.image}} style={styles.image} />
            ) : (
              <RoundedIcon
                iconStyle={{
                  color: Colors.PRIMARY,
                }}
                icon="notifications"
                backgroundColor="GRAY_EEEEEE"
              />
            )}
          </View> */}

          {/* middle section */}

          {item.name && (
            <View
              style={{
                flex: 1,
                marginStart: Spacing.S20,
                paddingHorizontal: Spacing.S11,
                justifyContent: "space-between",
              }}>
              <Text fontFamily="MEDIUM" fontSize="FS16">
                {item.name} {translate("Common.ending")}{" "}
                {translate("Common.in")} {item.lastDigits}
              </Text>
              <Text fontFamily="MEDIUM" fontSize="FS14">
                {translate("Common.expiryDate")} {item.expiryDate} 06/2024
              </Text>

              {/* button section */}

              <View style={[styles.row]}>
                <Button
                  style={styles.baseButton}
                  type="default"
                  text={translate("Common.setAsDefault")}
                  textStyle={{
                    fontFamily: "BOLD",
                    color: "BLACK",
                    fontSize: "FS14",
                  }}
                  onPress={() => {
                    onSelected();
                    onSetAsDefaultPressed();
                  }}
                />
                <Button
                  style={styles.baseButton}
                  type="default"
                  text={translate("Common.edit")}
                  textStyle={{
                    fontFamily: "BOLD",
                    color: "PRIMARY",
                    fontSize: "FS14",
                  }}
                  onPress={() => {
                    onEditPressed();
                  }}
                />
              </View>
            </View>
          )}

          <RadioButton isChecked={active} onChecked={onSelected} />
        </ViewRow>
      </Card>
    </>
  );
};

export default SelectedPaymentCardWithCheck;
