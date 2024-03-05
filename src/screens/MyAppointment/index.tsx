import React, {useMemo, useEffect, useRef} from "react";
import {BackHandler, View} from "react-native";

import {styles} from "./styles";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {TextProps} from "../../components/atoms/Text/Text";
import {useLoader, useNavigationHooks, useToken} from "../../hooks";
import {
  clearAppointments,
  getAppointments,
  useAppSelector,
  useDispatch,
} from "../../redux";
import {AppointmentStatus, TabOptionType} from "../../@types";
import {translate} from "../../helpers";
import {
  AppointmentList,
  Button,
  HandleSignIn,
  Header,
  SupportModel,
  TabsView,
} from "../../components";
import {getHeight, getWidth} from "../../styles/dimensions";
import {Spacing} from "../../styles";
import {Lottie} from "../../assets";

const textStyle: TextProps = {
  fontSize: "FS11",
  fontFamily: "NORMAL",
  color: "FONT_07101A",
};

const MyAppointment = () => {
  const supportModalRef = useRef<BottomSheetModal>(null);
  const {goBack} = useNavigationHooks();
  const dispatch = useDispatch();

  const isLoggin = useToken();

  const {appointments, lastPage} = useAppSelector(
    state => state.appointmentsReducer,
  );

  const [loadMoreLoader, setLoadMoreLoader] = React.useState<boolean>(false);
  const [selectedTab, setSelectedTab] = React.useState<Record<string, any>>({
    index: 0,
    status: null,
    page: 1,
  });

  const appointmentsLoading = useLoader("getAppointments");

  // Handle Back Of Default user
  React.useEffect(() => {
    const backAction = () => {
      goBack();
      return true; // Prevent default behavior (i.e., don't exit the app)
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, [goBack]);

  useEffect(() => {
    if (lastPage) {
      if (selectedTab.page > 1) {
        setLoadMoreLoader(true);
      }
      getAppointments(selectedTab?.status, selectedTab.page, res => {
        if (res.status === 200) {
          // Handle success if needed
        }
      }).finally(() => {
        setLoadMoreLoader(false);
      });
    }
  }, [lastPage, selectedTab]);

  const tabs: TabOptionType[] = useMemo(
    () => [
      {name: translate("myAppointment.all")},
      {
        name: translate("myAppointment.upcoming"),
        status: AppointmentStatus.Confirmed,
      },
      {
        name: translate("myAppointment.completed"),
        status: AppointmentStatus.Done,
      },
      {
        name: translate("myAppointment.cancelled"),
        status: AppointmentStatus.Cancelled,
      },
      {name: translate("Common.rejected"), status: AppointmentStatus.Rejected},
    ],
    [],
  );

  const onOpenWarningModal = () => {
    supportModalRef.current?.present();
  };

  const handleTabSelection = async (index: number) => {
    await Promise.all([
      setSelectedTab({index, page: 1, status: tabs[index].status}),
      dispatch(clearAppointments()),
    ]);
  };

  if (!isLoggin) {
    return (
      <HandleSignIn
        title={translate("myActivity.title")}
        icon="bigDocument"
        message={translate("myActivity.loginMessage")}
      />
    );
  }

  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("myAppointment.title")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />
      <TabsView
        data={tabs}
        buttonStyle={{height: getHeight(30), width: getWidth(80)}}
        onSelected={handleTabSelection}
      />
      {appointmentsLoading && !loadMoreLoader ? (
        <View style={[styles.rootScreen, styles.center]}>
          <Lottie name="loading" />
        </View>
      ) : (
        <>
          <View style={styles.container}>
            <AppointmentList
              listItems={appointments}
              isLoading={loadMoreLoader}
              onLoadMore={() => {
                setSelectedTab(prev => ({...prev, page: prev?.page + 1}));
              }}
            />
          </View>
          <Button
            iconName="contactSupport"
            iconContainerStyle={styles.iconContainerStyle}
            style={styles.supportButton}
            onPress={onOpenWarningModal}
            textStyle={textStyle}
            text={translate("myAppointment.support")}
            iconStyle={styles.iconStyle}
          />
        </>
      )}

      <SupportModel
        forwardRef={supportModalRef}
        message={translate("myAppointment.supportMessage")}
      />
    </View>
  );
};

export default MyAppointment;
