import {RouteProp, useRoute} from "@react-navigation/native";
import React, {useEffect, useMemo, useState} from "react";
import {View} from "react-native";
import {DoctorsList, Header, SearchBar, TabsView} from "../../components";
import {HomeStackTypes} from "../../navigation/navigation-types";
import {Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";
import {TabOptionType} from "../../@types";
import {translate} from "../../helpers";
import {getDoctors, useAppSelector} from "../../redux";
import {useLoader} from "../../hooks";
import {Lottie} from "../../assets";

const SpecialDetails = () => {
  const {
    params: {name, id, servicesType},
  } = useRoute<RouteProp<HomeStackTypes, "SpecialDetails">>();

  const {doctors, lastPage} = useAppSelector(state => state.doctorsReducer);
  const doctorsLoader = useLoader("doctors");
  const [currentPage, setCurrentPage] = useState(1);
  const [loadMoreLoading, setLoadMoreLoading] = React.useState<boolean>(false);
  const [filterParam, setFilterParam] = React.useState<{
    orderType?: "asc" | "desc";
    groupBy?: "price" | "duration";
  }>();

  const tabs: TabOptionType[] = useMemo(
    () => [
      {
        name: translate("Search.mostRecommended"),
      },
      {
        name: translate("Search.priceToHigh"),
        groupBy: "price",
        orderType: "asc",
      },
      {
        name: translate("Search.priceToLow"),
        groupBy: "price",
        orderType: "desc",
      },
      {
        name: translate("Search.shortTimes"),
        groupBy: "duration",
        orderType: "asc",
      },
    ],
    [],
  );

  const fetchDoctors = React.useCallback(
    async (page: number) => {
      getDoctors(
        page,
        {
          service: servicesType,
          group_by: filterParam?.groupBy,
          specialty_id: id,
          order_type: filterParam?.orderType,
        },
        res => {
          if (res.status === 200) {
          }
        },
      ).finally(() => {
        setLoadMoreLoading(false);
      });
    },
    [filterParam, id, servicesType],
  );

  useEffect(() => {
    fetchDoctors(1);
  }, [fetchDoctors]);

  useEffect(() => {
    if (lastPage && currentPage > 1) {
      setLoadMoreLoading(true);
      fetchDoctors(currentPage);
    }
  }, [currentPage, fetchDoctors, lastPage]);

  return (
    <View style={styles.rootScreen}>
      <Header
        title={name}
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
            setFilterParam({
              groupBy: tabs[index]?.groupBy,
              orderType: tabs[index]?.orderType,
            });
          }}
        />
        {doctorsLoader && !loadMoreLoading ? (
          <View style={styles.loaderContainer}>
            <Lottie name="loading" />
          </View>
        ) : (
          <View style={styles.doctorListContainer}>
            <DoctorsList
              listItems={doctors}
              onLoadMore={() => {
                setCurrentPage(prev => prev + 1);
              }}
              isLoading={loadMoreLoading}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default SpecialDetails;
