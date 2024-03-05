import React, {memo} from "react";
import {View} from "react-native";

import {styles} from "../../organisms/SelectedItemWithCheck/styles";
import {ServiceTypes, ServicesTypesEnums} from "../../../@types";
import {translate} from "../../../helpers";
import {Card, RadioButton, RoundedIcon, Text, ViewRow} from "../../atoms";
import {Spacing} from "../../../styles";
import {IconsName} from "../../../assets/svgs";

type SelectedServiceItemProps = {
  item: ServiceTypes;
  index?: number;
  onSelected: () => void;
  active?: boolean;
};

const SelectedServiceItem: React.FC<SelectedServiceItemProps> = ({
  item,
  active,
  onSelected,
}) => {
  const mainCheck = item?.service === ServicesTypesEnums.HomeVisit;
  const ClinicVisit = item?.service === ServicesTypesEnums.ClinicVisit;
  const icon: IconsName = ClinicVisit
    ? "prescription"
    : mainCheck
    ? "home"
    : "video";
  const name = ClinicVisit
    ? translate("Home.clinicVisit")
    : mainCheck
    ? translate("Home.homeVisit")
    : translate("Common.videoCall");
  const desc = mainCheck
    ? `${translate("Common.inPerson")} ${translate("Common.withDoctor")}`
    : `${translate("Common.videoCall")} ${translate("Common.withDoctor")}`;

  return (
    <>
      {item?.title && (
        <Text
          fontFamily="MEDIUM"
          fontSize="FS13"
          style={{marginVertical: Spacing.S8}}>
          {item?.title}
        </Text>
      )}

      <Card style={styles.card} onPress={onSelected}>
        <ViewRow style={styles.container}>
          <RoundedIcon
            backgroundColor="PRIMARY"
            icon={icon}
            style={styles.roundedIcon}
            title={item?.name || name}
            subTitle={item?.desc || desc}
            titleStyle={{marginTop: 0}}
            iconStyle={styles.icon}
            textContainerStyle={styles.textContainer}
          />
          <View style={styles.row}>
            <View>
              <Text>
                {item?.price || 0} {translate("Common.egp")}
              </Text>
              <Text> {item?.duration || 0} / mins</Text>
            </View>
            <RadioButton isChecked={active} onChecked={onSelected} />
          </View>
        </ViewRow>
      </Card>
    </>
  );
};

export default memo(SelectedServiceItem);
