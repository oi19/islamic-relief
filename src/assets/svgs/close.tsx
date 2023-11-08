import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Close = (props: SvgProps) => (
  <Svg
    data-name="Layer 1"
    height={24}
    id="Layer_1"
    viewBox="0 0 200 200"
    width={24}
    {...props}>
    <Path
      fill={props.color || "gray"}
      d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"
    />
  </Svg>
);

export default Close;
