import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const Delete = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 12 14" fill="none" {...props}>
    <Path
      fill="#fff"
      d="M1 12.25c0 .963.9 1.75 2 1.75h6c1.1 0 2-.787 2-1.75V3.5H1v8.75ZM11 .875H9L8.29.254A1.086 1.086 0 0 0 7.59 0H4.41c-.26 0-.52.096-.7.254L3 .875H1c-.55 0-1 .394-1 .875s.45.875 1 .875h10c.55 0 1-.394 1-.875s-.45-.875-1-.875Z"
    />
  </Svg>
);
export default Delete;
