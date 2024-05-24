import * as React from "react";
import Svg, {SvgProps, Circle, Path} from "react-native-svg";
const LogoutIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props} viewBox="0 0 40 40">
    <Circle cx="20" cy="20" r="20" fill="background: rgba(238, 0, 4, 0.15)" />
    <Path
      d="M17.5 27.5H14.1667C13.7246 27.5 13.3007 27.3244 12.9882 27.0118C12.6756 26.6993 12.5 26.2754 12.5 25.8333V14.1667C12.5 13.7246 12.6756 13.3007 12.9882 12.9882C13.3007 12.6756 13.7246 12.5 14.1667 12.5H17.5"
      stroke="#EE0004"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M23.3335 24.1666L27.5002 20L23.3335 15.8333"
      stroke="#EE0004"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M27.5 20H17.5"
      stroke="#EE0004"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default LogoutIcon;

<svg
  width="40"
  height="40"
  viewBox="0 0 40 40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="20" fill="#EE0004" fill-opacity="0.15" />
  <path
    d="M17.5 27.5H14.1667C13.7246 27.5 13.3007 27.3244 12.9882 27.0118C12.6756 26.6993 12.5 26.2754 12.5 25.8333V14.1667C12.5 13.7246 12.6756 13.3007 12.9882 12.9882C13.3007 12.6756 13.7246 12.5 14.1667 12.5H17.5"
    stroke="#EE0004"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M23.3335 24.1666L27.5002 20L23.3335 15.8333"
    stroke="#EE0004"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M27.5 20H17.5"
    stroke="#EE0004"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>;
