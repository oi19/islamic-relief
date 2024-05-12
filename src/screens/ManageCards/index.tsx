import {View} from "react-native";
import React from "react";
import {styles} from "./styles";
import {
  Button,
  Header,
  SelectCheckedPaymentCard,
  Text,
  WarningMessageModel,
} from "../../components";
import {getHeight} from "../../styles/dimensions";
import {Colors, Spacing} from "../../styles";
import {Svgs} from "../../assets";
import {paymentCards} from "../../dummyData";
import {useNavigationHooks, useToken} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {translate} from "../../helpers";
import {BottomSheetModal} from "@gorhom/bottom-sheet";

const ManageCards = () => {
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const isLogged = useToken();

  const [selectedItem, setSelectedItem] = React.useState<{
    index: number;
    isDefault: boolean | null;
  }>({index: -1, isDefault: null});
  const warningModalRef = React.useRef<BottomSheetModal>(null);

  const onEditPressed = () => {
    console.log(selectedItem);
    // edit this card logic
  };

  const onNextPressed = () => {
    if (selectedItem.index === -1) {
      warningModalRef.current?.present();
      return;
    }
    console.log(selectedItem.isDefault);
    // bussinessLogicHere
    navigate("CompletePatientDetails");
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
          onEditPressed={onEditPressed}
          selectedItem={selectedItem.index}
          onSelectedItem={index =>
            setSelectedItem({index: index, isDefault: null})
          }
          onSetAsDefaultPressed={index =>
            setSelectedItem({index: index, isDefault: true})
          }
        />
        <Button
          // disabled={selectedItem === -1}
          type="standard"
          text={translate("Common.next")}
          style={{marginBottom: Spacing.S35}}
          onPress={onNextPressed}
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
      <WarningMessageModel
        forwardRef={warningModalRef}
        title={translate("Model.warningTitle")}
        message={translate("Model.pleaseSelectCardMessage")}
        onContinuePress={() => {
          warningModalRef.current?.close();
        }}
      />
    </View>
  );
};

export default ManageCards;
