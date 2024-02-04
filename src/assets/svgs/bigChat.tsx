import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const BigChat = (props: SvgProps) => (
  <Svg width={155} height={154} fill="none" {...props}>
    <Path
      fill="#F87905"
      fillOpacity={0.4}
      stroke="#F87905"
      strokeWidth={6}
      d="m11.25 142.917-.022.006-.022.007c-1.008.317-1.743.037-2.137-.326-.358-.33-.685-.954-.403-1.998l5.136-17.17c1.064-3.06.93-6.506-.793-9.363C6.603 102.281 3 89.456 3 77.098 3 38.101 34.214 3 77.252 3c42.069 0 73.944 34.44 73.944 73.867 0 45.681-37.272 74.098-74.098 74.098-12.16 0-25.64-3.273-36.385-9.598-3.85-2.335-8.272-4.896-13.926-3.065l-15.537 4.615Z"
    />
    <Path
      fill="#fff"
      d="M41.403 67.308a9.838 9.838 0 0 1 9.868 9.868c0 5.397-4.394 9.792-9.868 9.869-5.397 0-9.869-4.472-9.869-9.869a9.838 9.838 0 0 1 9.869-9.868Zm35.545 0a9.838 9.838 0 0 1 9.869 9.868c0 5.397-4.395 9.869-9.869 9.869-5.474-.077-9.868-4.472-9.868-9.946 0-5.397 4.471-9.868 9.868-9.791Zm35.541 0a9.838 9.838 0 0 1 9.868 9.868c0 5.397-4.394 9.869-9.868 9.869s-9.869-4.472-9.869-9.869a9.839 9.839 0 0 1 9.869-9.868Z"
    />
  </Svg>
);
export default BigChat;
