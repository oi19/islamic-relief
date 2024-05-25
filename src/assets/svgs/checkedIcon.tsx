import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const CheckedIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      d="M1 5.33333L5.33333 9.66667L14 1"
      stroke="#0ABE47"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default CheckedIcon;
