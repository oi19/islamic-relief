import React, {useEffect, useState} from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
  TextInput,
} from "react-native";
import {RouteProp, useRoute} from "@react-navigation/native";
import axios from "axios";
import ProgressBar from "../../components/shared/ProgressBar/ProgressBar";
import {
  MainAppStackTypes,
  MainNavigationAllScreensTypes,
} from "../../../navigation/navigation-types";
import {useNavigationHooks} from "../../../hooks";
// import {countries} from "./data";
import Button from "../../components/shared/Button/Button";
import Header from "../../components/shared/Header";
import {Colors, Spacing, Typography} from "../../../styles";
import {getHeight, getWidth} from "../../../styles/dimensions";
import ViewRow from "../../components/shared/ViewRow/ViewRow";
import Text from "../../components/shared/Text/Text";
import Input from "../../components/shared/Input/Input";
import {Svgs} from "../../../assets";

const normalList = ["10", "50", "100", "500"];
const fixedList = ["5x", "10x", "15x", "20x"];

const Payment = () => {
  const {navigate, goBack} =
    useNavigationHooks<MainNavigationAllScreensTypes>();
  const {
    params: {title, isCard, isFixed},
  } = useRoute<RouteProp<MainAppStackTypes, "ItemDetail">>();
  const [amount, setAmount] = useState();

  const renderChooseOptions = (list: string[]) => {
    return (
      <View
        style={{
          width: "100%",
          backgroundColor: "red",
          padding: Spacing.S16,
        }}>
        <Text fontFamily="MEDIUM" fontSize="FS13">
          المبالغ المقترحة
        </Text>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          {list.map((value: string | undefined, index: any) => {
            return (
              <TouchableOpacity
                style={[
                  {
                    backgroundColor: Colors.PRIMARY,
                    paddingHorizontal: Spacing.S35,
                    paddingVertical: Spacing.S16,
                  },
                ]}>
                <Text>{value}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderNormalSection = () => {
    return (
      <View style={{marginTop: Spacing.S16, paddingHorizontal: Spacing.S16}}>
        <Text fontFamily="BOLD" fontSize="FS16">
          حدد مبلغ التبرع{" "}
        </Text>
        <Input
          key={"amount"}
          // password
          amountIcon="about"
          keyboardType={"number-pad"}
          placeholder={" المبلغ"}
          style={{}}
          // inputContainerStyle={{marginHorizontal: Spacing.S16}}
          onChangeText={text => setAmount(text)}
        />
      </View>
    );
  };

  const renderRaiseCycle = () => {
    return (
      <View>
        <Text fontFamily="BOLD" fontSize="FS16">
          دورة التبرع
        </Text>
        <View style={{backgroundColor: "#F3FDFC", padding: Spacing.S16}}>
          <View style={{flexDirection: "row", marginVertical: Spacing.S16}}>
            <Svgs name="bag" />
            <Text
              style={{marginStart: Spacing.S16}}
              fontFamily="BOLD"
              fontSize="FS14"
              color="#3DA599">
              {" "}
              يومي{" "}
            </Text>
          </View>
          <Text fontFamily="BOLD" fontSize="FS14">
            تبرع يومي يخصم تلقائيا كل يوم
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title={" "}
        centeredTitle={title}
        isShowHeaderShadow
        authHeader={true}
        style={{
          backgroundColor: Colors.WHITE,
          paddingHorizontal: Spacing.S16,
        }}
        onBack={goBack}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{flexGrow: 1}}>
        {renderRaiseCycle()}
        {renderNormalSection()}
        {renderChooseOptions(normalList)}
        {/* <Image source={{uri: imageUrl}} style={styles.image} /> */}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: Spacing.S16,
          bottom: Spacing.S20,
        }}>
        <Button
          onPress={() => {
            //   navigate("CardList", {
            //     title: "omar",
            //   });
          }}
          style={{}}
          type="standard"
          text="تبرعات الحملة"
        />
        <View style={{width: Spacing.S8}} />
        <Button
          type="default"
          text="تبرعات الحملة"
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: Colors.PRIMARY,
            borderRadius: 12,
            paddingHorizontal: Spacing.S35,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: Spacing.S16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "#FF0000",
  },
  image: {
    width: "100%",
    height: 380,
  },
  progressContainer: {
    marginTop: Spacing.S20,
    paddingVertical: Spacing.S8,
    paddingHorizontal: Spacing.S16,
    justifyContent: "flex-start",
  },
  progressText: {
    textAlign: "left",
    marginBottom: Spacing.S8,
  },
  raisedText: {
    textAlign: "left",
    marginTop: Spacing.S8,
    color: "#000000",
  },
  contentContainer: {
    paddingHorizontal: Spacing.S16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: Typography.FS13,
    fontFamily: Typography.MEDIUM,
    color: "#000000",
  },
  countryLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  flagsContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  flag: {
    width: getWidth(32),
    height: getHeight(16),
  },
  donateButton: {
    backgroundColor: "#2563EB",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  donateButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Payment;
