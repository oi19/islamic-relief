import * as React from "react";
import Svg, {SvgProps, Path, Circle} from "react-native-svg";
const Filter = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke={props.color || "#33363F"}
      strokeLinecap="round"
      strokeWidth={2}
      d="M11 8h9M4 16h10"
    />
    <Circle
      cx={7}
      cy={8}
      r={3}
      stroke={props.color || "#33363F"}
      strokeLinecap="round"
      strokeWidth={2}
      transform="rotate(90 7 8)"
    />
    <Circle
      cx={17}
      cy={16}
      r={3}
      stroke={props.color || "#33363F"}
      strokeLinecap="round"
      strokeWidth={2}
      transform="rotate(90 17 16)"
    />
  </Svg>
);
export default Filter;
