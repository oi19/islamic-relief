import * as React from "react";
import Svg, {SvgProps, G, Path} from "react-native-svg";

const Clock = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 16 16" {...props}>
    <G id="clock">
      <Path
        id="Vector"
        d="M13.333,6.667A6.667,6.667,0,1,1,6.667,0,6.669,6.669,0,0,1,13.333,6.667Z"
        transform="translate(1.333 1.333)"
        fill="none"
        stroke={props.color || "#1e103a"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
      <Path
        id="Vector-2"
        data-name="Vector"
        d="M2.72,5.113.653,3.88A1.476,1.476,0,0,1,0,2.733V0"
        transform="translate(7.753 5.007)"
        fill="none"
        stroke={props.color || "#1e103a"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
      <Path
        id="Vector-3"
        data-name="Vector"
        d="M0,0H16V16H0Z"
        fill="none"
        opacity={0}
      />
    </G>
  </Svg>
);

export default Clock;
