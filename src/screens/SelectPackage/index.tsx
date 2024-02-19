import React, {useRef} from "react";
import {View} from "react-native";
import {
  Button,
  Header,
  SelectCheckedOptions,
  WarningMessageModel,
} from "../../components";
import {Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";
import {useNavigationHooks} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {packages} from "./data";
import {translate} from "../../helpers";
import {BottomSheetModal} from "@gorhom/bottom-sheet";

const SelectPackage = () => {
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const [selectedItem, setSelectedItem] = React.useState<number>(-1);
  const warningModalRef = useRef<BottomSheetModal>(null);

  const onNextPressed = () => {
    if (selectedItem === -1) {
      warningModalRef.current?.present();
      return;
    }
    // submitLogic
    navigate("CompletePatientDetails");
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("selectPackage.title")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />

      {/* Main Screen Content */}
      <View style={styles.container}>
        <SelectCheckedOptions
          onSelectedItem={index => {
            setSelectedItem(index);
          }}
          listItems={packages}
        />
        <Button
          type="standard"
          text={translate("Common.next")}
          style={{marginBottom: Spacing.S35}}
          onPress={onNextPressed}
        />
      </View>
      <WarningMessageModel
        forwardRef={warningModalRef}
        title={translate("Model.warningTitle")}
        message={translate("Model.pleaseSelectPackageMessage")}
        onContinuePress={() => {
          warningModalRef.current?.close();
        }}
      />
    </View>
  );
};

export default SelectPackage;
