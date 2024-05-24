import * as React from "react";
import Svg, {SvgProps, Circle, Path} from "react-native-svg";
const About = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props} viewBox="0 0 40 40">
    <Circle cx="20" cy="20" r="20" fill="#DDEEFB" />
    <Path
      d="M20 29C24.9706 29 29 24.9705 29 20C29 15.0294 24.9706 11 20 11C15.0294 11 11 15.0294 11 20C11 24.9705 15.0294 29 20 29Z"
      stroke="#2F76BC"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M20 21C19.7359 20.9951 19.4835 20.8452 19.2967 20.5817C19.1099 20.3182 19.0035 19.9619 19 19.5893V16.4106C19 16.0365 19.1053 15.6778 19.2929 15.4133C19.4804 15.1487 19.7348 15 20 15C20.2652 15 20.5196 15.1487 20.7071 15.4133C20.8947 15.6778 21 16.0365 21 16.4106V19.5893C21 19.9634 20.8947 20.3221 20.7071 20.5866C20.5196 20.8512 20.2652 21 20 21Z"
      fill="#2F76BC"
    />
    <Path
      d="M20 24C19.8672 23.9979 19.736 23.9706 19.6134 23.9198C19.372 23.8196 19.1802 23.6276 19.0801 23.3861C19.0272 23.264 19 23.1321 19 22.999C19 22.8658 19.0272 22.7341 19.0801 22.6118C19.1307 22.4928 19.203 22.3842 19.2934 22.2915C19.3821 22.1966 19.4917 22.1236 19.6134 22.0781C19.7962 22.0013 19.9977 21.9806 20.1924 22.0185C20.3871 22.0565 20.5661 22.1514 20.7066 22.2915C20.8015 22.3804 20.8745 22.49 20.9198 22.6118C20.9727 22.7341 21 22.8658 21 22.999C21 23.1321 20.9727 23.264 20.9198 23.3861C20.8745 23.5079 20.8015 23.6175 20.7066 23.7064C20.5192 23.8942 20.2651 23.9997 20 24Z"
      fill="#2F76BC"
    />
  </Svg>
);
export default About;