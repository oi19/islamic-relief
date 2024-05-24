import * as React from "react";
import Svg, {SvgProps, Circle, Path} from "react-native-svg";
const LangIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props} viewBox="0 0 40 40">
    <Circle cx="20" cy="20" r="20" fill="#DDEEFB" />
    <Path
      d="M22.9761 22.2173H16.9347L15.4748 24.9684L14.3587 24.4009L19.9554 13.8468L25.5522 24.4009L24.4361 24.9684L22.9761 22.2173ZM22.3211 20.9836L19.9554 16.5239L17.5898 20.9836H22.3211Z"
      fill="#2F76BC"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.7843 10H16.127C14.493 10.0088 12.9295 10.653 11.7805 11.7909C10.6314 12.9287 9.99101 14.467 10.0001 16.0673V23.4327C9.99101 25.033 10.6314 26.5712 11.7805 27.7091C12.9295 28.8469 14.493 29.4912 16.127 29.5H23.7843C25.4183 29.4912 26.9818 28.8469 28.1308 27.7091C29.28 26.5712 29.9203 25.033 29.9113 23.4327V16.0673C29.9203 14.467 29.28 12.9287 28.1308 11.7909C26.9818 10.653 25.4183 10.0088 23.7843 10Z"
      stroke="#2F76BC"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default LangIcon;
