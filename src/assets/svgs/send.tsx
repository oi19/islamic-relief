import * as React from "react";
import Svg, {SvgProps, G, Path} from "react-native-svg";

const Send = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 13.285 13.285" {...props}>
    <G
      id="Icon_feather-send"
      data-name="Icon feather-send"
      transform="translate(0.5 0.707)">
      <Path
        id="Path_32"
        data-name="Path 32"
        d="M20.393,2.5,13.75,9.143"
        transform="translate(-8.315 -2.5)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
      <Path
        id="Path_33"
        data-name="Path 33"
        d="M14.578,2.5,10.35,14.578,7.935,9.143,2.5,6.727Z"
        transform="translate(-2.5 -2.5)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
    </G>
  </Svg>
);

export default Send;
