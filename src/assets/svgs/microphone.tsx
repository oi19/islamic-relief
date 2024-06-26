import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const Microphone = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 16 18" fill="none" {...props}>
    <Path
      fill={props.color || "#F8F8F9"}
      d="M14.276 7.189c.446 0 .808.356.808.797 0 3.587-2.75 6.548-6.276 6.946v1.604c0 .44-.362.798-.807.798a.802.802 0 0 1-.808-.797v-1.605C3.667 14.534.917 11.572.917 7.986c0-.44.362-.797.807-.797.446 0 .808.356.808.797 0 2.978 2.453 5.4 5.469 5.4 3.015 0 5.468-2.422 5.468-5.4 0-.44.362-.797.807-.797ZM8.146.667c2.003 0 3.627 1.603 3.627 3.58v3.854c0 1.977-1.624 3.58-3.627 3.58h-.291c-2.003 0-3.627-1.603-3.627-3.58V4.248C4.228 2.27 5.852.667 7.855.667h.291Z"
    />
  </Svg>
);
export default Microphone;
