import { data as serveyQuestionList } from "../../mock/serveyQuestions.json"

export const postPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("posted Successfuly 200")
  }, 3000)
})

export const fetchServeyQuestionList = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(serveyQuestionList)
  }, 1000)
})
