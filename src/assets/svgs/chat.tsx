import * as React from "react";
import Svg, {SvgProps, G, Path} from "react-native-svg";
const Chat = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G
      stroke={props.color || "#B3B3B3"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}>
      <Path
        fill={props.color || "#B3B3B3"}
        d="M19.071 19.07c-3.056 3.056-7.581 3.717-11.285 2.004-.546-.22-.995-.398-1.42-.398-1.188.007-2.665 1.158-3.433.391-.767-.768.384-2.246.384-3.44 0-.427-.17-.867-.39-1.415C1.212 12.51 1.873 7.982 4.93 4.927c3.902-3.903 10.24-3.903 14.141 0 3.909 3.908 3.902 10.241 0 14.143Z"
        clipRule="evenodd"
      />
      <Path
        stroke={"white"}
        d="M15.94 12.413h.008M11.93 12.413h.01M7.921 12.413h.01"
      />
    </G>
  </Svg>
);
export default Chat;
