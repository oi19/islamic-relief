import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React from "react";
import {ListRenderItem, View} from "react-native";
import {CityType} from "../../@types";
import {
  Button,
  CitiesModal,
  Scroll,
  SearchBar,
  Section,
  SpecialItem,
} from "../../components";
import {translate} from "../../helpers";
import {
  getValueFromICreatedObj,
  selectCombinedAccountData,
  useAppSelector,
} from "../../redux";
import {styles} from "./styles";

const Search = () => {
  const {specialties} = useAppSelector(selectCombinedAccountData);
  const citiesModalRef = React.useRef<BottomSheetModal>(null);

  const [selectedCity, setSelectedCity] = React.useState<CityType>({
    id: -1,
  });

  const onSelectedCity = (city: CityType) => {
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
        placeholder={translate("Form.chooseCity")}
        type="dropdown"
        text={getValueFromICreatedObj(selectedCity.id, "cities")}
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

        {/* <Section
          title={translate("Search.otherSpecialties")}
          data={specialties}
          renderItem={specialRenderItem}
        /> */}
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
