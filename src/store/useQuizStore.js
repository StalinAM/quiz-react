import { create } from 'zustand'
import { questionsData } from '../data/questions'

export const useQuizStore = create((set) => ({
  questions: questionsData,
  currentQuestionIndex: 0,
  score: 0,
  setAnswer: (selected) =>
    set((state) => {
      const isCorrect =
        selected === state.questions[state.currentQuestionIndex].answer
      return {
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestionIndex: state.currentQuestionIndex + 1
      }
    }),
  resetQuiz: () => set({ currentQuestionIndex: 0, score: 0 })
}))
