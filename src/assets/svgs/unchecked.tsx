import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const UnChecked = (props: SvgProps) => (
  <Svg id="check" width={24} height={24} viewBox="0 0 16 16" {...props}>
    <Path
      id="check-2"
      data-name="check"
      d="M8,0a8,8,0,1,0,8,8A8.009,8.009,0,0,0,8,0Zm4.055,6.3L7.721,10.638a.666.666,0,0,1-.943,0L4.612,8.471a.667.667,0,0,1,.943-.943l1.7,1.7,3.862-3.862a.667.667,0,0,1,.943.943Zm0,0"
      fill="#8d8d8d"
    />
  </Svg>
);

export default UnChecked;
