import * as React from "react";
import Svg, {SvgProps, G, Path, Circle} from "react-native-svg";
const ProfileUserIcon = (props: SvgProps) => (
  <Svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
    {/* <G */}
    {/* // stroke={props.color || "gray"} */}
    {/* // fill={props.color || "none"}
    // strokeLinecap="round"
    // strokeLinejoin="round"
    // strokeWidth={2}
    // clipRule="evenodd"
    // > */}
    {/* <Path d="M11.985 15.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948ZM11.985 12.006A4.596 4.596 0 1 0 7.389 7.41a4.58 4.58 0 0 0 4.564 4.596h.032Z" /> */}

    {/* <Path
      d="M6.99568 8.90139C6.9077 8.89281 6.80213 8.89281 6.70536 8.90139C4.61148 8.83274 2.94873 7.15934 2.94873 5.09976C2.94873 2.99728 4.69066 1.28955 6.85492 1.28955C9.01034 1.28955 10.7611 2.99728 10.7611 5.09976C10.7523 7.15934 9.08952 8.83274 6.99568 8.90139Z"
      // stroke="#969696"
      stroke={props.color || "#969696"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M2.59677 12.068C0.467743 13.4582 0.467743 15.7237 2.59677 17.1053C5.01612 18.6843 8.98388 18.6843 11.4032 17.1053C13.5323 15.7151 13.5323 13.4496 11.4032 12.068C8.99268 10.4975 5.02492 10.4975 2.59677 12.068Z"
      stroke={props.color || "#969696"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    </G> */}

    <Circle cx="20" cy="20" r="20" fill={props?.circleColor || "#DDEEFB"} />
    <Path
      d="M28 29V27C28 25.9391 27.5786 24.9217 26.8284 24.1716C26.0783 23.4214 25.0609 23 24 23H16C14.9391 23 13.9217 23.4214 13.1716 24.1716C12.4214 24.9217 12 25.9391 12 27V29"
      stroke={props.color || "#2F76BC"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20 11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke={props.color || "#2F76BC"}
    />
  </Svg>
);
export default ProfileUserIcon;
