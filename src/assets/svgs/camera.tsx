import * as React from "react";
import Svg, {SvgProps, G, Path} from "react-native-svg";

const Camera = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 14.44 13.03" {...props}>
    <G id="photo-camera" transform="translate(0 -25)">
      <G id="Group_589" data-name="Group 589" transform="translate(0 25)">
        <G id="Group_588" data-name="Group 588" transform="translate(0 0)">
          <Path
            id="Path_662"
            data-name="Path 662"
            d="M13.876,33.517a.564.564,0,0,0,.564-.564V29.287a2.259,2.259,0,0,0-2.256-2.256h-.856a.564.564,0,0,1-.534-.382l-.171-.5A1.692,1.692,0,0,0,9.021,25h-3.6a1.7,1.7,0,0,0-1.592,1.117l-.2.541a.566.566,0,0,1-.531.372H2.256A2.259,2.259,0,0,0,0,29.287v6.487A2.259,2.259,0,0,0,2.256,38.03h9.928a2.259,2.259,0,0,0,2.256-2.256.564.564,0,0,0-1.128,0A1.129,1.129,0,0,1,12.184,36.9H2.256a1.129,1.129,0,0,1-1.128-1.128V29.287a1.129,1.129,0,0,1,1.128-1.128H3.1a1.7,1.7,0,0,0,1.592-1.117l.2-.541a.566.566,0,0,1,.531-.372h3.6a.564.564,0,0,1,.534.382l.171.5a1.692,1.692,0,0,0,1.6,1.147h.856a1.129,1.129,0,0,1,1.128,1.128v3.666A.564.564,0,0,0,13.876,33.517Z"
            transform="translate(0 -25)"
            fill="#1e103a"
          />
        </G>
      </G>
      <G
        id="Group_591"
        data-name="Group 591"
        transform="translate(3.723 28.723)">
        <G id="Group_590" data-name="Group 590" transform="translate(0 0)">
          <Path
            id="Path_663"
            data-name="Path 663"
            d="M135.525,157a3.525,3.525,0,1,0,3.525,3.525A3.529,3.529,0,0,0,135.525,157Zm0,5.923a2.4,2.4,0,1,1,2.4-2.4A2.4,2.4,0,0,1,135.525,162.923Z"
            transform="translate(-132 -157)"
            fill="#1e103a"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export default Camera;
