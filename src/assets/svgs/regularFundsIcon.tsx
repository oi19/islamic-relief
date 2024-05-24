import * as React from "react";
import Svg, {SvgProps, Circle, Path} from "react-native-svg";
const RegularFundsIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props} viewBox="0 0 40 40">
    <Circle cx="20" cy="20" r="20" fill="#DDEEFB" />
    <Path
      d="M25.6568 25.6568C24.2092 27.1046 22.2092 28 20 28C15.5817 28 12 24.4183 12 20C12 15.5817 15.5817 12 20 12C22.2092 12 24.2092 12.8954 25.6568 14.3432C26.3937 15.08 28 16.8889 28 16.8889"
      stroke="#2F76BC"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M28 12.8889V16.8889H24"
      stroke="#2F76BC"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default RegularFundsIcon;
