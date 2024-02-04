import React from "react";
import {View} from "react-native";
import {Button, Header, SelectCheckedOptions} from "../../components";
import {Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";
import {useNavigationHooks} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";
import {packages} from "./data";
import {translate} from "../../helpers";

const SelectPackage = () => {
  const [selectedItem, setSelectedItem] = React.useState<number>(-1);
  const {navigate} = useNavigationHooks<MainAppStackTypes>();

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
          disabled={selectedItem === -1}
          type="standard"
          text={translate("Common.next")}
          style={{marginBottom: Spacing.S35}}
          onPress={() => navigate("CompletePatientDetails")}
        />
      </View>
    </View>
  );
};

export default SelectPackage;
