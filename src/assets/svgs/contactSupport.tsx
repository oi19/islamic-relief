import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const ContactSupport = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 35 35" fill="none" {...props}>
    <Path
      fill="#FB6107"
      d="M16.613 2.89c-6.775 0-12.279 5.503-12.279 12.278s5.504 12.278 12.279 12.278h.722v4.334c7.02-3.38 11.556-10.112 11.556-16.612 0-6.775-5.504-12.279-12.278-12.279Zm1.444 20.945h-2.889v-2.89h2.89v2.89Zm0-5.056h-2.889c0-4.695 4.334-4.334 4.334-7.223 0-1.589-1.3-2.889-2.89-2.889a2.898 2.898 0 0 0-2.888 2.89h-2.89a5.777 5.777 0 0 1 5.779-5.779 5.777 5.777 0 0 1 5.778 5.778c0 3.612-4.334 3.973-4.334 7.223Z"
    />
  </Svg>
);
export default ContactSupport;
