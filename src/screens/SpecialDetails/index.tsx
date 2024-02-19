import {RouteProp, useRoute} from "@react-navigation/native";
import React, {useEffect, useMemo} from "react";
import {View} from "react-native";
import {DoctorsList, Header, SearchBar, TabsView} from "../../components";
import {HomeStackTypes} from "../../navigation/navigation-types";
import {Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";
import {TabOptionType} from "../../@types";
import {doctors} from "../../dummyData";
import {translate} from "../../helpers";

const SpecialDetails = () => {
  const {
    params: {item},
  } = useRoute<RouteProp<HomeStackTypes, "SpecialDetails">>();
  const [selectedTab, setSelectedTab] = React.useState<number>(0);

  useEffect(() => {
    // getDoctorsList()
  }, []);

  const tabs: TabOptionType[] = useMemo(
    () => [
      {
        name: translate("Search.mostRecommended"),
        content: <DoctorsList listItems={doctors} />,
      },
      {
        name: translate("Search.priceToHigh"),
        content: <DoctorsList listItems={doctors} />,
      },
      {
        name: translate("Search.priceToLow"),
        content: <DoctorsList listItems={doctors} />,
      },
      {
        name: translate("Search.shortTimes"),
        content: <DoctorsList listItems={doctors} />,
      },
    ],
    [],
  );

  return (
    <View style={styles.rootScreen}>
      <Header
        title={item?.name}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />
      <View style={styles.container}>
        <SearchBar
          style={styles.searchBar}
          placeholder={translate("Home.searchTitle")}
        />

        <TabsView
          data={tabs}
          onSelected={(index: number) => {
            console.log(index);
            setSelectedTab(index);
          }}
        />
        <View style={styles.doctorListContainer}>
          {tabs[selectedTab]?.content}
        </View>
      </View>
    </View>
  );
};

export default SpecialDetails;
