import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";
const Wallet = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fill="#FB6107"
      d="M8.702 0h.332c.02.009.04.021.06.025.443.088.735.339.89.736.114.298.235.594.338.896.041.12.098.158.233.157.99-.006 1.979-.005 2.969-.003.728.001 1.218.463 1.22 1.145v1.099c1.111.122 1.76.808 1.76 1.84 0 .546.002 1.093-.002 1.639 0 .09.02.137.126.158a.935.935 0 0 1 .579.34c.12.162.197.353.293.532v2.875c-.097.275-.22.538-.492.697-.152.088-.324.148-.504.229v.15c0 .568.003 1.136-.002 1.703-.001.15-.013.304-.05.448-.202.81-.927 1.333-1.844 1.333H2.724c-.144 0-.288.003-.432-.001-.997-.028-1.785-.77-1.787-1.708a1953.68 1953.68 0 0 1 0-8.531c.001-.788.576-1.457 1.387-1.648.1-.024.203-.038.315-.058L2.02 3.56c-.272-.706.009-1.278.754-1.532L8.703 0Zm6.799 7.656c.003-.063.007-.109.007-.154 0-.557.002-1.115 0-1.672-.001-.504-.346-.83-.882-.83-4.083-.002-8.167-.002-12.25 0-.535 0-.877.327-.877.835v8.391c0 .51.35.836.896.836h12.217c.553 0 .896-.327.897-.852v-1.703c0-.05-.005-.101-.008-.163h-.174c-.564 0-1.129.006-1.693-.002-1.343-.02-2.436-1.067-2.44-2.33-.006-1.291 1.09-2.341 2.461-2.355.61-.006 1.217 0 1.847 0l-.001-.001Zm-6.183-5.86c-.091-.242-.182-.475-.27-.71C8.999.948 8.905.92 8.764.97c-.268.096-.539.187-.808.28L3.113 2.906c-.218.075-.24.12-.16.325.086.225.181.447.258.674.04.117.094.16.232.159 1.438-.006 2.876-.004 4.314-.004h.182c0-.41-.006-.795 0-1.18.01-.506.382-.934.907-1.04.144-.03.295-.03.472-.045Zm5.626 9.585v.024c.443 0 .885.002 1.328 0 .175 0 .231-.052.231-.212.001-.797 0-1.594.002-2.39 0-.143-.062-.211-.218-.21-.884.002-1.77-.006-2.654.004-.757.008-1.393.592-1.442 1.3a1.391 1.391 0 0 0 1.246 1.475c.497.05 1.005.01 1.507.01ZM8.936 4.047h4.804c.004-.024.007-.034.007-.044l.002-.983c0-.241-.032-.272-.283-.272H9.221c-.038 0-.088-.014-.114.004-.063.043-.162.1-.164.155-.014.378-.007.757-.007 1.14Z"
    />
  </Svg>
);
export default Wallet;
