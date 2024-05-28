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
import {countries} from "./data";
import Button from "../../components/shared/Button/Button";
import Header from "../../components/shared/Header";
import {Colors, Spacing, Typography} from "../../../styles";
import {getHeight, getWidth} from "../../../styles/dimensions";
import ViewRow from "../../components/shared/ViewRow/ViewRow";
import Text from "../../components/shared/Text/Text";
import Input from "../../components/shared/Input/Input";
// import ProgressBar from "@react-native-community/progress-bar-android";

const ItemDetail = () => {
  const {
    itemID,
    title,
    isCard,
    isFixed = false,
    buttonTitle,
    hasPorgress,
    isNews = false,
    fixedValue,
  } = useRoute<RouteProp<MainAppStackTypes, "ItemDetail">>().params;
  const params = useRoute().params;
  const {navigate, goBack} =
    useNavigationHooks<MainNavigationAllScreensTypes>();
  const [campaignData, setCampaignData] = useState(null);
  const [loading, setLoading] = useState(false);

  // console.warn(useRoute().params);
  // console.warn(params);

  // useEffect(() => {
  //   const fetchCampaignData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://api.example.com/campaigns/${itemID}`,
  //       );
  //       setCampaignData(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCampaignData();
  // }, [itemID]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (campaignData) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load campaign data.</Text>
      </View>
    );
  }

  const desc =
    "ساهمت خبرة الإغاثة الإسلامية الممتدة لأكثر من 35 عامًا في تقديم حلول ومشاريع مستدامة في أكثر من 30 دولة حول العالم، حيث تتضمَّن تدخلات الإغاثة الإسلامية عبر العالم في مكافحة الجوع تقديم حلول غذائية طويلة الأجل ومستدامة للمجتمعات الأكثر احتياجًا، ومن بين الحلول المستدامة التي توفرها مشاريع الإغاثة الإسلامية عبر العالم في مكافحة الجوع";

  // const {
  //   imageUrl,
  //   title,
  //   description,
  //   progressValue,
  //   targetValue,
  //   raisedValue,
  //   // countries,
  // } = campaignData;

  return (
    <View key={itemID} style={{flex: 1, backgroundColor: "white"}}>
      <ImageBackground
        source={require("../../../assets/images/logo.png")}
        style={styles.image}>
        <Header
          iconColor={Colors.WHITE}
          title=" "
          style={{paddingTop: Spacing.S40, backgroundColor: "transparent"}}
          // renderHeaderSideIcons={renderHeaderStartIcons}
          authHeader={false}
          onBack={goBack}
        />
      </ImageBackground>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{flexGrow: 1}}>
        {/* <Image source={{uri: imageUrl}} style={styles.image} /> */}

        {params?.hasProgress ? (
          <View style={styles.progressContainer}>
            <View
              style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text
                fontFamily="MEDIUM"
                fontSize="FS14"
                style={styles.progressText}>
                2,043,684$
              </Text>
              <Text
                fontFamily="MEDIUM"
                fontSize="FS14"
                style={styles.progressText}>
                30% تم التبرع بهم
              </Text>
            </View>
            <ProgressBar
              key={`Campain_${1}`}
              type="appLoading"
              progressStyle={{backgroundColor: "#C3C3C3"}}
              progressPercentage={70}
              onCompletion={() => {}}
              totalSteps={0}
              currentStep={0}
            />
            <Text fontFamily="MEDIUM" fontSize="FS14" style={styles.raisedText}>
              الهدف الإجمالي $5,000,000
            </Text>
          </View>
        ) : null}
        {false && (
          <Text style={[styles.title, {marginHorizontal: Spacing.S16}]}>
            {title}
          </Text>
        )}

        <View style={styles.contentContainer}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text fontFamily="BOLD" fontSize="FS18">
              {title}
            </Text>
            {isNews == false && <Button iconName="share" />}
          </View>
          {fixedValue && (
            <View style={{flexDirection: "row"}}>
              <Text fontFamily="MEDIUM" fontSize="FS18">
                {"تكلفة الفرد : "}
              </Text>
              <Text fontFamily="BOLD" fontSize="FS18" color="PRIMARY">
                {"$350"}
              </Text>
            </View>
          )}
          <TextInput
            style={styles.description}
            multiline={true}
            numberOfLines={7}
            value={desc}
            readOnly
          />
          {isNews == false && (
            <>
              <Text style={styles.countryLabel}>الدولة</Text>

              <View style={styles.flagsContainer}>
                {countries?.map((country, index) => (
                  <View
                    style={{
                      alignItems: "center",
                      flexDirection: "row",
                      marginEnd: Spacing.S16,
                    }}>
                    <Image
                      resizeMode="contain"
                      key={index}
                      // source={{uri: country.flagUrl}}
                      source={country.flagUrl}
                      style={styles.flag}
                    />
                    <Text>{country.title}</Text>
                  </View>
                ))}
              </View>
            </>
          )}
        </View>
      </ScrollView>

      <View style={{paddingHorizontal: Spacing.S16}}>
        <Button
          onPress={() => {
            const navigateTo: MainNavigationAllScreensTypes = isCard
              ? "Payment"
              : "CardList";

            const passedProp =
              isCard == false
                ? {
                    isFixed: isFixed,
                  }
                : {
                    title: title,
                  };
            navigate(navigateTo, passedProp);
          }}
          style={{
            bottom: Spacing.S20,
          }}
          type="standard"
          text={
            isCard ? (buttonTitle ? buttonTitle : "تبرع الان") : "تبرعات الحملة"
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // paddingHorizontal: Spacing.S16,
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
    marginBottom: Spacing.S16,
  },
  progressContainer: {
    // marginTop: Spacing.S20,
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

export default ItemDetail;
