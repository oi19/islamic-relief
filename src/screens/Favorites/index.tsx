import {FlatList, View} from "react-native";
import React from "react";
import {styles} from "./styles";
import {Header, Text} from "../../components";
import {getHeight} from "../../styles/dimensions";
import {Spacing} from "../../styles";
import {Svgs} from "../../assets";

const Favorites = () => {
  const renderEmptyList = () => {
    return (
      <View style={styles.emptyListContainer}>
        <Svgs name="bigFavorite" />
        <Text style={{marginVertical: Spacing.S16}}>
          No favorite doctors added yet
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.rootScreen}>
      <Header
        title={"Favorites"}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />
      <View style={styles.container}>
        <FlatList
          data={[]}
          renderItem={undefined}
          ListEmptyComponent={renderEmptyList()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Favorites;
