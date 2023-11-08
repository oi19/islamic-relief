import {BottomSheetModal} from "@gorhom/bottom-sheet";
import React from "react";
import {View} from "react-native";

import {Button, GenderModal, Header, Input, Text} from "../../components";
import {genders} from "../../dummyData";
import {getValueFromId} from "../../helpers";
import {Colors, Spacing} from "../../styles";
import {getHeight} from "../../styles/dimensions";
import {styles} from "./styles";

const CompletePatientDetails = () => {
  const genderModalRef = React.useRef<BottomSheetModal>(null);
  const [selectedGender, setSelectedGender] = React.useState<number>(1);

  const onSelectedGender = (cityId: number) => {
    console.log("city_id", `${cityId}`);
    setSelectedGender(cityId);
  };

  return (
    <View style={styles.rootScreen}>
      <Header
        title="Patient Details"
        style={{height: getHeight(120), paddingTop: Spacing.S20}}
      />

      {/* Main Screen Content */}
      <View style={styles.container}>
        <Text fontSize="FS14" fontFamily="MEDIUM" style={styles.title}>
          Booking for
        </Text>
        <Button
          type="dropdown"
          // text={"Gander"}
          placeholder="Booking for"
          iconStyle={{color: Colors.PRIMARY}}
          style={styles.dropdownButton}
          onPress={() => {}}
        />
        <Text fontSize="FS14" fontFamily="MEDIUM" style={styles.title}>
          Gender
        </Text>
        <Button
          type="dropdown"
          placeholder="Gender"
          text={getValueFromId(selectedGender, genders)}
          iconStyle={{color: Colors.PRIMARY}}
          style={styles.dropdownButton}
          onPress={() => {
            genderModalRef?.current?.present();
          }}
        />
        <View style={styles.ageContainer}>
          <Input label="Your Age" placeholder="Enter your age" />
        </View>

        <Button
          disabled={false}
          type="border"
          text="Upload Document"
          iconName="upload"
          style={styles.uploadButton}
          textStyle={{fontFamily: "NORMAL", color: "FONT_07101A"}}
        />
        <View>
          <Input
            multiline
            numberOfLines={4}
            label="Write Your Problem"
            placeholder="Write here..."
            textAlignVertical="top"
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.problemInputStyle}
            // inputRef={problemInputRef}
          />
        </View>
        <Button
          disabled={false}
          type="standard"
          text="Next"
          style={styles.nextButton}
        />
      </View>
      <GenderModal
        selectedId={selectedGender.toString()}
        onSelect={id => {
          onSelectedGender(id);
        }}
        forwardRef={genderModalRef}
      />
    </View>
  );
};

export default CompletePatientDetails;
