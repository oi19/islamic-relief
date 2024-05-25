import * as React from "react";
import Svg, {SvgProps, Path, Rect} from "react-native-svg";

const ChatIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props} viewBox="0 0 40 40">
    <Rect width="31" height="31" rx="6" fill="#B94D74" />
    <Path
      d="M12 14H19"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <Path
      d="M12 17H17"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <Path
      d="M19.75 8.13715C18.4997 7.41392 17.0482 7 15.5 7C10.8056 7 7 10.8056 7 15.5C7 16.8597 7.31928 18.1449 7.88694 19.2846C8.0378 19.5875 8.08801 19.9337 8.00055 20.2605L7.49428 22.1527C7.27451 22.9741 8.02596 23.7255 8.84735 23.5057L10.7395 22.9995C11.0663 22.912 11.4125 22.9622 11.7154 23.113C12.8551 23.6807 14.1403 24 15.5 24C20.1944 24 24 20.1944 24 15.5C24 13.9518 23.5861 12.5002 22.8629 11.25"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </Svg>
);
export default ChatIcon;
