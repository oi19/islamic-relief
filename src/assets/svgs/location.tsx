import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const Location = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 35 35" fill="none" {...props}>
    <Path
      fill={props.color || "#FB6107"}
      d="M18 0C11.4 0 4.5 5.1 4.5 13.5c0 7.95 12 20.1 12.45 20.55.3.3.6.45 1.05.45.45 0 .75-.15 1.05-.45.45-.45 12.45-12.6 12.45-20.55C31.5 5.1 24.6 0 18 0Zm0 18c-2.55 0-4.5-1.95-4.5-4.5S15.45 9 18 9s4.5 1.95 4.5 4.5S20.55 18 18 18Z"
    />
  </Svg>
);
export default Location;
