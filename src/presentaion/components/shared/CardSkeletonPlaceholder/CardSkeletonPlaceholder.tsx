import React from "react";
import ContentLoader, {Rect, Circle, Path} from "react-content-loader/native";
// import { DeviceDimenstions } from '../../../../';

const CardSkeletonPlaceholder = (props: any) => {
  return (
    <ContentLoader
      uniqueKey="CardSkeletonPlaceholder"
      speed={0.8}
      width={props.width}
      height={DeviceDimenstions.height / 4.8}
      backgroundColor={theme.color.lightGray}
      foregroundColor={theme.color.darkGrey}>
      <Rect
        x="0"
        y="0"
        rx="24"
        ry="24"
        width={DeviceDimenstions.width - 48}
        height={DeviceDimenstions.height / 4.8}
      />
    </ContentLoader>
  );
};

export default CardSkeletonPlaceholder;
