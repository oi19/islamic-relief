import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const Menu = (props: SvgProps) => (
  <Svg width={24} height={24} stroke="#F08C21" viewBox="0 0 20 20" {...props}>
    <Path
      fill="#F08C21"
      fillRule="evenodd"
      d="M19 4a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1zm0 6a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1zm-1 7a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2h16z"
    />
  </Svg>
);
export default Menu;
