import React from "react"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import { Colors, Spacing } from "../../../../shared/styles"
import Text from "../../shared/Text/Text"
import { FS14 } from "../../../../shared/styles/typography"

interface Tag {
  id: number
  label: string
}

interface TagListProps {
  data: Tag[]
  selectedTags: number[]
  isTagErrorVisible: boolean
  onSelectTags: (filteredSelectedTags: number[]) => void
}

const TagList: React.FC<TagListProps> = ({
  data,
  selectedTags,
  isTagErrorVisible,
  onSelectTags,
}) => {
  const handleTagPress = (id: number) => {
    let filteredSelectedTags: number[]
    if (!selectedTags?.includes(id)) {
      filteredSelectedTags = [...selectedTags, id]
    } else {
      filteredSelectedTags = selectedTags.filter((tagId) => tagId !== id)
    }
    onSelectTags(filteredSelectedTags)
  }

  const _renderTagItem = () => {
    return (
      <View style={styles.tagsListContainer}>
        {data.map((tag: Tag) => (
          <TouchableOpacity
            key={"tageItem" + tag.id}
            style={[
              styles.tag,
              {
                backgroundColor: selectedTags?.includes(tag.id)
                  ? Colors.PRIMARY
                  : Colors.PRIMARY_1,
              },
            ]}
            onPress={() => handleTagPress(tag.id)}
          >
            <Text
              style={{
                color: selectedTags?.includes(tag.id)
                  ? Colors.WHITE
                  : Colors.BLACK,
                marginEnd: Spacing.S4,
              }}
            >
              {selectedTags?.includes(tag.id) ? "-" : "+"}
            </Text>
            <Text
              style={{
                fontSize: FS14,
                color: selectedTags?.includes(tag.id)
                  ? Colors.WHITE
                  : Colors.BLACK,
              }}
            >
              {tag.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
    <View>
      {isTagErrorVisible ? (
        <Text style={{ marginStart: Spacing.S20 }} color="RED">
          at least 1 tag is required
        </Text>
      ) : null}
      {_renderTagItem()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  tagsListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginStart: Spacing.S20,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Spacing.S11,
    paddingHorizontal: Spacing.S16,
    marginVertical: Spacing.S4,
    marginEnd: Spacing.S11,
    borderRadius: 40,
  },
})

export default TagList
