import React, { useRef, useState } from "react"
import { View, Image } from "react-native"
import Button from "../../shared/Button/Button"
import Text from "../../shared/Text/Text"
import AddReviewModel from "../AddReviewModel"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import {
  selectedAnswerBodyProps,
  selectedAnswerProps,
} from "../../../screens/ServeyScreen/ServeyScreen"
import { fixedServeyAnswer, fixedServeyAnswerProps } from "./data"
import { styles } from "./styles"
import { ScrollView } from "react-native-gesture-handler"

interface serveyItemProps {
  item: any
  isLastItem: boolean
  questionIndex: number
  questionAnswer: selectedAnswerBodyProps
  onCompletion: (isLastItem: boolean, answerBody: selectedAnswerProps) => void
}

const ServeyItem: React.FC<serveyItemProps> = ({
  item,
  isLastItem,
  questionIndex,
  questionAnswer,
  onCompletion,
}) => {
  const reviewModalRef = useRef<BottomSheetModal>(null)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(
    questionAnswer?.answerId ?? -1
  )
  const [previousAnswerIndex, setPreviousAnswerIndex] = useState<number>(-1)

  const openReviewModal = () => {
    reviewModalRef.current?.present()
  }

  const closeReviewModal = () => {
    reviewModalRef.current?.close()
  }

  const onAnswerButtonPressed = (selectedButtonIndex: number) => {
    setPreviousAnswerIndex(selectedAnswerIndex) // Store the previous index
    setSelectedAnswerIndex(selectedButtonIndex) // Set the current index
    if (selectedButtonIndex === 0 || selectedButtonIndex === 1) {
      openReviewModal()
    } else {
      onCompletion(isLastItem, {
        [questionIndex]: {
          answerId: selectedButtonIndex,
          description: null,
          tags: [],
        },
      })
    }
  }

  const onSubmitReview = (review: selectedAnswerBodyProps | null) => {
    closeReviewModal()
    console.log(review)

    setTimeout(() => {
      onCompletion(isLastItem, {
        [questionIndex]: {
          answerId: selectedAnswerIndex,
          tags: review.tags,
          description: review?.description !== "" ? review?.description : null,
        },
      })
    }, 400)
  }

  const onCancel = () => {
    setSelectedAnswerIndex(previousAnswerIndex) // Restore the previous index on cancellation
    setTimeout(() => {
      closeReviewModal()
    }, 300)
  }

  const _renderAnswerButton = (
    item: fixedServeyAnswerProps,
    buttonIndex: number
  ) => {
    const isSelected = buttonIndex === selectedAnswerIndex
    return (
      <View key={buttonIndex}>
        <Button
          type={isSelected ? "standard" : "border"}
          onPress={() => onAnswerButtonPressed(buttonIndex)}
          style={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
        >
          {item.emoji ? (
            <View style={styles.imageContainerStyle}>
              <Image style={styles.image} source={item.emoji} />
            </View>
          ) : null}

          <View style={styles.buttonTextContainer}>
            <Text
              color={isSelected ? "WHITE" : "BLACK"}
              fontFamily="BOLD"
              fontSize="FS18"
              style={styles.baseButtonText}
            >
              {item.text}
            </Text>

            <Text
              color={isSelected ? "WHITE" : "BLACK"}
              fontFamily="REGULAR"
              fontSize="FS14"
              style={styles.baseButtonText}
            >
              {item.describtion}
            </Text>
          </View>
        </Button>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text
          color="FONT_07101A"
          fontSize="H1"
          fontFamily="MEDIUM"
          style={styles.baseText}
        >
          {item}
        </Text>
      </View>

      {fixedServeyAnswer.map((answerButtonItem, index) => {
        return _renderAnswerButton(answerButtonItem, index)
      })}
      <AddReviewModel
        key={"reivewModal key" + questionIndex}
        onCancel={onCancel}
        questionAnswer={questionAnswer}
        onCompletion={onSubmitReview}
        forwardRef={reviewModalRef}
        isReset={selectedAnswerIndex !== 0 && selectedAnswerIndex !== 1}
      />
    </ScrollView>
  )
}

export default ServeyItem
