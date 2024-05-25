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
import {Svgs} from "../../../assets";

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
        {/* middle section */}

        <View
          style={{
            flex: 1,
            // marginStart: Spacing.S20,
            // paddingHorizontal: Spacing.S11,
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "space-between",
          }}>
          {active && (
            <Svgs
              style={{
                marginTop: Spacing.S20,
                marginEnd: Spacing.S11,
              }}
              strokeWidth={2}
              width={20}
              name="checkedIcon"
            />
          )}

          <Text fontFamily="MEDIUM" fontSize="FS14">
            {/* {item.lastDigits} */}
            {"xxxx-7546"}
            {}
          </Text>
          <Text fontFamily="MEDIUM" fontSize="FS14">
            {/* {item.name} {translate("Common.ending")}{" "} */}
            {/* {item.lastDigits} */}
            {"   الانتهاء في :11/12"}
            {}
          </Text>

          {/* button section */}
        </View>

        <Button
          style={styles.baseButton}
          type="default"
          text={"حذف"}
          textStyle={{
            fontFamily: "MEDIUM",
            color: "RED",
            fontSize: "FS14",
          }}
          onPress={() => {
            // onEditPressed();
          }}
        />
      </Card>
    </>
  );
};

export default SelectedPaymentCardWithCheck;
