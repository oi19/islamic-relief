import * as React from "react";
import Svg, {SvgProps, Circle, Path} from "react-native-svg";
const ReportIcon = (props: SvgProps) => (
  // <Svg width={24} height={24} fill="none" {...props}>
  //   <Circle cx={12} cy={12} r={11.5} fill="#fff" stroke="#FB6107" />
  //   <Path
  //     fill="#FB6107"
  //     d="M7.45 16.919c.167.167.376.25.606.25.23 0 .438-.083.605-.25L12 13.579l3.34 3.34c.166.167.375.25.604.25a.857.857 0 0 0 .605-1.46l-3.339-3.34 3.34-3.339a.857.857 0 0 0-1.21-1.21L12 11.159l-3.34-3.34A.857.857 0 0 0 7.45 9.03l3.34 3.34-3.34 3.338a.857.857 0 0 0 0 1.21Z"
  //   />
  // </Svg>

  <Svg width={40} height={40} fill="none" {...props} viewBox="0 0 40 40">
    <Circle cx="20" cy="20" r="20" fill="#DDEEFB" />
    <Path
      d="M21.4544 21.6364H15.6362V23.0909H21.4544V21.6364Z"
      fill="#2F76BC"
    />
    <Path d="M24.3635 18H15.6362V19.4545H24.3635V18Z" fill="#2F76BC" />
    <Path
      d="M19.2726 25.2727H15.6362V26.7273H19.2726V25.2727Z"
      fill="#2F76BC"
    />
    <Path
      d="M26.5455 12.1818H24.3636V11.4545C24.3636 11.0688 24.2104 10.6988 23.9376 10.426C23.6648 10.1532 23.2949 10 22.9091 10H17.0909C16.7051 10 16.3352 10.1532 16.0624 10.426C15.7896 10.6988 15.6364 11.0688 15.6364 11.4545V12.1818H13.4545C13.0688 12.1818 12.6988 12.3351 12.426 12.6078C12.1532 12.8806 12 13.2506 12 13.6364V28.9091C12 29.2949 12.1532 29.6648 12.426 29.9376C12.6988 30.2104 13.0688 30.3636 13.4545 30.3636H26.5455C26.9312 30.3636 27.3012 30.2104 27.574 29.9376C27.8468 29.6648 28 29.2949 28 28.9091V13.6364C28 13.2506 27.8468 12.8806 27.574 12.6078C27.3012 12.3351 26.9312 12.1818 26.5455 12.1818ZM17.0909 11.4545H22.9091V14.3636H17.0909V11.4545ZM26.5455 28.9091H13.4545V13.6364H15.6364V15.8182H24.3636V13.6364H26.5455V28.9091Z"
      fill="#2F76BC"
    />
  </Svg>
);
export default ReportIcon;
