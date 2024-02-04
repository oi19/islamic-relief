import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const BottomTabBG = (props: SvgProps) => (
  <Svg width={374} height={91} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M2.18 10.92C0 15.198 0 20.8 0 32v27c0 11.201 0 16.802 2.18 21.08a20 20 0 0 0 8.74 8.74C15.198 91 20.8 91 32 91h311c11.201 0 16.802 0 21.08-2.18a19.998 19.998 0 0 0 8.74-8.74C375 75.802 375 70.2 375 59V32c0-11.201 0-16.802-2.18-21.08a19.998 19.998 0 0 0-8.74-8.74C359.802 0 354.201 0 343 0H238.5C232.149 0 227 5.149 227 11.5c0 21.815-17.685 39.5-39.5 39.5S148 33.315 148 11.5C148 5.149 142.851 0 136.5 0H32C20.799 0 15.198 0 10.92 2.18a20 20 0 0 0-8.74 8.74Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BottomTabBG;
