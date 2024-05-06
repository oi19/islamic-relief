import React, { RefObject, useCallback, useEffect, useState } from "react"
import {
  View,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
  Keyboard,
} from "react-native"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { translate } from "../../../../shared/helpers/language"
import { Colors, Spacing } from "../../../../shared/styles"
import { scale } from "../../../../shared/styles/dimensions"
import Button from "../../shared/Button/Button"
import Text from "../../shared/Text/Text"
import Input from "../../shared/Input/Input"
import BaseModal from "../BaseModal/BaseModal"
import { styles } from "./styles"
import { taglist as data } from "./data"
import { selectedAnswerBodyProps } from "../../../screens/ServeyScreen/ServeyScreen"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import TagList from "../TagList/TagList"

type AddReviewModelModelProps = {
  forwardRef: RefObject<BottomSheetModal>
  questionAnswer: selectedAnswerBodyProps
  isReset?: boolean
  onCompletion: (data: any) => void
  onCancel: () => void
}
// Enable LayoutAnimation for Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const AddReviewModel: React.FC<AddReviewModelModelProps> = ({
  forwardRef,
  questionAnswer,
  onCompletion,
  onCancel,
}) => {
  const description = questionAnswer?.description ?? ""
  const tags = questionAnswer?.tags ?? []
  const [selectedTags, setSelectedTags] = useState<number[]>(tags)
  const [textInputValue, setTextInputValue] = useState<string>(description)
  const [isTagErrorVisible, setTagErrorVisible] = useState<boolean>(false)
  const [isTextInputVisible, setTextInputVisible] = useState<boolean>(false)
  const [snapPoints, setSnapPoints] = useState<Array<number | string>>(["50%"])

  useEffect(() => {
    console.log(questionAnswer)
    setSelectedTags(tags)
    setTextInputValue(description)
    toggleTextInput(description ? true : false)
  }, [questionAnswer])

  const handleTagPress = (filteredSelectedTags: number[]) => {
    setTagErrorVisible(false)
    setSelectedTags(filteredSelectedTags)
  }

  const toggleTextInput = useCallback((isVisible: boolean) => {
    Keyboard.dismiss()
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setTextInputVisible(isVisible)
    setSnapPoints(isVisible === false ? ["50%"] : ["65%"])
  }, [])

  const onSendReview = () => {
    if (validate()) {
      onCompletion({
        description: textInputValue?.trim(),
        tags: selectedTags,
      })
    }
  }

  const validate = () => {
    if (selectedTags?.length === 0) {
      setTagErrorVisible(true)
      return false
    }
    return true
  }

  const onCancelButtonPressed = () => {
    Keyboard.dismiss()
    onCancel()
    setTagErrorVisible(false)
    checkPreviousData()
    if (description) {
      toggleTextInput(true)
    } else {
      toggleTextInput(false)
    }
  }

  const checkPreviousData = () => {
    setSelectedTags(tags)
    setTextInputValue(description)
  }

  return (
    <BaseModal
      forwardRef={forwardRef}
      onBackgroundPress={onCancelButtonPressed}
      enableDrag={true}
      snapPoints={snapPoints}
      backgroundStyle={{
        backgroundColor: Colors.GRAY_EEEEEE,
        borderRadius: scale(20),
      }}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardDismissMode="interactive"
        automaticallyAdjustKeyboardInsets={true}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        extraScrollHeight={Platform.select({ ios: 250, android: 60 })}
      >
        <View style={styles.container}>
          <View style={styles.titleQuestionContainer}>
            <Text fontSize="FS18" color="FONT_07101A" fontFamily="MEDIUM">
              {"What did we do wrong?"}
            </Text>
            <Button
              iconName="close"
              iconStyle={{ color: Colors.PRIMARY }}
              style={{ paddingHorizontal: Spacing.S20 }}
              onPress={onCancelButtonPressed}
            />
          </View>
          <TagList
            data={data}
            selectedTags={selectedTags}
            onSelectTags={handleTagPress}
            isTagErrorVisible={isTagErrorVisible}
          />
          {!isTextInputVisible ? (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={() => toggleTextInput(true)}>
                <Text style={styles.shareOpinionText}>Tell Us More</Text>
              </TouchableOpacity>
              <Text>(optional)</Text>
            </View>
          ) : null}
          {isTextInputVisible || description ? (
            <Input
              defaultValue={textInputValue}
              multiline
              numberOfLines={4}
              placeholder={"Write here..."}
              textAlignVertical="top"
              keyboardAppearance="default"
              returnKeyType="done"
              enterKeyHint="done"
              dismissKeyboard={true}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.problemInputStyle}
              onChangeText={(text: string) => setTextInputValue(text)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Enter") {
                  Keyboard.dismiss()
                }
              }}
            />
          ) : null}

          <Button
            type="standard"
            isLoading={false}
            text={translate("Common.sendReview")}
            style={{ alignSelf: "center", width: "100%" }}
            containerStyle={{ marginHorizontal: Spacing.S20 }}
            onPress={onSendReview}
          />
        </View>
      </KeyboardAwareScrollView>
    </BaseModal>
  )
}
export default AddReviewModel
