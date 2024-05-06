import React, { FC, memo } from "react"
import AppLoadingProgressBar from "./AppLoadingProgressBar"
import SegmentedProgressBar from "./SegmentedProgressBar"

export type ProgressBarProps = {
  type?: "segmented" | "appLoading"
  totalSteps: number
  currentStep: number
  onCompletion: () => void
}

const ProgressBar: FC<ProgressBarProps> = ({
  type,
  totalSteps,
  currentStep,
  onCompletion,
  ...props
}) => {
  switch (type) {
    case "segmented":
      return (
        <SegmentedProgressBar
          totalSteps={totalSteps}
          currentStep={currentStep}
          {...props}
        />
      )
    case "appLoading":
      return (
        <AppLoadingProgressBar
          progressValue={currentStep}
          onCompletion={onCompletion}
          {...props}
        />
      )
    default:
      return (
        <SegmentedProgressBar
          totalSteps={totalSteps}
          currentStep={currentStep}
          {...props}
        />
      )
  }
}

export default memo(ProgressBar)
