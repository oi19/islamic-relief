import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React, {useEffect} from "react";
import {ListRenderItem, View} from "react-native";
import {
  Button,
  CitiesModal,
  Scroll,
  SearchBar,
  Section,
  SpecialItem,
} from "../../components";
import {dummyCities, specialties} from "../../dummyData";
import {getValueFromId, translate} from "../../helpers";
import {styles} from "./styles";
import {CityType, SpecialtiesType} from "../../@types";
import {useAppSelector} from "../../redux";
import {useLoader} from "../../hooks";

const Search = () => {
  const specialties: SpecialtiesType[] = useAppSelector(
    state => state.createAccountReducer.specialties,
  );
  const citiesModalRef = React.useRef<BottomSheetModal>(null);
  const isLoading = useLoader("specialties");
  const {profile} = useAppSelector(state => state.userReducer?.profile);

  const [selectedCity, setSelectedCity] = React.useState<CityType>();

  const onSelectedCity = (city: CityType) => {
    console.log("city_id", `${city.id}`);
    setSelectedCity(city);
  };

  const onOpenCitiesModal = () => {
    citiesModalRef.current?.present();
  };

  const specialRenderItem: ListRenderItem<any> = ({item, index}) => {
    return <SpecialItem item={item} index={index} />;
  };
  return (
    <View style={styles.rootScreen}>
      <Button
        type="dropdown"
        text={getValueFromId(selectedCity?.id, dummyCities)}
        iconName="location"
        onPress={onOpenCitiesModal}
      />
      <SearchBar style={styles.searchBar} />

      <Scroll>
        <Section
          title={translate("Search.mostPopular")}
          data={specialties}
          renderItem={specialRenderItem}
        />

        <Section
          title={translate("Search.otherSpecialties")}
          data={specialties}
          renderItem={specialRenderItem}
        />
      </Scroll>
      <CitiesModal
        selectedId={profile?.city_id ?? selectedCity?.id?.toString()}
        onSelect={onSelectedCity}
        forwardRef={citiesModalRef}
      />
      {isLoading && <View style={styles.disableClicks}></View>}
    </View>
  );
};

export default Search;
