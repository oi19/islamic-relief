import * as React from "react";
import Svg, {SvgProps, Circle, Path, Rect} from "react-native-svg";
const AddPaymentIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props} viewBox="0 0 40 40">
    <Rect width="40" height="40" rx="12" fill="#EEF5FD" />
    <Path
      d="M16.5 20.1667H23.8333H16.5ZM20.1667 23.8333V16.5V23.8333ZM17.4167 29.3333H22.9167C27.5 29.3333 29.3333 27.5 29.3333 22.9167V17.4167C29.3333 12.8333 27.5 11 22.9167 11H17.4167C12.8333 11 11 12.8333 11 17.4167V22.9167C11 27.5 12.8333 29.3333 17.4167 29.3333Z"
      fill="#0065B0"
    />
    <Path
      d="M16.5 20.1667H23.8333M20.1667 23.8333V16.5M17.4167 29.3333H22.9167C27.5 29.3333 29.3333 27.5 29.3333 22.9167V17.4167C29.3333 12.8333 27.5 11 22.9167 11H17.4167C12.8333 11 11 12.8333 11 17.4167V22.9167C11 27.5 12.8333 29.3333 17.4167 29.3333Z"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default AddPaymentIcon;
