import React, {memo, FC} from "react";
import {SharedValue} from "react-native-reanimated";
import {ViewStyle} from "react-native";

import {AnimatedHeader} from "./AnimatedHeader";
import {DefaultHeader} from "./Header";
import {TransparentHeader} from "./TransparentHeader";

const Header: FC<{
  type?: "transparent" | "animatedHeader";
  y?: SharedValue<number>;
  title?: string;
  placeholder?: string;
  authHeader?: boolean;
  onReset?: () => void;
  onFilter?: () => void;
  onBack?: () => void;
  onSearch?: (text: string) => void;
  onFocus?: () => void;
  autoFocus?: boolean;
  style?: ViewStyle;
  renderHeaderSideIcons?: () => React.ReactNode;
}> = ({...props}) => {
  switch (props.type) {
    case "transparent":
      return <TransparentHeader {...props} />;
    case "animatedHeader":
      return <AnimatedHeader {...props} />;

    default:
      return <DefaultHeader {...props} />;
  }
};

export default memo(Header);
