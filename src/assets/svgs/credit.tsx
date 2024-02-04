import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const Credit = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 13 12" fill="none" {...props}>
    <Path
      stroke={props.color || "#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.125H1m11 .625V3c0-.7 0-1.05-.12-1.317a1.186 1.186 0 0 0-.48-.547C11.163 1 10.855 1 10.24 1H2.76c-.616 0-.924 0-1.16.136-.206.12-.375.311-.48.547C1 1.95 1 2.3 1 3v4.75c0 .7 0 1.05.12 1.317.105.236.274.427.48.547.236.136.544.136 1.16.136h3.465M9.8 11s1.65-.894 1.65-2.234V7.202l-1.203-.489a1.177 1.177 0 0 0-.894 0l-1.203.489v1.564C8.15 10.106 9.8 11 9.8 11Z"
    />
  </Svg>
);
export default Credit;
