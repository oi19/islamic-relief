import React, {useEffect, useRef, useState} from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
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
import Button from "../../components/shared/Button/Button";
import Header from "../../components/shared/Header";
import {Colors, Spacing, Typography} from "../../../styles";
import {getHeight, getWidth, scale} from "../../../styles/dimensions";
import Text from "../../components/shared/Text/Text";
import Input from "../../components/shared/Input/Input";
import {Svgs} from "../../../assets";
import RegularPaymentModal from "../../../components/models/RegularPaymentModal/RegularPaymentModal";

const normalList = [
  {id: 0, amount: 10},
  {id: 1, amount: 50},
  {id: 2, amount: 100},
  {id: 3, amount: 500},
];
const fixedList = [
  {id: 0, amount: 5},
  {id: 1, amount: 10},
  {id: 2, amount: 15},
  {id: 3, amount: 20},
];

const Payment = () => {
  const {navigate, goBack} =
    useNavigationHooks<MainNavigationAllScreensTypes>();
  const {
    params: {title, isFixed, regularType, regularTypeNames},
  } = useRoute<RouteProp<MainAppStackTypes, "Payment">>();

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [inputAmount, setInputAmount] = useState<number>(0);
  const [selectedPaymenWay, setSelectedPaymentWay] = useState<{
    id: number;
    text: string;
  }>();
  const regularPaymentModalRef = useRef(null);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setInputAmount(amount);
  };

  const handleInputChange = (text: number) => {
    setInputAmount(text);
    if (!normalList.some(item => item.amount === text)) {
      setSelectedAmount(null);
    }
  };

  const onRegularPaymentSelect = (data: any) => {
    // console.warn(data);
    setSelectedPaymentWay(data);
    setTimeout(() => {
      regularPaymentModalRef?.current?.close();
    }, 100);
  };

  const renderChooseOptions = (
    list: {id: number; amount: number}[],
    isFixedList?: boolean,
  ) => {
    return (
      <View
        style={{
          width: "100%",
          // backgroundColor: "red",
          marginTop: Spacing.S16,
        }}>
        <Text fontFamily="MEDIUM" fontSize="FS14">
          المبالغ المقترحة
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: Spacing.S16,
          }}>
          {list.map((value: {id: number; amount: number}) => {
            return (
              <TouchableOpacity
                key={value.id}
                onPress={() => handleAmountSelect(value.amount)}
                style={[
                  {
                    backgroundColor:
                      selectedAmount === value.amount
                        ? Colors.PRIMARY
                        : Colors.WHITE,
                    borderWidth: selectedAmount !== value.amount ? 1 : 0,
                    paddingHorizontal: scale(25),
                    paddingVertical: Spacing.S11,
                    borderRadius: 12,
                    borderColor: Colors.PRIMARY,
                    elevation: 1,
                  },
                ]}>
                <Text
                  fontFamily="BOLD"
                  fontSize="FS14"
                  color={selectedAmount !== value.amount ? "PRIMARY" : "WHITE"}>
                  {value.amount} {isFixed && "x"}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const renderNormalSection = () => {
    return (
      <View style={{marginTop: Spacing.S16}}>
        <Text fontFamily="BOLD" fontSize="FS16">
          حدد مبلغ التبرع{" "}
        </Text>
        <Input
          amountIcon="about"
          value={inputAmount.toString()}
          onChangeText={text => handleInputChange(Number(text))}
          keyboardType="number-pad"
          placeholder="المبلغ"
          inputContainerStyle={{borderWidth: 1}}
        />
      </View>
    );
  };

  const renderRaiseCycle = () => {
    return (
      <View style={{marginTop: Spacing.S16}}>
        <Text fontFamily="BOLD" fontSize="FS16">
          دورة التبرع
        </Text>
        {regularType == "direct" ? (
          <View style={{backgroundColor: "#F3FDFC", padding: Spacing.S16}}>
            <View style={{flexDirection: "row", marginVertical: Spacing.S16}}>
              <Svgs name="bag" />
              <Text
                style={{marginStart: Spacing.S16}}
                fontFamily="BOLD"
                fontSize="FS14"
                color="#3DA599">
                يومي{" "}
              </Text>
            </View>
            <Text fontFamily="BOLD" fontSize="FS14">
              تبرع يومي يخصم تلقائيا كل يوم
            </Text>
          </View>
        ) : regularType == "inDirect" ? (
          <TouchableOpacity
            onPress={() => {
              regularPaymentModalRef?.current?.present();
            }}
            style={{
              height: 56,
              width: "100%",
              borderWidth: 2,
              borderColor: Colors.INPUT_BORDER,
              flexDirection: "row",
              justifyContent: "space-between",
              borderRadius: 12,
              alignItems: "center",
              paddingHorizontal: Spacing.S16,
              marginTop: Spacing.S16,
            }}>
            <Text fontFamily="MEDIUM" fontSize="FS14" color="PRIMARY">
              {selectedPaymenWay?.text ?? "اختر دورة تبرعك"}
            </Text>
            <Svgs style={{paddingTop: 11}} name="arrow_down" />
            {/* //         transform: [{translateY: imageSlideAnim}], */}
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };

  const renderFixedList = () => {
    return (
      <View style={{marginTop: Spacing.S16}}>
        <Text fontFamily="BOLD" fontSize="FS16">
          مبلغ التبرع
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: Spacing.S16,
          }}>
          <View style={{width: getWidth(76), height: getHeight(79)}}>
            <Image
              source={require("../../.././assets/images/logo.png")}
              style={{width: "100%", height: "100%", borderRadius: 12}}
            />
          </View>
          <View style={{flex: 1, marginStart: Spacing.S16}}>
            <Text fontFamily="MEDIUM" fontSize="FS14">
              {title}
            </Text>
            <Text>{"ثمن الزكاة لفرد واحد"}</Text>
          </View>
          <Text>{"25$"}</Text>
        </View>
        <View style={{marginTop: Spacing.S35}}>
          <Text fontFamily="BOLD" fontSize="FS14">
            حدد العدد
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Button
              style={{
                // backgroundColor: Colors.PRIMARY,
                borderColor: Colors.INPUT_BORDER,
                padding: Spacing.S16,
                borderRadius: 14,
                paddingVertical: Spacing.S16,
              }}
              containerStyle={{
                borderWidth: 1,
                borderRadius: 12,
                borderColor: Colors.INPUT_BORDER,
              }}
              textStyle={{color: "WHITE"}}>
              <Svgs
                name="minus"
                color="white"
                strokeWidth={1}
                width={15}
                height={15}
              />
            </Button>
            <Button
              disabled
              style={{
                borderColor: Colors.INPUT_BORDER,
                paddingHorizontal: Spacing.S16,
                borderRadius: 18,
              }}
              containerStyle={{
                borderWidth: 1,
                borderRadius: 14,
                borderColor: Colors.INPUT_BORDER,
                marginHorizontal: Spacing.S16,
              }}
              text={inputAmount.toString()}
            />
            <Button
              containerStyle={{
                borderRadius: 14,
                backgroundColor: Colors.PRIMARY,
              }}
              style={{
                backgroundColor: Colors.PRIMARY,
                padding: Spacing.S16,
                borderRadius: 14,
                paddingVertical: Spacing.S16,
              }}
              textStyle={{color: "WHITE"}}
              // text="+"
            >
              <Svgs
                name="plus"
                color="white"
                strokeWidth={1}
                width={15}
                height={15}
              />
            </Button>
          </View>
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
        {regularType == "direct" && renderRaiseCycle()}
        {isFixed ? renderFixedList() : renderNormalSection()}
        {renderChooseOptions(isFixed ? fixedList : normalList)}
        {regularType == "inDirect" && renderRaiseCycle()}
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
          text={` تبرع ب ${isFixed ? inputAmount * 25 : inputAmount} $`}
          textStyle={{fontFamily: "BOLD", fontSize: "FS16"}}
        />
        <View style={{width: Spacing.S8}} />
        <Button
          type="default"
          text="اضف الى السلة"
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: Colors.PRIMARY,
            borderRadius: 12,
            paddingHorizontal: scale(30),
          }}
        />
      </View>
      <RegularPaymentModal
        forwardRef={regularPaymentModalRef}
        onSelect={data => {
          onRegularPaymentSelect(data);
        }}
        selectedId={selectedPaymenWay?.id}
      />
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
  input: {
    // height: 40,
    borderColor: Colors.INPUT_BORDER,
    borderWidth: 1,
    // borderWidth: 1,
  },
});

export default Payment;
