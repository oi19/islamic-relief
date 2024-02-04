import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const Document = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fill={props.color || "#B3B3B3"}
      stroke={props.color || "#B3B3B3"}
      strokeWidth={2}
      d="M7.81 3h8.381c1.354 0 2.271.386 2.851.974.583.59.958 1.515.958 2.856v10.33c0 1.37-.377 2.295-.956 2.878-.578.582-1.493.962-2.853.962H7.81c-1.332 0-2.251-.378-2.838-.965C4.385 19.45 4 18.522 4 17.16V6.83c0-1.333.383-2.26.974-2.853C5.564 3.384 6.484 3 7.81 3Z"
    />
    <Path
      fill={"white"}
      d="M8.08 15.74h7.84c.399.04.7.38.7.79 0 .399-.301.74-.7.78H8.08c-.3.04-.59-.11-.75-.36a.795.795 0 0 1 .75-1.21Zm7.84-4.561a.781.781 0 0 1 0 1.561H8.08a.78.78 0 0 1 0-1.561h7.84ZM11.069 6.65c.431 0 .781.35.781.779 0 .441-.35.791-.781.791H8.08a.78.78 0 0 1 0-1.56v-.01h2.989Z"
    />
  </Svg>
);
export default Document;
