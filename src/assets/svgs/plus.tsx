import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const Plus = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 10 10" {...props}>
    <Path
      id="Icon_awesome-plus"
      data-name="Icon awesome-plus"
      d="M9.286,6.179H6.071V2.964a.714.714,0,0,0-.714-.714H4.643a.714.714,0,0,0-.714.714V6.179H.714A.714.714,0,0,0,0,6.893v.714a.714.714,0,0,0,.714.714H3.929v3.214a.714.714,0,0,0,.714.714h.714a.714.714,0,0,0,.714-.714V8.321H9.286A.714.714,0,0,0,10,7.607V6.893A.714.714,0,0,0,9.286,6.179Z"
      transform="translate(10 12.25) rotate(180)"
      fill={props.color || "#4b4b4b"}
    />
  </Svg>
);

export default Plus;
