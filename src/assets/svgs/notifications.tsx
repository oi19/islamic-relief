import * as React from "react";
import Svg, {SvgProps, G, Path, Defs, ClipPath} from "react-native-svg";
const Notifications = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke="#A7A7A7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)">
      <Path
        d="M12 16.31c5.64 0 8.248-.662 8.5-3.315 0-2.652-1.819-2.481-1.819-5.735 0-2.541-2.636-5.432-6.681-5.432S5.319 4.719 5.319 7.26c0 3.254-1.819 3.083-1.819 5.735.253 2.663 2.862 3.314 8.5 3.314Z"
        clipRule="evenodd"
      />
      <Path d="M14.389 19.06c-1.364 1.383-3.492 1.4-4.87 0" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v21.931H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Notifications;
