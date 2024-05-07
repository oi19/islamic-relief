import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Arrow = (props: SvgProps) => (
  // <Svg viewBox="0 0 512 512" width={24} height={24} {...props}>
  //   <Path
  //     fill={props.color || "white"}
  //     d="M353 450a15 15 0 0 1-10.61-4.39L157.5 260.71a15 15 0 0 1 0-21.21L342.39 54.6a15 15 0 1 1 21.22 21.21L189.32 250.1l174.29 174.29A15 15 0 0 1 353 450Z"
  //     data-name={1}
  //     stroke-width="0.2"
  //   />
  // </Svg>

  <Svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5.84243 16.6329C5.93436 16.725 6.04356 16.7981 6.16379 16.848C6.28401 16.8979 6.4129 16.9236 6.54306 16.9236C6.67323 16.9236 6.80211 16.8979 6.92234 16.848C7.04256 16.7981 7.15176 16.725 7.24369 16.6329L13.8224 10.0541C13.8958 9.98087 13.9541 9.89387 13.9938 9.7981C14.0335 9.70233 14.054 9.59967 14.054 9.49598C14.054 9.3923 14.0335 9.28963 13.9938 9.19386C13.9541 9.09809 13.8958 9.0111 13.8224 8.93786L7.24369 2.35911C6.85577 1.97119 6.23035 1.97119 5.84243 2.35911C5.45452 2.74702 5.45452 3.37244 5.84243 3.76036L11.5741 9.49994L5.83452 15.2395C5.45452 15.6195 5.45452 16.2529 5.84243 16.6329Z"
      // fill="#1E232C"
      fill={props.color || "white"}
      // stroke="#1E232C"
      // stroke-width="0.2"
    />
  </Svg>
);

export default Arrow;
