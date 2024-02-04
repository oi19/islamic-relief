import React from "react";
import {TouchableOpacity as TouchableOpacityRN, View} from "react-native";
import {Path, Svg} from "react-native-svg";
import {Svgs} from "../../../assets";
import {isRTL} from "../../../locals/i18n-config";
import {Colors} from "../../../styles";
import {scale} from "../../../styles/dimensions";
import {RoundedIcon, ViewRow} from "../../atoms";
import {styles} from "./styles";
import TabIcon from "./TabIcon";

type VideoCallControlProps = {
  onPress?: () => void;
};
const VideoCallControl: React.FC<VideoCallControlProps> = () => {
  return (
    <View
      style={[
        styles.middleBtnContainer,
        {
          transform: [{scaleX: isRTL() ? -1 : 1}],
        },
      ]}
      // key={`${index}--${route.key}`}
    >
      <Svg width={375} height={95} viewBox="0 0 375 95" fill="none">
        <Path
          fill="#FB6107"
          fillRule="evenodd"
          d="M187.5 39.217c15.584 0 29.026-9.17 35.225-22.409C226.707 8.306 233.986.342 243.375.342H352c12.703 0 23 10.297 23 23V72c0 12.702-10.297 23-23 23H23C10.297 95 0 84.702 0 72V23.342c0-12.703 10.297-23 23-23h108.625c9.389 0 16.668 7.964 20.65 16.466 6.199 13.239 19.641 22.409 35.225 22.409Z"
          clipRule="evenodd"
        />
        <ViewRow style={styles.buttonActions}>
          <View style={styles.row}>
            <TabIcon icon="volume" />

            <TabIcon icon="microphone" />
          </View>
          <RoundedIcon
            style={styles.swipeContainer}
            size={15}
            icon="doubleArrow"
            backgroundColor="TRANSPARENT"
            iconStyle={styles.swipeIcon}
            title="Swipe up to send messages"
            titleStyle={styles.swipeTitle}
          />
          <View style={styles.row}>
            <TabIcon icon="video" />
            <TabIcon icon="change" />
          </View>
        </ViewRow>
      </Svg>

      <TouchableOpacityRN
        style={[
          styles.middleBtn,
          {
            backgroundColor: Colors.RED_B81532,
          },
        ]}
        //   onPress={onPress}
        //   onLongPress={onLongPress}
      >
        <View style={{justifyContent: "center", alignItems: "center"}}>
          <Svgs
            name="closeCall"
            width={scale(33)}
            color={Colors.WHITE}
            rotate="left"
          />
        </View>
      </TouchableOpacityRN>
    </View>
  );
};

export default VideoCallControl;
