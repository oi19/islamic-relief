import * as React from "react";
import Svg, {SvgProps, Path, Circle} from "react-native-svg";
import {Colors} from "../../styles";
const RaiseFundBox = (props: SvgProps) => (
  <Svg
    width={22}
    height={19}
    viewBox="0 0 22 19"
    fill="none"
    // viewBox="0 0 469.333 469.333"
    color={props.color || Colors.WHITE}
    {...props}>
    <Path
      d="M21.3206 5.71381C21.2526 5.63523 21.1678 5.57209 21.0722 5.52881C20.9766 5.48553 20.8725 5.46314 20.7671 5.46323H17.0954C16.9204 4.19383 16.2796 3.02938 15.2918 2.18571C14.304 1.34205 13.0363 0.876372 11.7235 0.875H10.2765C8.96373 0.876372 7.69596 1.34205 6.7082 2.18571C5.72043 3.02938 5.07965 4.19383 4.90461 5.46323H1.23291C1.12751 5.46314 1.02337 5.48553 0.927771 5.52881C0.83217 5.57209 0.747416 5.63523 0.679437 5.71381C0.609106 5.79209 0.557391 5.88458 0.527997 5.98465C0.498604 6.08472 0.492259 6.18989 0.509417 6.29264L2.43751 16.9867C2.53621 17.5185 2.82388 17.9994 3.24995 18.3447C3.67603 18.69 4.21324 18.8778 4.76715 18.875H17.2329C17.7854 18.8752 18.3205 18.6858 18.7444 18.3399C19.1683 17.9941 19.454 17.5138 19.5516 16.9832L21.4906 6.29264C21.5077 6.18989 21.5014 6.08472 21.472 5.98465C21.4426 5.88458 21.3909 5.79209 21.3206 5.71381ZM10.2765 2.28676H11.7235C12.6529 2.28731 13.5528 2.60527 14.2671 3.18548C14.9814 3.76568 15.465 4.57153 15.6339 5.46323H6.36606C6.53504 4.57153 7.01862 3.76568 7.7329 3.18548C8.44717 2.60527 9.34708 2.28731 10.2765 2.28676ZM18.13 16.7361C18.0911 16.9405 17.9801 17.1251 17.8162 17.258C17.6523 17.3908 17.4459 17.4634 17.2329 17.4632H4.76715C4.55743 17.4649 4.35363 17.3954 4.19063 17.2666C4.02763 17.1379 3.91558 16.9578 3.87364 16.7573L2.09386 6.87499H19.9061L18.13 16.7361Z"
      fill="#969696"
    />
  </Svg>
);
export default RaiseFundBox;
