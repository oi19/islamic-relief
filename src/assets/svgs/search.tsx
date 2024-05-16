import * as React from "react";
import Svg, {SvgProps, G, Path} from "react-native-svg";

const Search = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill={"none"} {...props}>
    {/* <G id="search-normal"> */}
    {/* <Path
        id="Vector"
        d="M6.833,13.667a6.833,6.833,0,1,1,6.833-6.833A6.843,6.843,0,0,1,6.833,13.667ZM6.833,1a5.833,5.833,0,1,0,5.833,5.833A5.84,5.84,0,0,0,6.833,1Z"
        transform="translate(0.833 0.833)"
        fill={props.color || "#1e103a"}
      />
      <Path
        id="Vector-2"
        data-name="Vector"
        d="M1.832,2.332a.494.494,0,0,1-.353-.147L.145.852A.5.5,0,0,1,.852.145L2.185,1.478a.5.5,0,0,1,0,.707A.494.494,0,0,1,1.832,2.332Z"
        transform="translate(12.835 12.835)"
        fill={props.color || "#1e103a"}
      />
      <Path
        id="Vector-3"
        data-name="Vector"
        d="M0,0H16V16H0Z"
        fill="none"
        opacity={0}
      /> */}
    <Path
      d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
      stroke={props.color || "#3E3E3E"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    {/* </G> */}
  </Svg>
);

export default Search;
