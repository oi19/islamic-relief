import React, {FC, memo} from "react";
import AppLoadingProgressBar from "./AppLoadingProgressBar";
import SegmentedProgressBar from "./SegmentedProgressBar";
import {ViewStyle} from "react-native";

export type ProgressBarProps = {
  type?: "segmented" | "appLoading";
  totalSteps?: number;
  currentStep?: number;
  progressPercentage?: number;
  progressStyle?: ViewStyle;
  onCompletion?: () => void;
};

const ProgressBar: FC<ProgressBarProps> = ({
  type,
  totalSteps,
  currentStep,
  progressPercentage,
  progressStyle,
  onCompletion,
  ...props
}) => {
  switch (type) {
    case "segmented":
      return (
        <SegmentedProgressBar
          totalSteps={totalSteps!}
          currentStep={currentStep!}
          {...props}
        />
      );
    case "appLoading":
      return (
        <AppLoadingProgressBar
          progressStyle={progressStyle}
          progressPercentage={progressPercentage!}
          onCompletion={() => {
            onCompletion && onCompletion();
          }}
          {...props}
        />
      );
    default:
      return (
        <SegmentedProgressBar
          progressStyle={progressStyle}
          totalSteps={totalSteps}
          currentStep={currentStep}
          {...props}
        />
      );
  }
};

export default memo(ProgressBar);
