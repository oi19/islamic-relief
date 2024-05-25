import * as React from "react";
import Svg, {SvgProps, G, Path} from "react-native-svg";

const ActiveStar = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.5 17.5L5.62215 20.5902L6.74472 14.0451L1.98943 9.40983L8.56107 8.45492L11.5 2.5L14.4389 8.45492L21.0106 9.40983L16.2553 14.0451L17.3779 20.5902L11.5 17.5Z"
      stroke="#007AFF"
      stroke-width="1.5"
      fill={props.color}
    />
  </Svg>
);

export default ActiveStar;
