import * as React from "react";
import Svg, {SvgProps, G, Path, Defs, ClipPath} from "react-native-svg";
const Facebook = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#1976D2"
        fillRule="evenodd"
        d="M4 0h24c2.206 0 4 1.794 4 4v24c0 2.206-1.794 4-4 4h-6V21h3l2-5h-5v-4c0-1.015.757-1.009 1.737-1.001L24 11h2V6h-4a6 6 0 0 0-6 6v4h-4v5h4v11H4c-2.206 0-4-1.794-4-4V4c0-2.206 1.794-4 4-4Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Facebook;
