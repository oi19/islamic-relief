import * as React from "react";
import Svg, {SvgProps, G, Path, Defs, ClipPath} from "react-native-svg";
const Facebook = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M14.7956 25V14.0703H18.3496L18.8779 9.79094H14.7956V7.06518C14.7956 5.83032 15.1272 4.98485 16.8355 4.98485H19V1.16959C17.9468 1.05249 16.8882 0.995949 15.829 1.00023C12.6877 1.00023 10.5308 2.98987 10.5308 6.64245V9.78294H7V14.0623H10.5386V25H14.7956Z"
        fill="#4092FF"
      />
      {/* <Path
        fill="#1976D2"
        fillRule="evenodd"
        d="M4 0h24c2.206 0 4 1.794 4 4v24c0 2.206-1.794 4-4 4h-6V21h3l2-5h-5v-4c0-1.015.757-1.009 1.737-1.001L24 11h2V6h-4a6 6 0 0 0-6 6v4h-4v5h4v11H4c-2.206 0-4-1.794-4-4V4c0-2.206 1.794-4 4-4Z"
        clipRule="evenodd"
      /> */}
    </G>
    {/* <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs> */}
  </Svg>
);
export default Facebook;
