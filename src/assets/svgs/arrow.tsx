import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Arrow = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={24} height={24} {...props}>
    <Path
      fill={props.color || "white"}
      d="M353 450a15 15 0 0 1-10.61-4.39L157.5 260.71a15 15 0 0 1 0-21.21L342.39 54.6a15 15 0 1 1 21.22 21.21L189.32 250.1l174.29 174.29A15 15 0 0 1 353 450Z"
      data-name={1}
    />
  </Svg>
);

export default Arrow;
