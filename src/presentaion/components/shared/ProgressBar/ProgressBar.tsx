import React, {FC, memo} from "react";
import AppLoadingProgressBar from "./AppLoadingProgressBar";
import SegmentedProgressBar from "./SegmentedProgressBar";

export type ProgressBarProps = {
  type?: "segmented" | "appLoading";
  totalSteps?: number;
  currentStep?: number;
  progressPercentage?: number;
  onCompletion?: () => void;
};

const ProgressBar: FC<ProgressBarProps> = ({
  type,
  totalSteps,
  currentStep,
  progressPercentage,
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
          totalSteps={totalSteps}
          currentStep={currentStep}
          {...props}
        />
      );
  }
};

export default memo(ProgressBar);
