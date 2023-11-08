import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const Upload = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fill="#FB6107"
      d="M16.125 12.662C15.558 9.428 13.033 7 10 7c-2.408 0-4.5 1.537-5.542 3.787C1.95 11.088 0 13.479 0 16.375 0 19.478 2.242 22 5 22h10.833c2.3 0 4.167-2.1 4.167-4.688 0-2.475-1.708-4.48-3.875-4.65Zm-4.458 2.775v3.75H8.333v-3.75h-2.5L10 10.75l4.167 4.688h-2.5Z"
    />
  </Svg>
);
export default Upload;
