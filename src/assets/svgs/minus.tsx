import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const Minus = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 12 3" {...props}>
    <Path
      id="Icon_awesome-window-minimize"
      data-name="Icon awesome-window-minimize"
      d="M10.875,24.75H1.125A1.125,1.125,0,0,0,0,25.875v.75A1.125,1.125,0,0,0,1.125,27.75h9.75A1.125,1.125,0,0,0,12,26.625v-.75A1.125,1.125,0,0,0,10.875,24.75Z"
      transform="translate(0 -24.75)"
      fill="#4b4b4b"
    />
  </Svg>
);

export default Minus;
