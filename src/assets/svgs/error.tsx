import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const Error = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0Zm1.2 18h-2.4v-2.4h2.4V18Zm0-4.8h-2.4V6h2.4v7.2Z"
    />
  </Svg>
);
export default Error;
