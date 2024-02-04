import {View} from "react-native";
import React from "react";
import {styles} from "./styles";
import {Button, Header, Text} from "../../components";
import {getHeight} from "../../styles/dimensions";
import {Colors, Spacing} from "../../styles";
import {Svgs} from "../../assets";

const ManageCards = () => {
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
  return (
    <View style={styles.rootScreen}>
      <Header
        title={"Manage Cards"}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />

      <View style={styles.container}>{renderEmptyList()}</View>
    </View>
  );
};

export default ManageCards;
