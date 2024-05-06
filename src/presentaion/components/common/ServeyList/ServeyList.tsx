import React, { RefObject } from "react"
import { FlatList, ListRenderItem, View } from "react-native"

import { isIos } from "../../../../shared/helpers/utils"
import { SCREEN_WIDTH } from "../../../../shared/styles/dimensions"
import { isRTL } from "../../../../infrastructure/localization/i18n-config"
import { selectedAnswerProps } from "../../../screens/ServeyScreen/ServeyScreen"
import { Spacing } from "../../../../shared/styles"
import ProgressBar from "../../shared/ProgressBar/ProgressBar"
import ServeyItem from "../ServeyItem/ServeyItem"

interface ServeyListProps {
  questionList: any[]
  forwardRef: RefObject<FlatList>
  currentIndex: number
  answers: any
  onCompletion: (isLastItem: boolean, answer: selectedAnswerProps) => void
}

const ServeyList: React.FC<ServeyListProps> = ({
  questionList,
  forwardRef,
  answers,
  onCompletion,
}) => {
  const _renderSliderItem: ListRenderItem<any> = ({ item, index }) => {
    const isLastItem = index === questionList.length - 1
    return (
      <ServeyItem
        key={`servey-item-${index}`}
        item={item}
        questionIndex={index}
        questionAnswer={answers[index]}
        isLastItem={isLastItem}
        onCompletion={onCompletion}
      />
    )
  }

  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        ref={forwardRef}
        data={questionList}
        keyExtractor={(item, index) => `slider-item-${index + item}`}
        renderItem={_renderSliderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        pagingEnabled
        scrollEnabled={false}
        getItemLayout={(questionList, index) => {
          const isRtl =
            isRTL() && isIos ? questionList!.length - index - 1 : index
          return {
            length: SCREEN_WIDTH,
            offset: SCREEN_WIDTH * isRtl, // Adjust offset for RTL
            index,
          }
        }}
      />
    </View>
  )
}

export default ServeyList
