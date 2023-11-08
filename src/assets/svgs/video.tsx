import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const Video = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fill={props.color || "#FB6107"}
      d="M8.235 3.21c1.513 0 2.57 1.042 2.57 2.537v4.3c0 1.494-1.057 2.537-2.57 2.537h-3.62c-1.514 0-2.571-1.043-2.571-2.538V5.747c0-1.495 1.057-2.538 2.57-2.538h3.62Zm5.033 1.486a.864.864 0 0 1 .858.04c.262.164.418.45.418.762v4.798a.893.893 0 0 1-.883.897.865.865 0 0 1-.394-.096l-.926-.467a1.014 1.014 0 0 1-.555-.91V6.074c0-.389.213-.738.555-.91l.927-.468Z"
    />
  </Svg>
);
export default Video;
