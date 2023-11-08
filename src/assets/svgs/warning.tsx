import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const Warning = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fill="#fff"
      d="M4.253 20.053h15.1c1.544 0 2.506-1.675 1.734-3.008L13.537 4c-.772-1.333-2.697-1.333-3.469 0l-7.55 13.045c-.772 1.333.19 3.008 1.735 3.008Zm7.55-7.019a1.006 1.006 0 0 1-1.003-1.003v-2.005c0-.551.451-1.003 1.003-1.003.551 0 1.002.452 1.002 1.003v2.005c0 .552-.45 1.003-1.002 1.003Zm1.002 4.01H10.8V15.04h2.005v2.006Z"
    />
  </Svg>
);
export default Warning;
