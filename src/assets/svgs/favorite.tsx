import * as React from "react";
import Svg, {SvgProps, G, Circle, Path} from "react-native-svg";

const Favorite = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <G id="Group_1" data-name="Group 1" transform="translate(-290 -318)">
      <Circle
        id="Ellipse_1"
        data-name="Ellipse 1"
        cx={12}
        cy={12}
        r={12}
        transform="translate(290 318)"
        fill="none"
      />
      <G id="heart" transform="translate(294.334 323)">
        <Path
          id="Vector"
          d="M9.738,0a3.707,3.707,0,0,0-3,1.553A3.707,3.707,0,0,0,3.749,0,3.816,3.816,0,0,0,0,3.883a7.617,7.617,0,0,0,.351,2.3A10.292,10.292,0,0,0,6.325,12.3a1.429,1.429,0,0,0,.837,0A10.292,10.292,0,0,0,13.136,6.18a7.617,7.617,0,0,0,.351-2.3A3.816,3.816,0,0,0,9.738,0Z"
          transform="translate(0.923 1.43)"
          fill={props.color || "#cbcbcb"}
        />
      </G>
    </G>
  </Svg>
);

export default Favorite;
