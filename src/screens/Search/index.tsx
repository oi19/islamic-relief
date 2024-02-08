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
import {getValueFromId, translate} from "../../helpers";
import {styles} from "./styles";
import { CityTypes } from "../../@types";

const Search = () => {
  const citiesModalRef = React.useRef<BottomSheetModal>(null);

  const [selectedCity, setSelectedCity] = React.useState<CityTypes>();

  const onSelectedCity = (city: CityTypes) => {
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
        selectedId={selectedCity?.id?.toString()}
        onSelect={onSelectedCity}
        forwardRef={citiesModalRef}
      />
    </View>
  );
};

export default Search;
