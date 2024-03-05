import React, {useRef} from "react";
import {View} from "react-native";
import {
  Button,
  Header,
  SelectCheckedOptions,
  WarningMessageModel,
} from "../../components";
import {Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";
import {useNavigationHooks} from "../../hooks";
import {MainAppStackTypes} from "../../navigation/navigation-types";

import {translate} from "../../helpers";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {RouteProp, useRoute} from "@react-navigation/native";
import {
  setServiceTypeWithAppointment,
  useAppSelector,
  useDispatch,
} from "../../redux";
import {ServiceTypes, ServicesTypesEnums} from "../../@types";

const SelectPackage = () => {
  const {
    params: {appointment},
  } = useRoute<RouteProp<MainAppStackTypes, "SelectPackage">>();
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const dispatch = useDispatch();
  const {services, clinics} = useAppSelector(
    state => state.doctorsReducer.doctorProfile,
  );

  const addClinicSelector = {
    duration: clinics?.[0]?.duration,
    id: clinics?.[0]?.id,
    is_available: 1,
    price: clinics?.[0]?.price,
    service: ServicesTypesEnums.ClinicVisit,
  };
  const [selectedItem, setSelectedItem] = React.useState<{
    id?: number;
    service?: ServiceTypes;
  }>();
  const warningModalRef = useRef<BottomSheetModal>(null);

  const onNextPressed = () => {
    if (selectedItem?.id === -1) {
      warningModalRef.current?.present();
      return;
    }
    dispatch(
      setServiceTypeWithAppointment({
        date: appointment?.date,
        service: selectedItem?.service,
        time: appointment?.time,
      }),
    );
    // submitLogic
    navigate("CompletePatientDetails");
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title={translate("selectPackage.title")}
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />

      {/* Main Screen Content */}
      <View style={styles.container}>
        <SelectCheckedOptions
          onSelectedItem={(index, service) => {
            setSelectedItem({
              id: index,
              service,
            });
          }}
          listItems={[...services, addClinicSelector]}
          fromComponent="services"
        />
        <Button
          type="standard"
          text={translate("Common.next")}
          style={{marginBottom: Spacing.S35}}
          onPress={onNextPressed}
        />
      </View>
      <WarningMessageModel
        forwardRef={warningModalRef}
        title={translate("Model.warningTitle")}
        message={translate("Model.pleaseSelectPackageMessage")}
        onContinuePress={() => {
          warningModalRef.current?.close();
        }}
      />
    </View>
  );
};

export default SelectPackage;
