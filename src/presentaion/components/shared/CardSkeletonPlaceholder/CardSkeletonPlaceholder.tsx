import React from "react";
import ContentLoader, {Rect, Circle, Path} from "react-content-loader/native";
import {Colors} from "../../../../styles";
// import { DeviceDimenstions } from '../../../../';

interface CardSkeletonPlaceholderProps {
  width: number | string;
  height: number | string;
}

const CardSkeletonPlaceholder: React.FC<CardSkeletonPlaceholderProps> = ({
  width,
  height,
}) => {
  return (
    <ContentLoader
      uniqueKey="CardSkeletonPlaceholder"
      speed={0.8}
      width={width}
      height={height}
      backgroundColor={"lightgrey"}
      foregroundColor={Colors.GRAY_969696}>
      <Rect x="0" y="0" rx="24" ry="24" width={width} height={height} />
    </ContentLoader>
  );
};

export default CardSkeletonPlaceholder;
