import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const Change = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 19 14" fill="none" {...props}>
    <Path
      fill={props.color || "#F8F8F9"}
      d="m15.107 3.804-3.333 3.333h2.5a5.004 5.004 0 0 1-6.748 4.684c-.357-.134-.77-.082-1.04.188-.391.39-.318 1.046.19 1.263a6.589 6.589 0 0 0 2.598.532 6.665 6.665 0 0 0 6.667-6.667h2.5l-3.334-3.333ZM4.274 7.137a5.004 5.004 0 0 1 6.818-4.657c.314.124.68.077.918-.162.418-.417.34-1.118-.206-1.344A6.59 6.59 0 0 0 9.274.47a6.665 6.665 0 0 0-6.667 6.666h-2.5l3.334 3.334 3.333-3.334h-2.5Z"
    />
  </Svg>
);
export default Change;
