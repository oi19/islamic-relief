import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const Cash = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 12 12" fill="none" {...props}>
    <Path
      fill="#fff"
      d="M10.712.667H2.06c-.6 0-1.076.587-1.076 1.32L.979 9.902c0 .732.482 1.32 1.082 1.32h8.65c.6 0 1.082-.588 1.082-1.32V1.986c0-.732-.481-1.319-1.081-1.319Zm-.541 9.236h-7.57c-.297 0-.54-.297-.54-.66V5.945h8.65v3.298c0 .363-.243.66-.54.66Zm.54-6.597h-8.65v-1.32h8.65v1.32Z"
    />
  </Svg>
);
export default Cash;
