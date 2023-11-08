import * as React from "react";
import Svg, {SvgProps, Circle, Path} from "react-native-svg";
const Reset = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={12} cy={12} r={11.5} fill="#fff" stroke="#FB6107" />
    <Path
      fill="#FB6107"
      d="M7.45 16.919c.167.167.376.25.606.25.23 0 .438-.083.605-.25L12 13.579l3.34 3.34c.166.167.375.25.604.25a.857.857 0 0 0 .605-1.46l-3.339-3.34 3.34-3.339a.857.857 0 0 0-1.21-1.21L12 11.159l-3.34-3.34A.857.857 0 0 0 7.45 9.03l3.34 3.34-3.34 3.338a.857.857 0 0 0 0 1.21Z"
    />
  </Svg>
);
export default Reset;
