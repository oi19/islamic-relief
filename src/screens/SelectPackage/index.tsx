import React from "react";
import {View} from "react-native";
import {Button, Header, SelectCheckedOptions} from "../../components";
import {Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";
import {useNavigationHooks} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";

const SelectPackage = () => {
  const [selectedItem, setSelectedItem] = React.useState<number>(-1);
  const {navigate} = useNavigationHooks<MainAppStackTypes>();

  return (
    <View style={styles.rootScreen}>
      <Header
        title="Select Package"
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />

      {/* Main Screen Content */}
      <View style={styles.container}>
        <SelectCheckedOptions
          onSelectedItem={index => {
            setSelectedItem(index);
          }}
          listItems={[3, 4, 5, 6, 7]}
        />
        <Button
          disabled={selectedItem === -1}
          type="standard"
          text="Next"
          onPress={() => navigate("CompletePatientDetails")}
        />
      </View>
    </View>
  );
};

export default SelectPackage;
