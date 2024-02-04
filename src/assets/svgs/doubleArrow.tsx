import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const DoubleArrow = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 11 11" fill="none" {...props}>
    <Path
      fill="#F8F8F9"
      fillRule="evenodd"
      d="M.833 8.485a1 1 0 0 1 .419-.813l3.666-2.62a1 1 0 0 1 1.163 0l3.667 2.62a1 1 0 0 1 .418.813v.543a1 1 0 0 1-1.58.813L6.08 8.053a1 1 0 0 0-1.163 0L2.414 9.84a1 1 0 0 1-1.581-.813v-.543Zm0-4.666a1 1 0 0 1 .419-.814L4.918.385a1 1 0 0 1 1.163 0l3.667 2.62a1 1 0 0 1 .418.814v.542a1 1 0 0 1-1.58.814L6.08 3.385a1 1 0 0 0-1.163 0l-2.504 1.79A1 1 0 0 1 .833 4.36v-.542Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default DoubleArrow;
