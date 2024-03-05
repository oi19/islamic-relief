import {RouteProp, useRoute} from "@react-navigation/native";
import React from "react";
import {BackHandler, ListRenderItem, View} from "react-native";

import {styles} from "./styles";
import {MyAppointmentStackTypes} from "../../navigation/navigation-types";
import {useLoader, useNavigationHooks} from "../../hooks";
import {AppointmentsTypes} from "../../@types";
import {getAppointmentDetails} from "../../redux";
import {
  AppointmentCard,
  Header,
  Line,
  Section,
  SelectedMultiPhotosItem,
  Text,
} from "../../components";
import {Spacing} from "../../styles";
import {translate} from "../../helpers";
import {getHeight} from "../../styles/dimensions";
import {Lottie} from "../../assets";

const AppointmentDetails = () => {
  const {
    params: {appointmentId},
  } = useRoute<RouteProp<MyAppointmentStackTypes, "AppointmentDetails">>();
  const {goBack} = useNavigationHooks();

  const [appointment, setAppointment] = React.useState<AppointmentsTypes>();

  const appointmentLoader = useLoader("getAppointments");

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

  React.useEffect(() => {
    getAppointmentDetails(appointmentId, res => {
      if (res.status === 200) {
        setAppointment(res.data.data);
      }
    });
  }, [appointmentId]);

  console.log("appointment =>", appointment);

  const _renderFileItem: ListRenderItem<AppointmentsTypes> = ({
    item,
    index,
  }) => {
    return <SelectedMultiPhotosItem item={item} index={index} />;
  };

  const renderContentView = () => (
    <View style={{paddingHorizontal: Spacing.S11}}>
      <AppointmentCard
        style={styles.card}
        item={appointment as AppointmentsTypes}
        disabled
      />
      <Line />

      <View style={{paddingHorizontal: Spacing.S16}}>
        <Text fontFamily="MEDIUM" fontSize="FS16">
          {translate("myAppointment.patientProblem")}
        </Text>
        <Text>{appointment?.notes}</Text>
      </View>

      <Section
        title={translate("myAppointment.patientDocuments")}
        data={appointment?.files}
        type="horizontal"
        renderItem={_renderFileItem}
      />
    </View>
  );

  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("myAppointment.appointmentDetails")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />
      {appointmentLoader || !appointment ? (
        <View style={styles.center}>
          <Lottie name="loading" />
        </View>
      ) : (
        renderContentView()
      )}
    </View>
  );
};

export default AppointmentDetails;
