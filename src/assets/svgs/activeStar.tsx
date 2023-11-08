import * as React from "react";
import Svg, {SvgProps, G, Path} from "react-native-svg";

const ActiveStar = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 16 16" {...props}>
    <G id="star">
      <Path
        id="Vector"
        d="M7.819.955,8.993,3.3a1.449,1.449,0,0,0,.947.7l2.127.353c1.36.227,1.68,1.213.7,2.187L11.113,8.195A1.448,1.448,0,0,0,10.766,9.4l.473,2.047c.373,1.62-.487,2.247-1.92,1.4l-1.993-1.18a1.441,1.441,0,0,0-1.32,0l-1.993,1.18c-1.427.847-2.293.213-1.92-1.4L2.566,9.4a1.447,1.447,0,0,0-.347-1.207L.566,6.542c-.973-.973-.66-1.96.7-2.187L3.393,4a1.452,1.452,0,0,0,.94-.7L5.506.955C6.146-.318,7.186-.318,7.819.955Z"
        transform="translate(1.334 1.385)"
        fill={props.color || "#7322a7"}
      />
      <Path
        id="Vector-2"
        data-name="Vector"
        d="M0,0H16V16H0Z"
        fill={props.color || "#7322a7"}
        opacity={0}
      />
    </G>
  </Svg>
);

export default ActiveStar;
