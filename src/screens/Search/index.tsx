import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React from "react";
import {ListRenderItem, View} from "react-native";
import debouce from "lodash.debounce";
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
  getSpecialties,
  getValueFromICreatedObj,
  selectCombinedAccountData,
  useAppSelector,
} from "../../redux";
import {styles} from "./styles";

const Search = () => {
  const {specialties} = useAppSelector(selectCombinedAccountData);
  const citiesModalRef = React.useRef<BottomSheetModal>(null);

  const [searchText, setSearchText] = React.useState<string>("");

  const [selectedCity, setSelectedCity] = React.useState<CityType>({
    id: -1,
  });

  React.useEffect(() => {
    const cityId = selectedCity?.id !== -1 ? selectedCity?.id : 0;
    getSpecialties({
      city_id: cityId,
      q: searchText,
    });
  }, [searchText, selectedCity]);

  const search = async (text: string) => {
    // Call the API to search for the input text
    setSearchText(text);
    //getDoctorsAction(agentId, DoctorsScheduleEnum.PM, 1, text);
  };

  const debouncedSearch = React.useRef(
    debouce(async text => {
      await search(text);
    }, 300),
  ).current;

  React.useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const onChangeValue = (text: string) => {
    debouncedSearch(text);
  };
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
      <SearchBar onSearch={onChangeValue} style={styles.searchBar} />

      <Scroll>
        <Section
          title={translate("Search.mostPopular")}
          data={specialties}
          type="vertical"
          renderItem={specialRenderItem}
        />
      </Scroll>
      <CitiesModal
        selectedId={selectedCity?.id}
        onSelect={onSelectedCity}
        forwardRef={citiesModalRef}
      />
    </View>
  );
};

export default Search;
