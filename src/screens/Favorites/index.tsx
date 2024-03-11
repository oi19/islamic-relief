import React from "react";
import {View} from "react-native";
import {Svgs} from "../../assets";
import {DoctorsList, Header, Text} from "../../components";
import {translate} from "../../helpers";
import {Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";
import {selectCombinedAccountData, useAppSelector} from "../../redux";

const Favorites = () => {
  const {lastPage} = useAppSelector(state => state.favouriteReducer);
  const {favourites} = useAppSelector(selectCombinedAccountData);

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
        title={translate("Profile.favorites")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />
      <View style={styles.container}>
        <DoctorsList
          onLoadMore={() => {}}
          listItems={favourites}
          renderEmptyList={renderEmptyList}
        />
      </View>
    </View>
  );
};

export default Favorites;
