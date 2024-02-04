import * as React from "react";
import Svg, {SvgProps, G, Path} from "react-native-svg";
const User = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G
      stroke={props.color || "gray"}
      fill={props.color || "none"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipRule="evenodd">
      <Path d="M11.985 15.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948ZM11.985 12.006A4.596 4.596 0 1 0 7.389 7.41a4.58 4.58 0 0 0 4.564 4.596h.032Z" />
    </G>
  </Svg>
);
export default User;
