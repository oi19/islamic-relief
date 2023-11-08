import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React from "react";
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
import {getValueFromId} from "../../helpers";
import {styles} from "./styles";

const Search = () => {
  const citiesModalRef = React.useRef<BottomSheetModal>(null);

  const [selectedCity, setSelectedCity] = React.useState<number>(1);

  const onSelectedCity = (cityId: number) => {
    console.log("city_id", `${cityId}`);
    setSelectedCity(cityId);
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
        text={getValueFromId(selectedCity, dummyCities)}
        iconName="location"
        onPress={onOpenCitiesModal}
      />
      <SearchBar style={styles.searchBar} />

      <Scroll>
        <Section
          title="Most Popular Specialties"
          data={specialties}
          renderItem={specialRenderItem}
        />

        <Section
          title="Other Specialties"
          data={specialties}
          renderItem={specialRenderItem}
        />
      </Scroll>
      <CitiesModal
        selectedId={selectedCity.toString()}
        onSelect={onSelectedCity}
        forwardRef={citiesModalRef}
      />
    </View>
  );
};

export default Search;
