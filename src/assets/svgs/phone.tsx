import * as React from "react";
import Svg, {SvgProps, G, Path} from "react-native-svg";

const Phone = (props: SvgProps) => (
  <Svg
    id="vuesax_linear_call"
    data-name="vuesax/linear/call"
    width={24}
    height={24}
    viewBox="0 0 16 16"
    {...props}>
    <G id="call">
      <G id="call-2" data-name="call" transform="translate(1.333 1.333)">
        <Path
          id="Vector"
          d="M13.313,10.887a1.7,1.7,0,0,1-.167.727,2.751,2.751,0,0,1-.453.68,3.006,3.006,0,0,1-1.093.787,3.348,3.348,0,0,1-1.3.253,5.556,5.556,0,0,1-2.173-.487,11.71,11.71,0,0,1-2.293-1.32A19.167,19.167,0,0,1,3.647,9.66a18.942,18.942,0,0,1-1.86-2.18A11.885,11.885,0,0,1,.48,5.207,5.615,5.615,0,0,1,0,3.027,3.449,3.449,0,0,1,.24,1.74,3.068,3.068,0,0,1,1.007.627,1.953,1.953,0,0,1,2.393,0a1.253,1.253,0,0,1,.54.12A1.087,1.087,0,0,1,3.38.493l1.547,2.18a2.282,2.282,0,0,1,.267.467,1.054,1.054,0,0,1,.093.407.9.9,0,0,1-.14.473,2.268,2.268,0,0,1-.373.473l-.507.527a.357.357,0,0,0-.107.267.605.605,0,0,0,.02.153c.02.053.04.093.053.133a5.532,5.532,0,0,0,.62.853c.3.347.62.7.967,1.053s.707.68,1.06.98a5.117,5.117,0,0,0,.86.613c.033.013.073.033.12.053a.46.46,0,0,0,.167.027A.367.367,0,0,0,8.3,9.04l.507-.5a2.045,2.045,0,0,1,.48-.373.888.888,0,0,1,.473-.14,1.064,1.064,0,0,1,.407.087,2.578,2.578,0,0,1,.467.26L12.84,9.94a1.011,1.011,0,0,1,.367.427A1.368,1.368,0,0,1,13.313,10.887Z"
          fill="none"
          stroke={props.color || "#FB6107"}
          strokeWidth={1.5}
        />
      </G>
      <Path
        id="Vector-2"
        data-name="Vector"
        d="M0,0H16V16H0Z"
        fill="none"
        opacity={0}
      />
    </G>
  </Svg>
);

export default Phone;
