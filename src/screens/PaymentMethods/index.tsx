import React from "react";
import {View} from "react-native";
import {Button, Header, SelectCheckedOptions} from "../../components";
import {useNavigationHooks} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {paymentMethods} from "./data";
import {styles} from "./styles";
import {translate} from "../../helpers";

const PaymentMethods = () => {
  const [selectedItem, setSelectedItem] = React.useState<number>(-1);
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("paymnetMethods.title")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />

      {/* Main Screen Content */}
      <View style={styles.container}>
        <SelectCheckedOptions
          onSelectedItem={index => {
            setSelectedItem(index);
          }}
          listItems={paymentMethods}
        />
      </View>
      <Button
        disabled={selectedItem === -1}
        type="standard"
        text={translate("Common.next")}
        onPress={() => navigate("ReviewSummary")}
        style={styles.nextButton}
      />
    </View>
  );
};

export default PaymentMethods;
