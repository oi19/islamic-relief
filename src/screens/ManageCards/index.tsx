import {View} from "react-native";
import React from "react";
import {styles} from "./styles";
import {Button, Header, SelectCheckedPaymentCard, Text} from "../../components";
import {getHeight} from "../../styles/dimensions";
import {Colors, Spacing} from "../../styles";
import {Svgs} from "../../assets";
import {paymentCards} from "../../dummyData";
import {useNavigationHooks, useToken} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {translate} from "../../helpers";

const ManageCards = () => {
  const [selectedItem, setSelectedItem] = React.useState<number>(-1);
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const isLogged = useToken();

  const onSetAsDefaultPressed = () => {
    // console.log('selectedItem')
    // select this card as default logic

    navigate("CompletePatientDetails");
  };

  const onEditPressed = () => {
    console.log(selectedItem);
    // edit this card logic
  };

  const renderEmptyList = () => {
    return (
      <View style={styles.emptyListContainer}>
        <Svgs name="credit" color={Colors.BLUE_4A5970} />
        <Text fontFamily="MEDIUM" fontSize="H1">
          No card saved
        </Text>
        <Text style={{marginVertical: Spacing.S16}}>
          Add your credit or debit card to pay online
        </Text>

        <Button style={styles.saveButton} text="Add Card" type="standard" />
      </View>
    );
  };

  const renderPaymentCardsList = () => {
    return (
      <>
        <SelectCheckedPaymentCard
          listItems={paymentCards}
          onSelectedItem={setSelectedItem}
          onSetAsDefaultPressed={onSetAsDefaultPressed}
          onEditPressed={onEditPressed}
        />
        <Button
          disabled={selectedItem === -1}
          type="standard"
          text={translate("Common.next")}
          style={{marginBottom: Spacing.S35}}
          onPress={() => navigate("CompletePatientDetails")}
        />
      </>
    );
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("Profile.manageCards")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />
      <View style={styles.container}>
        {true ? renderPaymentCardsList() : renderEmptyList()}
      </View>
    </View>
  );
};

export default ManageCards;
