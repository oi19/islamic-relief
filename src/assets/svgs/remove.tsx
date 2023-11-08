import * as React from "react";
import Svg, {SvgProps, G, Path} from "react-native-svg";

const Remove = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 10 10" {...props}>
    <G id="trash">
      <Path
        id="Vector"
        d="M7.5.208C6.113.071,4.717,0,3.325,0A24.612,24.612,0,0,0,.85.125L0,.208"
        transform="translate(1.25 2.283)"
        fill="none"
        stroke="#1e103a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.6}
      />
      <Path
        id="Vector-2"
        data-name="Vector"
        d="M0,1.237.092.692C.158.3.208,0,.912,0H2c.7,0,.758.313.821.7l.092.542"
        transform="translate(3.542 0.833)"
        fill="none"
        stroke="#1e103a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.6}
      />
      <Path
        id="Vector-3"
        data-name="Vector"
        d="M5.708,0,5.438,4.2c-.046.654-.083,1.163-1.246,1.163H1.517C.354,5.358.317,4.85.271,4.2L0,0"
        transform="translate(2.146 3.808)"
        fill="none"
        stroke="#1e103a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.6}
      />
      <Path
        id="Vector-4"
        data-name="Vector"
        d="M0,0H1.388"
        transform="translate(4.304 6.875)"
        fill="none"
        stroke="#1e103a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.6}
      />
      <Path
        id="Vector-5"
        data-name="Vector"
        d="M0,0H2.083"
        transform="translate(3.958 5.208)"
        fill="none"
        stroke="#1e103a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.6}
      />
      <Path
        id="Vector-6"
        data-name="Vector"
        d="M0,0H10V10H0Z"
        fill="none"
        opacity={0}
      />
    </G>
  </Svg>
);

export default Remove;
