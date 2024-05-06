export interface fixedServeyAnswerProps {
  text: string
  describtion: string
  emoji: string
}

export const fixedServeyAnswer: fixedServeyAnswerProps[] = [
  {
    text: "Very Sad",
    describtion: "I won't come again",
    emoji: require("../../../../assets/images/sad-emoji.png"),
  },
  {
    text: "Sad",
    describtion: "I was disappointed",
    emoji: require("../../../../assets/images/disappointed-emoji.png"),
  },
  {
    text: "Neutral",
    describtion: "It was okay",
    emoji: require("../../../../assets/images/neutral-emoji.png"),
  },
  {
    text: "Good",
    describtion: "I will come again",
    emoji: require("../../../../assets/images/happy-emoji.png"),
  },
  {
    text: "Excellent",
    describtion: "I will tell my friends",
    emoji: require("../../../../assets/images/excellent-emoji.png"),
  },
]
