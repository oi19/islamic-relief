import {FlatList, View} from "react-native";
import React, {useEffect} from "react";
import {styles} from "./styles";
import {ActivityCard, DoctorsList, Header, Text} from "../../components";
import {getHeight} from "../../styles/dimensions";
import {Spacing} from "../../styles";
import {Svgs} from "../../assets";
import {doctors} from "../../dummyData";
import {Doctor, FilterCondition} from "../../@types";
import {filterArray, translate} from "../../helpers";

const Favorites = () => {
  // const doctorsLIst = useAppSelector(state => state.userReducer.doctorsList);
  const isFavouriteCondition: FilterCondition<Doctor> = (doctor: Doctor) => {
    return doctor.isFavourite === true;
  };

  const favouritDoctorsList = () => {
    const favoriteList = filterArray(doctors, isFavouriteCondition);
    return favoriteList;
  };

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
          listItems={favouritDoctorsList()}
          renderEmptyList={renderEmptyList}
        />
      </View>
    </View>
  );
};

export default Favorites;
